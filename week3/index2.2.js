const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

async function searchJSFiles(dir) {
    try {
        const entries = await readdir(dir);

        for (const entry of entries) {
            const fullPath = path.join(dir, entry);
            try {
                const entryStat = await stat(fullPath);
                if (entryStat.isDirectory()) {
                    await searchJSFiles(fullPath);  // 재귀 호출
                } else if (path.extname(entry) === '.js') {
                    console.log(fullPath);
                }
            } catch (err) {
                console.error(`Error reading ${fullPath}:`, err.message);
            }
        }
    } catch (err) {
        console.error(`Error reading directory ${dir}:`, err.message);
    }
}

// 시작 디렉토리
searchJSFiles('test');
