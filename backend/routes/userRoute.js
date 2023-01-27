const express = require('express');
const nodeMailer = require('nodemailer')
const { google } = require('googleapis')
const { GoogleAuth } = require('google-auth-library')
const cors = require("cors");
const router = express.Router();
router.use(express.json());

  // console.log("ROUTES------ROUTER")
  // let rand = Math.ceil((Math.random() *100)+100);
  // console.log("_____________",rand )
  
  // This Function get the current timestamp an convert it into Standard Time
  
  
  router.get('/get',(req,res)=>{
 
    console.log("ROUUUUUUU")
    res.send("Get ROUTES Successfully")
  })

//function to get standard time
  const getTime = (timestamp) => {
    timestamp = Date.now()
    let date = new Date(timestamp)
    return date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();
  }
  //POST Api to submit Registeration Form Data
console.log("POST API")
 router.post("/form", async (req, res) => {
  console.log("inside POST API")
  const user = req.body;
  let sheetId = '1HhT3RizZgebs590h0Y8-MnzKSrqbC-fupEodSIOKtfQ'
  const auth = new GoogleAuth({
    keyFile: "./pstb-375209-3e68bf272067.json",
    scopes: 'https://www.googleapis.com/auth/spreadsheets'
  });
  const service = google.sheets({ version: 'v4', auth });
  console.log("uuu____----:",user)
  // const result = await service.spreadsheets.values.get({
  //   spreadsheetId: sheetId,
  //   range: 'A1'
  // });

  let data = Object.values(user);
  data.splice(0, 0, getTime())

  try {
    const result1 = await service.spreadsheets.values.append(
      {
        spreadsheetId: sheetId,
        range: 'test!A1:L1',
        valueInputOption: "RAW",
        resource: {
          "majorDimension": "ROWS",
          "values": [data]
        }
      });
    let transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'hamza.tufail@questlab.pk',
        pass: 'd237a97f'
      }
    })
    let mailOptions = {
      from: 'hamza.tufail@questlab.pk',
      to: data[3],
      subject: 'QUEST LAB ISLAMABAD',
      html: `<img src="cid:logo"/>
          <h1>Thanks for mailing us</h1>`,
      attachments: [{
        filename: 'logo.png',
        path: './img/logo.png',
        cid: 'cid:logo'
      }]
    }
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("email Error--", err)
      }
      else {
        console.log("Email Sent to", data[3])
      }
    })
    console.log("Data Written successfully")
  } catch (error) {
    console.log("errr =", error)
  }
  res.json({
    "Message": "Success"
  })
});
  
  
  module.exports = router