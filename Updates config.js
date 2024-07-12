const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254711645930";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_00_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMzLFxuICAgICAgICA2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDksXG4gICAgICAgIDY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NixcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MixcbiAgICAgICAgMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN0pzSnRaeDI3T2ZLNjVJUDR6S0NaVmgyRS9rOXM5K204dnFmR004cUVvOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOThUenhBQWtTQVc0aDF2dzJoX3Bhd1wiLFxuICBcInBob25lSWRcIjogXCI0MGY0ZjNmZi0zOTcyLTRhYjktYmRkNS1jOGUxNzliNjkwYzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDI0MixcbiAgICAgIDM0LFxuICAgICAgOTYsXG4gICAgICAyMTAsXG4gICAgICA3MyxcbiAgICAgIDE5OCxcbiAgICAgIDQ2LFxuICAgICAgMixcbiAgICAgIDE1MCxcbiAgICAgIDM4LFxuICAgICAgODIsXG4gICAgICAxOTAsXG4gICAgICAxNjEsXG4gICAgICAyMTUsXG4gICAgICAxNzksXG4gICAgICAyMjEsXG4gICAgICAxNjYsXG4gICAgICAyNTIsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAxNTEsXG4gICAgICAyNDAsXG4gICAgICAyMzEsXG4gICAgICAyMSxcbiAgICAgIDE3LFxuICAgICAgNDgsXG4gICAgICAyNDIsXG4gICAgICAxMyxcbiAgICAgIDQzLFxuICAgICAgODAsXG4gICAgICA1NixcbiAgICAgIDE4NyxcbiAgICAgIDcxLFxuICAgICAgNzgsXG4gICAgICA1NyxcbiAgICAgIDE5NyxcbiAgICAgIDI1LFxuICAgICAgNTgsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVk1YUE5RTTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxMTY0NTkzMDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Rs/CdkprwnZKK8J2Sj/CdkoguLi5cIixcbiAgICBcImxpZFwiOiBcIjM4NjI5MzM4NTY2ODQ1OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm5WaVhFUTA1Ykd0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUbEdXMFIrSXBiLzFjdTJLN1ZveXgyUFBHaEpzbTJPN3M2VW91b0dyckY0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInUvOWIrTUlIc2tPVHdjRlBqZ0p2NEw3enFwV0kza0ZaRm9zQTJ0KzN4TUR4VExhQ3FPK2UyYmJLczQxbmNVdmhRWTVzN1VlTEk2UXp6TUpPQjhUZUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpIbEdyS2htdm5Xc0J0Q1ROYlBycW5UVlN3aFV3U2EyUThNV2dlYUZiWThBQjlZN1R6VGVza0kxdC83Z2Z3bHkzSkJDT0pEeTlxVzBnK29VMENCTkFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxMTY0NTkzMDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgxNDQyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp1elwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnV6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTWVJdksxdEpEcGZManlaNnVKeTNOZ2UzRFBwOVJOWnVYUEYwcnhqRUtGTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzcxMzY1MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
