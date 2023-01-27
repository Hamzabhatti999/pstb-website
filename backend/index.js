const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const nodeMailer = require('nodemailer')
const { google } = require('googleapis')
const { GoogleAuth } = require('google-auth-library')
const path = require('path')
const logo = path.join(__dirname, './img/logo.png')
const mongoose = require('mongoose')
const User = require('./models/userModel')
const userRoute = require('./routes/userRoute');
const app = express();
const port = 3100;
const SHEET_ID = process.env.GOOGLE_SHEET_ID;

app.use(express.json());

// This API allows us to run client on any URL
app.use(cors({
  origin: "*",
  optionsSuccessStatus: 200,
})
);


app.use('/routes',userRoute)
const uri = process.env.MONGO_DB_URL
mongoose.set('strictQuery', false);
// try {
//   mongoose.connect(uri,{
//     useNewUrlParser: true,
//   })
//   .then(()=>{
//     console.log("Mongo DB connection Successfull")
//   })
//   .catch(err =>{
//     console.log(" DB Connection Failed :",err)
//   })
// }
// catch (error) {
//   console.log("Error :", error)
// }

let rand = Math.ceil((Math.random() * 100) + 100);

// This Function get the current timestamp an convert it into Standard Time
// const getTime = (timestamp) => {
//   timestamp = Date.now()
//   let date = new Date(timestamp)
//   return date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();
// }
//Api to submit Registeration Form Data

// app.post("/form", async (req, res) => {
//   const user = req.body;
//   let sheetId = '1HhT3RizZgebs590h0Y8-MnzKSrqbC-fupEodSIOKtfQ'
//   const auth = new GoogleAuth({
//     keyFile: "./pstb-375209-3e68bf272067.json",
//     scopes: 'https://www.googleapis.com/auth/spreadsheets'
//   });
//   const service = google.sheets({ version: 'v4', auth });
//   const result = await service.spreadsheets.values.get({
//     spreadsheetId: sheetId,
//     range: 'A1'
//   });
//   // User = req.body
//   // console.log("uuu____:",User)
//   let data = Object.values(user);
//   data.splice(0, 0, getTime())

//   try {
//     const result1 = await service.spreadsheets.values.append(
//       {
//         spreadsheetId: sheetId,
//         range: 'test!A1:L1',
//         valueInputOption: "RAW",
//         resource: {
//           "majorDimension": "ROWS",
//           "values": [data]
//         }
//       });
//     let transporter = nodeMailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'hamza.tufail@questlab.pk',
//         pass: 'd237a97f'
//       }
//     })
//     let mailOptions = {
//       from: 'hamza.tufail@questlab.pk',
//       to: data[3],
//       subject: 'QUEST LAB ISLAMABAD',
//       html: `<img src="cid:logo"/>
//           <h1>Thanks for mailing us</h1>`,
//       attachments: [{
//         filename: 'logo.png',
//         path: './img/logo.png',
//         cid: 'cid:logo'
//       }]
//     }
//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         console.log("email Error--", err)
//       }
//       else {
//         console.log("Email Sent to", data[3])
//       }
//     })
//     console.log("Data Written successfully")
//   } catch (error) {
//     console.log("errr =", error)
//   }
//   res.json({
//     "Message": "Success"
//   })
// });

// app.get("/worksheet", async (req, res) => {
//   const auth = new GoogleAuth({
//     keyFile: "./pstb-375209-3e68bf272067.json",
//     scopes: 'https://www.googleapis.com/auth/spreadsheets'
//   });
//   const service = google.sheets({ version: 'v4', auth });

//   let sheetId = '1HhT3RizZgebs590h0Y8-MnzKSrqbC-fupEodSIOKtfQ';
//   const result = await service.spreadsheets.values.get({
//     spreadsheetId: sheetId,
//     range: 'A1'
//   });
//   let data = ['zeeshan', 'test@gmail.com']
//   try {
//     const result1 = service.spreadsheets.values.update(
//       {
//         spreadsheetId: sheetId,
//         range: "A1",
//         valueInputOption: "USER_ENTERED",
//         resource: {
//           "majorDimension": "ROWS",
//           "values": [data]
//         }
//       });
//     console.log("Data Written successfully")
//   } catch (error) {
//     console.log("errr =", error)
//   }

//   const rows = result.data.values;

//   // const doc = new GoogleSpreadsheet("1HhT3RizZgebs590h0Y8-MnzKSrqbC-fupEodSIOKtfQ");
//   // await doc.useServiceAccountAuth({
//   //   client_email: credens.client_email,
//   //   private_key: credens.private_key,
//   // });

//   // console.log("--------auth---------");

//   // await doc.loadInfo();

//   // console.log("--id--", doc.spreadsheetId)
//   // const sheet = doc.sheetsByIndex[0];
//   // console.log(sheet.title)
//   // await sheet.updateProperties({ title: "test" });
//   // // const newRow = await sheet.addRow(user); 
//   // const rows = await sheet.getRows()

//   //   await doc.updateProperties({ title: "renamed doc" });
//   res.sendStatus(200);
// });

app.listen(port, (err) => {
  if (err) {
    console.log("Port Error :", err);
  } else {
    console.log(`App is running on ${port}`);
  }
});

//
