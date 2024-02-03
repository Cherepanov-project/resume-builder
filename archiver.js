import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

//Delete previous folder
// fs.rm('user-archive', err => {
//   if(err) throw err;
//   console.log('Previous archive folder deleted!')
// })

//create folder
fs.mkdir('user-archive', (err) => {
  if (err) throw err;
  console.log('Folder created!');
});

// Define the source and output directories
const sourceDir = path.join('./user-build/');
const outputDir = path.join('./user-archive/');
const zipFileName = 'landing-page.zip';

// Create a write stream to the zip file
const output = fs.createWriteStream(path.join(outputDir, zipFileName));
const archive = archiver('zip', { zlib: { level: 9 } });

// Pipe the archive data to the file
archive.pipe(output);

// Append all files from the source directory to the archive
archive.directory(sourceDir, false);

// Finalize the archive and close the write stream
archive.finalize();

output.on('close', () => {
  //В коллбэке сносим папку с файлами для архивирования (УТОЧНИТЬ!)
  console.log(`Successfully created ${zipFileName}`);
  fs.rm('user-build', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Temporary folder deleted!');
  });
});
