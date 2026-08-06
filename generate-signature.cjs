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
    const pathData = path.toPathData(2);
    
    // Calculate bounding box for the path
    const commands = path.commands;
    let minX = Infinity;
    let maxX = -Infinity;
    
    for (const cmd of commands) {
      if (cmd.x !== undefined) {
        if (cmd.x < minX) minX = cmd.x;
        if (cmd.x > maxX) maxX = cmd.x;
      }
      if (cmd.x1 !== undefined) {
        if (cmd.x1 < minX) minX = cmd.x1;
        if (cmd.x1 > maxX) maxX = cmd.x1;
      }
      if (cmd.x2 !== undefined) {
        if (cmd.x2 < minX) minX = cmd.x2;
        if (cmd.x2 > maxX) maxX = cmd.x2;
      }
    }
    
    // Handle space characters or empty paths
    if (minX === Infinity) {
        minX = x;
        maxX = x;
    }

    paths.push({
        d: pathData,
        minX: minX - 10, // Add padding
        maxX: maxX + 10,
        width: maxX - minX + 20
    });

    const advanceWidth = glyph.advanceWidth || font.unitsPerEm;
    x += advanceWidth * (fontSize / font.unitsPerEm);
  }

  const output = {
    paths,
    totalWidth: x
  };

  fs.writeFileSync('paths.json', JSON.stringify(output, null, 2));
  console.log('Successfully generated paths.json with', paths.length, 'paths');
  console.log('Total width:', x);
} catch (e) {
  console.error(e);
}
