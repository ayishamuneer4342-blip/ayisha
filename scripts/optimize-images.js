import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, '../src/assets');

const optimizeImage = async (filename, width, format = 'webp') => {
    const inputPath = path.join(assetsDir, filename);
    const parse = path.parse(filename);
    const outputPath = path.join(assetsDir, `${parse.name}.${format}`);

    if (!fs.existsSync(inputPath)) {
        console.warn(`File not found: ${filename}`);
        return;
    }

    try {
        await sharp(inputPath)
            .resize({ width: width, withoutEnlargement: true })
            .toFormat(format, { quality: 80 })
            .toFile(outputPath);
        console.log(`Optimized: ${filename} -> ${parse.name}.${format}`);
    } catch (err) {
        console.error(`Error processing ${filename}:`, err);
    }
};

// List of images to optimize based on Lighthouse report
const images = [
    // Portfolio (Displayed ~417x417, Source ~1024x822) -> Resize to 600w (safe margin)
    { name: 'portfolio_jewelry_mockup.png', width: 600 },
    { name: 'portfolio_corporate_mockup.png', width: 600 },
    { name: 'portfolio_synopslabs_real.png', width: 600 },
    { name: 'portfolio_bwmc_real.png', width: 600 },
    { name: 'portfolio_rizq_real.png', width: 600 },
    { name: 'portfolio_payyoli_real.png', width: 600 },
    { name: 'portfolio_lampsplus_real.png', width: 600 },
    { name: 'portfolio_jaypeedent_real.png', width: 600 },
    { name: 'portfolio_dental_mockup.png', width: 600 },
    { name: 'portfolio_food_mockup.png', width: 600 },

    // Chatbot Avatar (Displayed ~100x100, Source ~900x900) -> Resize to 200w
    { name: 'ayisha-wave.png', width: 200 },

    // Logos (Various sizes, mostly displayed small) -> Resize to 300w max
    { name: 'logo-hubspot.png', width: 300 },
    { name: 'logo-meta.png', width: 300 },
    { name: 'logo-semrush.png', width: 300 },
    { name: 'logo-google-garage.png', width: 300 },
    { name: 'logo-google-analytics.png', width: 300 },
    { name: 'logo-google-ads.png', width: 300 },
    { name: 'logo-client1.png', width: 300 },
    { name: 'logo-client2.png', width: 300 },
    { name: 'logo-client3.png', width: 300 },
    { name: 'logo-bridgewater.png', width: 300 },
    { name: 'logo-neonights.png', width: 300 },
    { name: 'muhmed-afsal.png', width: 300 }, // Testimonial
    { name: 'nihal-roshan.png', width: 300 }, // Testimonial
    { name: 'abdul-muneer.png', width: 300 }, // Testimonial

    { name: 'logo.png', width: 200 }, // Main logo
    // Hero Image (Displayed full width but often cropped, Source ~1000px?)
    // Converting pic1.jpg to webp for better compression, maybe same width
    { name: 'pic1.jpg', width: 800 }
];

const run = async () => {
    for (const img of images) {
        await optimizeImage(img.name, img.width);
    }
};

run();
