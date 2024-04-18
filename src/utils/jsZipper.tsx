import JSZip from 'jszip';
import store from '@store/store.ts';
import { T_BlockElement } from '@/types/landingBuilder';
import { stylesImport, logicImport } from './';

const createZip = async () => {
  //тут мы получили список активных элементов
  //в каждом должно лежать свойство со значением - текст скрипта.
  setTimeout(() => {
    const state = store.getState();

    let activeElements: T_BlockElement[] = [];
    for (const container of state.layout.gridContainers) {
      activeElements = activeElements.concat(container.elements.activeElements);
    }

    const zip = new JSZip();
    const htmlElement = document.querySelector('[class^="previewSpace"]');
    const htmlContent = htmlElement!.innerHTML;
    const styleSheetsArray = Array.from(document.styleSheets) as CSSStyleSheet[];
    let cssContent = '';
    for (const styleSheet of styleSheetsArray) {
      if (styleSheet.cssRules) {
        const styleSheetsRuleArray = Array.from(styleSheet.cssRules) as CSSRule[];
        for (const rule of styleSheetsRuleArray) {
          cssContent += rule.cssText;
        }
      }
    }

    const presetName = state.swiper.presetName;

    const jsContent = logicImport(htmlContent, presetName);

    if (htmlElement && htmlContent && cssContent && jsContent) {
      zip.file('styles.css', new Blob([cssContent], { type: 'text/css' }));
      zip.file('script.js', new Blob([jsContent], { type: 'text/javascript' }));
      const newHTMLContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My New Website</title>
      <link rel="stylesheet" href="styles.css">
      ${stylesImport(htmlContent)}
    </head>
    <body>
    <div style="display:flex; flex-direction:column;align-items:center;">
      ${htmlContent}
      </div>
      ${jsContent}
    </body>
    </html>
  `;
      zip.file('index.html', new Blob([newHTMLContent], { type: 'text/html' }));
    } else {
      console.error('Не удалось получить содержимое для архивации.');
    }
    zip.generateAsync({ type: 'blob' }).then(function (content) {
      let link: HTMLAnchorElement | null = document.createElement('a');
      const url = URL.createObjectURL(content);
      link.href = url;
      link.download = 'website_files.zip';
      link.click();
      link = null;
      URL.revokeObjectURL(url);
    });
  }, 3000);
};

export default createZip;
