function menu(){
  let ownernya = ownernomer + '@s.whatsapp.net'

	       replyTan('Loading..')

            let me = m.sender
            let timestampe = speed()
            let latensie = speed() - timestampe
            raffx1 = `👋 *Hai ${Tanwaktu} ${pushname}!* My name ${global.botname} You can use several features provided via the buttons below. ©Tan `
            let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: raffx1
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./data/image/thumb.jpg')}, { upload: Tan.waUploadToServer})), 
                  title: `${xdate} | ${time2}`,
                  gifPlayback: false,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
             {                
  "name": "single_select",
"buttonParamsJson": 
`{
  "title": "List MENU",
  "sections": [
    {
      "title": "${botname}",
      "rows": [
        
        {
          "header": "GAME MENU",
          "title": "click to display",
          "description": "Displays The List Of Game Features",
          "id": ".gamemenu"
        },
        {
          "header": "ISLAM MENU",
          "title": "click to display",
          "description": "Displays The List Of Islamic Features",
          "id": ".islamimenu"
        },
        
        {
          "header": "PUSH MENU",
          "title": "click to display",
          "description": "Displays The List Of Push Features",
          "id": ".pushmenu"
        },
        {
          "header": "DOWNLOAD MENU",
          "title": "click to display",
          "description": "Displays The List Of Download Features",
          "id": ".downloadmenu"
        },
        {
          "header": "FUN MENU",
          "title": "click to display",
          "description": "Displays The List Of Fun Features",
          "id": ".funmenu"
        },
        {
          "header": "AI MENU",
          "title": "click to display",
          "description": "Displays The List Of AI Features",
          "id": ".aimenu"
        },
        {
          "header": "GROUP MENU",
          "title": "click to display",
          "description": "Displays The List Of Group Features",
          "id": ".groupmenu"
        },
        {
          "header": "OWNER MENU",
          "title": "click to display",
          "description": "Displays The List Of Owner Features",
          "id": ".ownermenu"
        },
        {
          "header": "PHOTOXY MENU",
          "title": "click to display",
          "description": "Displays The List Of Photooxy Features",
          "id": ".photooxymenu"
        },
        {
          "header": "TEXPRO MENU",
          "title": "click to display",
          "description": "Displays The List Of Textpro Features",
          "id": ".textpromenu"
        },
        {
          "header": "EPHOTO360 MENU",
          "title": "click to display",
          "description": "Displays The List Of Ephoto360 Features",
          "id": ".ephoto360menu"
        },
        {
          "header": "ANIME MENU",
          "title": "click to display",
          "description": "Displays The List Of Anime Features",
          "id": ".animemenu"
        },
        {
          "header": "RANDOM PHOTO MENU",
          "title": "click to display",
          "description": "Displays The List Of Random Photo Features",
          "id": ".randomphotomenu"
        },  
        {
          "header": "OTHER MENU",
          "title": "click to display",
          "description": "Displays The List Of Other Features",
          "id": ".othermenu"
        },
        {
          "header": "RPG MENU",
          "title": "click to display",
          "description": "Displays The List Of RPG Features",
          "id": ".rpgmenu"
        },
        {
          "header": "STORE MENU",
          "title": "click to display",
          "description": "Displays The List Of Store Features",
          "id": ".storemenu"
        },
        {
          "header": "STICKER MENU",
          "title": "click to display",
          "description": "Displays The List Of Sticker Features",
          "id": ".stickermenu"
        },
        {
          "header": "QUOTES MENU",
          "title": "click to display",
          "description": "Displays The List Of Quotes Features",
          "id": ".quotesmenu"
        },
        {
          "header": "PRIMBON MENU",
          "title": "click to display",
          "description": "Displays The List Of Primbon Features",
          "id": ".primbonmenu"
        }
      ]
    }
  ]
}`

              },                         
              {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"SCRIPT","url":"https://youtube.com/@grzyzegt1429?si=7pHSyAYpnGaKoUWT","merchant_url":"https://youtube.com/@grzyzegt1429?si=7pHSyAYpnGaKoUWT"}`
              },
              {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"OWNER","url":"https://wa.me/6282339835060","merchant_url":"https://wa.me/6282339835060"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 100,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '1@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: fcall })

await Tan.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
           }
           break

}