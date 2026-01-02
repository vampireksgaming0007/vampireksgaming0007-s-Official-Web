const express = require('express');
const multer = require('multer');
const axios = require('axios');


const app = express();
const upload = multer({ dest: 'uploads/' });


app.post('/submit', upload.single('pdf'), async (req, res) => {
await axios.post(process.env.WEBHOOK_URL, {
content: `New Agreement Submitted by ${req.body.realname}`
});
res.sendStatus(200);
});


app.listen(3000);