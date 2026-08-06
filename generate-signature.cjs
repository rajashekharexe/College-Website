const opentype = require('opentype.js');
const fs = require('fs');
const pathModule = require('path');

const fontPath = pathModule.join(__dirname, 'public', 'LastoriaBoldRegular.otf');

try {
  const buffer = fs.readFileSync('./src/assets/LastoriaBoldRegular.otf');
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
  const font = opentype.parse(arrayBuffer);
  
  const text = 'Rajashekhar';
  const fontSize = 180;
  const baseline = 150;
  let x = 0;
  const paths = [];

  for (const char of text) {
    const glyph = font.charToGlyph(char);
    const path = glyph.getPath(x, baseline, fontSize);
    paths.push(path.toPathData(2));

    const advanceWidth = glyph.advanceWidth || font.unitsPerEm;
    x += advanceWidth * (fontSize / font.unitsPerEm);
  }

  const outputPath = pathModule.join(__dirname, 'paths.json');
  fs.writeFileSync(outputPath, JSON.stringify({ paths, width: x }, null, 2));
  console.log('Successfully generated paths.json with', paths.length, 'paths');
  console.log('Total width:', x);
} catch (e) {
  console.error(e);
}
