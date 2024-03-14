import JSZip from 'jszip';
import store from '@store/store.ts';
import { jsZipperStyleImporter } from '.';
import { jsZipperLogicImporter } from '.';

const createZip = async () => {
  //тут мы получили список активных элементов
  //в каждом должно лежать свойство со значением - текст скрипта.
  //их мы будем собирать в scriptContent
  const state = store.getState();
  console.log(state);
  const activeElements = state.layout.activeElements;

  const zip = new JSZip();
  const htmlElement = document.querySelector('[class^="previewSpace"]');
  const htmlContent = htmlElement?.innerHTML;
  console.log(htmlContent);
  // const myStyles = document.styleSheets;
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

  //сборка текстов скрипта из активных элементов
  const scriptContent = activeElements.reduce((acc, el) => {
    return acc + el.elementScript;
  }, '');
  //скрипты со страницы
  // const myScripts = document.scripts;
  const scriptsArray = Array.from(document.scripts) as HTMLScriptElement[];

  let jsContent = '';

  for (const script of scriptsArray) {
    jsContent += script.outerHTML;
  }
  jsContent += scriptContent;
  console.log(jsContent);

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
      ${jsZipperStyleImporter(htmlContent)}
    </head>
    <body>
    <div style="display:flex; flex-direction:column;align-items:center;">
      ${htmlContent}
      </div>
      ${jsZipperLogicImporter(htmlContent)}      
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
};

export default createZip;
