const puppeteer = require('puppeteer');
const path = require('path');

async function convertToPDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const htmlPath = path.resolve(__dirname, 'index.html');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    
    await page.pdf({
        path: path.resolve(__dirname, 'index.pdf'),
        /* Respect CSS @page (size/margins) from index.html */
        preferCSSPageSize: true,
        format: 'A4',
        printBackground: true,
    });
    
    await browser.close();
    console.log('PDF created successfully: index.pdf');
}

convertToPDF().catch(console.error);

