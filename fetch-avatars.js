const https = require('https');
const fs = require('fs');
const path = require('path');

async function getImageUrl(pageUrl) {
  return new Promise((resolve, reject) => {
    https.get(pageUrl, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // match <meta property="og:image" content="..."> or similar
        const match = data.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i) ||
                      data.match(/<a\s+href=["']([^"']+)["'][^>]*>Download/i) ||
                      data.match(/src=["'](https:\/\/avatarfiles.alphacoders.com[^"']+)["']/i);
        if (match && match[1]) {
          resolve(match[1]);
        } else {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

async function run() {
  const madaraPage = 'https://avatars.alphacoders.com/avatars/view/375461';
  const ayanokojiPage = 'https://avatars.alphacoders.com/avatars/view/296142';

  console.log('Fetching Madara url...');
  let mUrl = await getImageUrl(madaraPage);
  if (!mUrl) mUrl = 'https://avatarfiles.alphacoders.com/375/375461.png';
  console.log('Madara image url:', mUrl);
  await download(mUrl, path.join(__dirname, 'public/images/team/anuj-avatar.jpg'));
  console.log('Saved Madara to anuj-avatar.jpg');

  console.log('Fetching Ayanokoji url...');
  let aUrl = await getImageUrl(ayanokojiPage);
  if (!aUrl) aUrl = 'https://avatarfiles.alphacoders.com/296/296142.png';
  console.log('Ayanokoji image url:', aUrl);
  await download(aUrl, path.join(__dirname, 'public/images/team/aarav-avatar.jpg'));
  console.log('Saved Ayanokoji to aarav-avatar.jpg');
}

run();
