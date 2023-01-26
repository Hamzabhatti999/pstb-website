const express = require('express');
const router = express.Router()

router.use(
    cors({
      origin: "*",
      optionsSuccessStatus: 200,
    })
  );
  console.log("user=", User)
  
  let rand = Math.ceil((Math.random() *100)+100);
  console.log("_____________",rand )
  
  // This Function get the current timestamp an convert it into Standard Time
  
  const getTime = (timestamp) => {
    timestamp = Date.now()
    let date = new Date(timestamp)
    return date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();
  }
  //Api to submit Registeration Form Data
  router.post("/form", async (req, res) => {
    const user = req.body;
   let sheetId = '1HhT3RizZgebs590h0Y8-MnzKSrqbC-fupEodSIOKtfQ'
    const auth = new GoogleAuth({
      keyFile: "./pstb-375209-3e68bf272067.json",
      scopes: 'https://www.googleapis.com/auth/spreadsheets'
    });
    const service = google.sheets({ version: 'v4', auth });
    const result = await service.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'A1'
    });
    let data = Object.values(user);
    data.splice(0, 0, getTime())
    console.log("datee-- :", data[3])
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
            console.log("Email Sent", info.response)
          }
        })
      console.log("Data Written successfully")
    } catch (error) {
      console.log("errr =", error)
    }
    res.json({
      "Message": "Sucess"
    })
  });
  
  // router.get("/worksheet", async (req, res) => {
  
  
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
  
  module.exports = router