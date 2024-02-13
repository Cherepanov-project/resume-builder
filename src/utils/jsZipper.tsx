import JSZip from 'jszip';
import store from '@store/store.ts';

const createZip = async () => {
  //тут мы получили список активных элементов
  //в каждом должно лежать свойство со значением - текст скрипта.
  //их мы будем собирать в scriptContent
  const state = store.getState();
  const activeElements = state.layout.activeElements;

  const zip = new JSZip();
  const htmlElement = document.querySelector('[class^="_previewSpace"]');
  const htmlContent = htmlElement?.innerHTML;
  const myStyles = document.styleSheets;
  let cssContent = '';
  for (const styleSheet of myStyles) {
    if (styleSheet.cssRules) {
      for (const rule of styleSheet.cssRules) {
        cssContent += rule.cssText;
      }
    }
  }

  //сборка текстов скрипта из активных элементов
  const scriptContent = activeElements.reduce((acc, el) => {
    return acc + el.elementScript;
  }, '');
  //скрипты со страницы
  const myScripts = document.scripts;

  console.log(myScripts);
  let jsContent = '';
  for (const script of myScripts) {
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
};

export default createZip;
