const fs = require('fs');
const https = require('https');
const path = require('path');

fs.mkdirSync('public/reviews', { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  try {
    await download('https://i.imgur.com/kdWn6OD.png', 'public/reviews/rev1.png');
    await download('https://i.imgur.com/qw2CoCY.png', 'public/reviews/rev3.png');
    
    let content = fs.readFileSync('src/components/TrustAndReviews.tsx', 'utf8');
    content = content.replace('"https://i.imgur.com/kdWn6OD.png"', '"/reviews/rev1.png"');
    content = content.replace('"https://i.imgur.com/qw2CoCY.png"', '"/reviews/rev3.png"');
    fs.writeFileSync('src/components/TrustAndReviews.tsx', content, 'utf8');
    console.log('Downloaded and replaced.');
  } catch (e) {
    console.error(e);
  }
}
run();
