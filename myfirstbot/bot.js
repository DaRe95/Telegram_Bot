const {Telegraf} = require('telegraf');
const {message} = require('telegraf/filters');
const dotenv = require('dotenv');
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const helpMessage = `
Was soll ich für dich tun Senpai? ^_^
/joke - Ich erzähle dir einen Witz
/benis - Benis
/maurice - King Julien möchte mit euch sprechen
/reiner - Neues von der Schanze
/lukas - Get help from the astral plane
/machmichnach - Schreib was und ich schreibe dir zurück (Ganz kreativ, ich weiß)
`;

bot.start((ctx) => {
    logger(ctx);
    ctx.reply('Danke, dass du mich gestartet hast ' + ctx.from.first_name + '-Senpai!');
    ctx.reply(helpMessage);
})

bot.help((ctx) => {
    logger(ctx);
    ctx.reply('S-Senpai, hast du dich verlaufen o.O?');
    ctx.reply(helpMessage);
})

/*bot.settings((ctx) => {
    ctx.reply('W-What are you trying to do? X3')
});*/

bot.hears('Fabi', (ctx) => {
    loggerAutoResponder(ctx);
    ctx.reply('Es heißt Gabi!');
})

bot.hears('Fabian', (ctx) => {
    loggerAutoResponder(ctx);
    ctx.reply('Es heißt Gabian!');
})

bot.mention('ShinyMemlek', (ctx) =>{
    logger(ctx);
    ctx.reply('Meinst du nicht eher @BigButtMcGee?');
})

bot.command('joke', (ctx) => {
    logger(ctx);
    ctx.reply('Why do some many programmers wear glasses? Because they can\'t see sharp.');
})

bot.command('benis', (ctx) => {
    logger(ctx);
    ctx.reply('Benis :DDDDD')
})

bot.command('maurice', (ctx) => {
    logger(ctx);
    ctx.reply('Maurice! I can\'t.. I can\'t move it move it any more');
})

bot.command('reiner', (ctx) => {
    logger(ctx);
    ctx.reply('Ferdamten Arschlöchaaa');
})

bot.command('lukas', (ctx) => {
    ctx.reply('The installation wizard arrives to help you.')
})

bot.command('machmichnach', (ctx) => {
    logger(ctx);
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    
    let message = "";

    if(inputArray.length == 1){
        message = "Wie soll ich dich nachmachen, wenn du zu behindert bist um überhaupt was zu schreiben?"
    }

    else{
        inputArray.shift();
        message = inputArray.join(" ");
    }

    ctx.reply(message);
})

bot.command('quit', async (ctx) =>{
    await ctx.telegram.leaveChat(ctx.message.chat.id);

    await ctx.leaveChat();
})

function logger(ctx) {
    console.log((ctx.from.username) + " used a bot command");
}

function loggerAutoResponder(ctx) {
    console.log((ctx.from.username) + " got an auto response")
}

/*bot.on(message('text'), async (ctx) => {
    // Explicit usage
    await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);
  
    // Using context shortcut
    await ctx.reply(`Hello ${ctx.state.role}`);
  });*/

bot.launch();