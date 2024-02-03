import PreviewSpace from '@organisms/PreviewSpace';
import { PrecisionManufacturing } from '@mui/icons-material';
import DefaultButton from '@atoms/DefaultButton';

const LandingPreview = () => {
  //Тестовая функция для проверки связи с локальным сервером Node.js Express
  function fetchHello() {
    fetch('https://landing-server-jeremyhoo.amvera.io/api/test')
      .then((res) => res.json())
      .then((res) => console.log(res.message));
  }

  //Функция с запросом на сервер для запуска скрипта сборки и архивации.
  const executeScriptBuild = async () => {
    console.log('Execution begins...');
    try {
      const response = await fetch('https://landing-server-jeremyhoo.amvera.io/api/build-archive');
      if (response.ok) {
        console.log('Script success');
      }
    } catch (error) {
      console.log(error);
    }
  };

  //функция download
  const handleDownload = () => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'http://localhost:8000/api/download';
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'url';
    input.value = window.location.href;
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  };

  return (
    <>
      <DefaultButton onClick={fetchHello}>
        <PrecisionManufacturing /> TEST SERVER API!
      </DefaultButton>
      <DefaultButton onClick={handleDownload}>
        <PrecisionManufacturing /> TEST download current url
      </DefaultButton>
      <PreviewSpace />
      <DefaultButton float onClick={executeScriptBuild}>
        <PrecisionManufacturing /> Build!
      </DefaultButton>
    </>
  );
};

export default LandingPreview;

//возможно понадобится:

//1. вариант через встроенный в ноду child_process
// const buildLanding = () => {
//   exec('yarn preview', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Script execution error: ${error}`)
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
//   })
// }
//
//2. вариант через библиотеку execa
// const buildLanding = async () => {
//   await $`yarn preview`;
// }

// const [word, setWord] = useState('')
//запрос на выполнение скрипта
// const executeScriptBuild = () => {
//   console.log('Execution begins...')
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://localhost:8000/api/build-archive", true);
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       console.log('Script success');
//     } else {
//       console.log('Script failed');
//     }
//   }
//   xhr.send();
// }
