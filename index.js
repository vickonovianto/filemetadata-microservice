const express = require('express')
const cors = require('cors')
const multer  = require('multer') // package to handle file upload
const upload = multer({ dest: './public/data/uploads/' })
require('dotenv').config()

const app = express()

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

// api to handle file upload
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => { // upfile is field name in the form in index.html
  const filename = req.file.originalname
  const filetype = req.file.mimetype
  const filesize = req.file.size
  res.json({ name: filename, type: filetype, size: filesize })
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
