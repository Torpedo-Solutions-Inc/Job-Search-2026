const puppeteer = require('puppeteer');
const path = require('path');

async function convertToPDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const htmlPath = path.resolve(__dirname, 'resume-beautiful.html');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    
    await page.pdf({
        path: path.resolve(__dirname, 'resume-beautiful.pdf'),
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        }
    });
    
    await browser.close();
    console.log('PDF created successfully: resume-beautiful.pdf');
}

convertToPDF().catch(console.error);

