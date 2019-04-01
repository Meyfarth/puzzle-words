const tesseract = require('tesseract.js')

const recognize = async image =>
  new Promise((resolve, reject) => {
    tesseract.recognize(image)
      .then((result) => {
        console.log(result)
        resolve(result)
      })
      .catch((error) => {
        reject(error)
      })
  })


module.exports = {
  recognize,
}
