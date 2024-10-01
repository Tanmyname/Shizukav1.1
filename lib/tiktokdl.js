const { Downloader } = require("@tobyg74/tiktok-api-dl");

function DownloadTiktok(url) {
  return new Promise((resolve, reject) => {
    Downloader(url, { version: "v2" })
      .then((result) => {
        const hasil = {
          status: "success",
          result: result.result
        };

        console.log(hasil);
        resolve(hasil);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = { DownloadTiktok };