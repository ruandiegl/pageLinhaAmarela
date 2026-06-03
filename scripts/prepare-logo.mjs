import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const input = fileURLToPath(new URL('../src/assets/vulcano-logo.jpeg', import.meta.url));
const output = fileURLToPath(new URL('../src/assets/vulcano-logo-transparent.png', import.meta.url));

const trimmedBuffer = await sharp(input)
  .trim({ background: '#ffffff', threshold: 18 })
  .png()
  .toBuffer();

const image = sharp(trimmedBuffer).ensureAlpha();
const metadata = await image.metadata();
const raw = await image.raw().toBuffer();

for (let i = 0; i < raw.length; i += 4) {
  const r = raw[i];
  const g = raw[i + 1];
  const b = raw[i + 2];
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (min > 246 && max - min < 8) {
    raw[i + 3] = 0;
  } else if (min > 230 && max - min < 14) {
    raw[i + 3] = Math.round(((246 - min) / 16) * 255);
  }
}

await sharp(raw, {
  raw: {
    width: metadata.width,
    height: metadata.height,
    channels: 4,
  },
})
  .png()
  .toFile(output);

const result = await sharp(output).metadata();

console.log(`Prepared transparent logo: ${result.width}x${result.height}`);
