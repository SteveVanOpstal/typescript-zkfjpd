// Import stylesheets
import Jimp from 'jimp/es';

Jimp.read('test.png').then((image) => {
  image.resize(size, Jimp.AUTO)
      .quality(100)
      .getBufferAsync(Jimp.MIME_JPEG)
      .then((d: Buffer) => covers.push({size: size, data: d}));
});

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<img src=""/>`;
