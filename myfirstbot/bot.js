import { Telegraf } from 'telegraf';
import {
    onStart,
    onHelp,
    onJoke,
    onBenis,
    onMaurice,
    onReiner,
    onLukas,
    onMachMichNach,
} from './util/botFunctions'

const dotenv = require('dotenv');
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(onStart);

bot.help(onHelp);
  
bot.hears('Fabi', onHearFabi);
  
bot.hears('Fabian', onHearFabian);
  
bot.mention('ShinyMemlek', onSeeCringe);
  
bot.command('ass', onAss);
  
bot.command('joke', onTellJoke);
  
bot.command('benis', onBenisHehehe);
  
bot.command('maurice', onMaurice);
  
bot.command('incel', onIncel);
  
bot.command('reiner', onMett);
  
bot.command('lukas', onLukas);
  
bot.command('machmichnach', onRepeatUserInput);
  
bot.command('quit', onQuit);

bot.launch();