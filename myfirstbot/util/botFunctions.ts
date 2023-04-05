import fs from 'fs';
import { Context, NarrowedContext } from 'telegraf';
import { InputFile } from 'telegraf/typings/core/types/typegram';
import { Update } from 'typegram';
import { helpMessage } from './constants';
import { zitate } from './drachneZitate';
import { isTextMessage } from './typeguards';

export const logger = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    console.log(ctx.from?.username + ' used a bot command');
};

export const loggerAutoResponder = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    console.log(ctx.from?.username + ' got an auto response');
};

export const onStart = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    logger(ctx);
    ctx.reply(
        'Danke, dass du mich gestartet hast ' + ctx.from?.first_name ??
            'Fgt' + '-Senpai!'
    );
    ctx.reply(helpMessage);
};

export const onHelp = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    logger(ctx);
    ctx.reply('S-Senpai, hast du dich verlaufen o.O?');
    ctx.reply(helpMessage);
};

export const onHearFabi = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    loggerAutoResponder(ctx);
    ctx.reply('Es heißt Gabi!');
};

export const onHearFabian = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    loggerAutoResponder(ctx);
    ctx.reply('Es heißt Gabian!');
};

export const onSeeCringe = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    logger(ctx);
    ctx.reply('Meinst du nicht eher @BigButtMcGee?');
};

export const onTellJoke = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    logger(ctx);
    ctx.reply(
        "Why do some many programmers wear glasses? Because they can't see sharp."
    );
};

export const onAss = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    const image = fs.readFileSync('public/assets/ass.webp');
    const file: InputFile = { source: image, filename: 'ass' };
    ctx.sendPhoto(file);
};

export const onBenisHehehe = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    logger(ctx);
    const image = fs.readFileSync('public/assets/spurdo.png');
    const file: InputFile = { source: image, filename: 'benis' };
    ctx.sendPhoto(file);
    ctx.reply('Benis :DDDDD');
};

export const onMaurice = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    logger(ctx);
    ctx.reply("Maurice! I can't.. I can't move it move it any more");
};

export const onMett = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    logger(ctx);
    const rng = Math.random() * zitate.length;
    ctx.reply(zitate[Math.floor(rng % zitate.length)]);
};

export const onLukas = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    ctx.reply('The installation wizard arrives to help you.');
};

export const onRepeatUserInput = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    const { message } = ctx;
    logger(ctx);

    if (!isTextMessage(message)) {
        return ctx.reply(
            'Schreib nen anständigen Text den man nachtippen kann.'
        );
    }

    let responseText = '';

    if (message.text.length == 1) {
        responseText =
            'Wie soll ich dich nachmachen, wenn du zu behindert bist um überhaupt was zu schreiben?';
    } else {
        responseText = message.text;
    }

    ctx.reply(message);
};

export const onQuit = async <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    if (ctx.message?.chat.id) {
        await ctx.telegram.leaveChat(ctx.message?.chat.id);
    } else {
        ctx.reply('Ich komm hier irgendwie nicht raus, kick mich.');
    }

    await ctx.leaveChat();
};

export const onIncel = <C extends Context, U extends Update>(
    ctx: NarrowedContext<C, U>
) => {
    ctx.reply('https://incels.wiki/w/Special:Random');
};