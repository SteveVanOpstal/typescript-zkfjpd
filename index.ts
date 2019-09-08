// Import stylesheets
import Jimp from 'jimp/es';

Jimp.read('test.png').then((image) => {
  image.resize(1440, Jimp.AUTO)
      .quality(100)
      .getBufferAsync(Jimp.MIME_JPEG)
      .then((d: Buffer) => {
        const img: HTMLImageElement = document.getElementById('not_resized');
        img.src = d;
      });
});

Jimp.read('test.png').then((image) => {
  image.resize(1440, Jimp.AUTO)
      .quality(100)
      .getBufferAsync(Jimp.MIME_JPEG)
      .then((d: Buffer) => {
        const img: HTMLImageElement = document.getElementById('not_resized');
        img.src = d;
      });
});
