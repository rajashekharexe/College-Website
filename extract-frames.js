import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the path to the statically downloaded ffmpeg binary
ffmpeg.setFfmpegPath(ffmpegStatic);

const inputVideo = process.argv[2];

if (!inputVideo) {
  console.error("\n❌ ERROR: Please provide the path to your video file.");
  console.error("Usage: node extract-frames.js \"C:\\path\\to\\your\\video.mp4\"\n");
  process.exit(1);
}

const absoluteInput = path.resolve(inputVideo);
if (!fs.existsSync(absoluteInput)) {
  console.error(`\n❌ ERROR: The file "${absoluteInput}" does not exist.\n`);
  process.exit(1);
}

const outputDir = path.join(__dirname, 'src', 'assets', 'frames');

// Create the frames directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
} else {
  // Clean up old frames if the directory already exists
  console.log("Cleaning up old frames...");
  const oldFiles = fs.readdirSync(outputDir);
  for (const file of oldFiles) {
    if (file.endsWith('.jpg')) {
      fs.unlinkSync(path.join(outputDir, file));
    }
  }
}

console.log(`\n🎥 Extracting frames from: ${absoluteInput}`);
console.log(`📂 Output directory: ${outputDir}`);
console.log("⏳ Please wait, this might take a minute...\n");

ffmpeg(absoluteInput)
  .outputOptions([
    '-vf scale=1280:-1', // Scale width to 1280px (720p HD) to keep file sizes small for the web while maintaining aspect ratio
    '-qscale:v 3'        // High quality JPEG output
  ])
  .output(path.join(outputDir, 'frame_%04d.jpg'))
  .on('end', () => {
    console.log('\n✅ SUCCESS! All frames extracted successfully!');
    console.log(`You can find them in: src/assets/frames/\n`);
  })
  .on('error', (err) => {
    console.error('\n❌ ERROR during extraction:', err.message);
  })
  .run();
