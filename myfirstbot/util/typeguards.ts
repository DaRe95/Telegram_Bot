import { Message } from 'telegraf/typings/core/types/typegram';

export const isTextMessage = (
    message?: unknown
): message is Message.TextMessage => {
    return (
        !!message &&
        typeof message === 'object' &&
        Object.keys(message).includes('message')
    );
};