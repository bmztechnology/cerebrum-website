export async function generateMetadata({ params }) {
    const { locale } = await params;
    return {
        alternates: {
            canonical: `/${locale}/download`,
        }
    };
}

export default function DownloadLayout({ children }) {
    return <>{children}</>;
}
