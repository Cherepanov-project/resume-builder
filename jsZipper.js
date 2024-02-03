import JSZip from 'jszip';

const createZip = async () => {
  //создаем экземпляр JSZip
  const zip = new JSZip();

  //задать содержимое файлов (htmlContent, cssContent, jsContent)!
  const htmlContent = '<html><head></head><body><h1>Hello, Zip!</h1></body></html>';
  const cssContent = 'body { background-color: #f0f0f0; }';
  const jsContent = 'console.log("Hello from JS!");';

  //Добавление HTML, CSS и JS папок/файлов
  const htmlFolder = zip.folder('html');
  const cssFolder = zip.folder('css');
  const jsFolder = zip.folder('js');

  //контент пока не определен
  htmlFolder.file('index.html', htmlContent);
  cssFolder.file('style.css', cssContent);
  jsFolder.file('script.js', jsContent);

  //Генерация ZIP-архива и создание ссылки для загрузки
  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'myReactPage.zip';
  link.click();
  URL.revokeObjectURL(url);
};

export default createZip;
