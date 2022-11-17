const DB = require('../lib/scraper')
const { execSync } = require('child_process')
const { tlang, Config, prefix,cmd } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "update",
            desc: "Shows repo\'s refreshed commits.",
            category: "heroku",
        },
        async(Void, citel, text,{ isCreator }) => {
            console.log(isCreator)
            if (!isCreator) return citel.reply('*This command is only for owner*')
            let commits = await DB.syncgit()
            if (commits.total === 0) {
                citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)
            } else {
                let update = await DB.sync()
                 return citel.reply(update)

            }

        }
    )
  
