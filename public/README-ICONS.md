# Icons for Baby Tracker PWA

For your Baby Tracker Progressive Web App to work properly, you need to create the following icons and splash screens. Place these in the `/public/icons/` directory:

## Standard PWA Icons
- `icon-192x192.png` (192×192px)
- `icon-512x512.png` (512×512px)
- `icon-192x192-maskable.png` (192×192px with safe area inside 60% of the center)
- `icon-512x512-maskable.png` (512×512px with safe area inside 60% of the center)

## iOS Icons
- `apple-icon-180.png` (180×180px)

## iOS Splash Screens
- `apple-splash-2048-2732.jpg` (iPad Pro 12.9")
- `apple-splash-1668-2388.jpg` (iPad Pro 11")
- `apple-splash-1536-2048.jpg` (iPad Air/Mini)
- `apple-splash-1125-2436.jpg` (iPhone X/XS/11 Pro)
- `apple-splash-1242-2688.jpg` (iPhone XS Max/11 Pro Max)
- `apple-splash-828-1792.jpg` (iPhone XR/11)
- `apple-splash-1242-2208.jpg` (iPhone 8 Plus)
- `apple-splash-750-1334.jpg` (iPhone 8/SE2)
- `apple-splash-640-1136.jpg` (iPhone SE)

## Icon Generation Tools

You can use tools like:
1. PWA Asset Generator: https://github.com/onderceylan/pwa-asset-generator
2. App Icon Maker: https://appiconmaker.co/
3. PWA Builder: https://www.pwabuilder.com/

## Using PWA Asset Generator (Recommended)

If you have Node.js installed, you can generate all required assets using PWA Asset Generator:

```bash
# Install the tool
npm install -g pwa-asset-generator

# Generate icons and splash screens from your logo
pwa-asset-generator your-logo.png ./icons -i ./index.html -m ./manifest.json
``` 