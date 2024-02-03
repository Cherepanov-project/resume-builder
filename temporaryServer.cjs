// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const express = require('express');
const cors = require('cors');
const expApp = express();
const { exec } = require('child_process');

//middleware, чтобы в локальном режиме обойти политику CORS
expApp.use(cors());
expApp.use(express.json());

//
expApp.get('/api/test', (req, res) => {
    const data = {message: 'Привет от сервера Express!'};
    res.json(data)
});

expApp.get('/api/build-archive', (req, res) => {
        exec("yarn buildarchive", (error, stdout) => {
            if (error) {
                console.error(`Ошибка выполнения скрипта: ${error}`);
                res.status(500).send("Ошибка выполнения скрипта");
            } else {
                console.log(`Скрипт выполнен успешно: ${stdout}`);
                res.status(200).send("Скрипт выполнен успешно");
            }
        })
    }
)

expApp.post('/api/download', (req, res) => {
    const myUrl = req.body.url;
    // Здесь вы можете сохранить содержимое страницы в файлы HTML, CSS и JS.
    // Это будет зависеть от того, как вы хотите сохранять страницу.
    res.json(myUrl)
});

expApp.listen(8000, () => {
    console.log('Сервер запущен на порту 8000');
})