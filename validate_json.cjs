const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'messages', 'en.json');

try {
    const data = fs.readFileSync(filePath, 'utf8');
    JSON.parse(data);
    console.log('Valid JSON');
} catch (e) {
    console.error('Invalid JSON:', e.message);
}
