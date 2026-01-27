import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Pointing to the external directory containing the 1000 markdown files
// Pointing to the internal directory containing the 1000 markdown files (Cloud Compatible)
const contentDirectory = path.join(process.cwd(), 'principles');

// Categorization Logic
function assignCategory(title) {
    const t = title.toLowerCase();

    if (t.includes('risk') || t.includes('money management') || t.includes('sizing') || t.includes('drawdown')) return 'Risk Management';
    if (t.includes('psychology') || t.includes('bias') || t.includes('mindset') || t.includes('behavioral') || t.includes('emotion')) return 'Trading Psychology';
    if (t.includes('crypto') || t.includes('bitcoin') || t.includes('defi') || t.includes('token') || t.includes('blockchain')) return 'Crypto & DeFi';
    if (t.includes('option') || t.includes('derivative') || t.includes('swap') || t.includes('future') || t.includes('arbitrage') || t.includes('hedging')) return 'Derivatives & Hedging';
    if (t.includes('math') || t.includes('calculus') || t.includes('probability') || t.includes('stochastic') || t.includes('regression') || t.includes('quant') || t.includes('model') || t.includes('algorithm')) return 'Quantitative Finance';
    if (t.includes('indicator') || t.includes('chart') || t.includes('pattern') || t.includes('candle') || t.includes('technical') || t.includes('rsi') || t.includes('macd') || t.includes('average')) return 'Technical Analysis';
    if (t.includes('economic') || t.includes('central bank') || t.includes('policy') || t.includes('inflation') || t.includes('gdp') || t.includes('debt') || t.includes('crisis') || t.includes('macro')) return 'Macroeconomics';
    if (t.includes('microstructure') || t.includes('order book') || t.includes('liquidity') || t.includes('hft') || t.includes('execution')) return 'Market Microstructure';

    return 'General Trading Principles';
}

export function getAllLessons() {
    // Check if directory exists
    if (!fs.existsSync(contentDirectory)) {
        console.warn(`Content directory not found: ${contentDirectory}`);
        return [];
    }

    const fileNames = fs.readdirSync(contentDirectory);

    const allLessonsData = fileNames.filter(fileName => fileName.endsWith('.md')).map(fileName => {
        // Remove ".md" from file name to get id (slug)
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents);

        // Fallback title generation if no frontmatter title
        let title = data.title;
        if (!title) {
            // Try to find first H1 header
            const h1Match = content.match(/^#\s+(.+)$/m);
            if (h1Match) {
                title = h1Match[1];
            } else {
                // Fallback to filename formatting
                title = slug.replace(/_/g, ' ').replace(/^\d+\s*/, ''); // Remove numbering if present
                title = title.charAt(0).toUpperCase() + title.slice(1);
            }
        }

        return {
            slug,
            title,
            category: assignCategory(title),
            ...data,
        };
    });

    // Sort lessons by filename (assuming numbering 001, 002... preserves order)
    return allLessonsData.sort((a, b) => {
        return a.slug.localeCompare(b.slug, undefined, { numeric: true, sensitivity: 'base' });
    });
}

export function getLessonBySlug(slug) {
    const fullPath = path.join(contentDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    let title = data.title;
    if (!title) {
        const h1Match = content.match(/^#\s+(.+)$/m);
        if (h1Match) {
            title = h1Match[1];
        } else {
            title = slug.replace(/_/g, ' ').replace(/^\d+\s*/, '');
            title = title.charAt(0).toUpperCase() + title.slice(1);
        }
    }

    return {
        slug,
        title,
        content,
        ...data,
    };
}
