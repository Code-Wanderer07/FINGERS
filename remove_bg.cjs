const { Jimp } = require('jimp');

async function removeBg(file) {
  try {
    const image = await Jimp.read(file);
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If pixel is dark (r, g, b all less than 80), make it transparent
      if (red < 80 && green < 80 && blue < 80) {
        this.bitmap.data[idx + 3] = 0; // alpha
      }
    });
    await image.write(file);
    console.log(`Background removed for ${file}`);
  } catch (e) {
    console.error(e);
  }
}

removeBg('public/3.png');
removeBg('public/4.png');
