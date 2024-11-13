/// <reference lib="webworker" />
importScripts('https://js.pusher.com/beams/service-worker.js');
import { get, set } from 'idb-keyval';
import { clientsClaim } from 'workbox-core';
import {
    NewChannelEntryNotificationPayload,
    NotificationEvent,
    ServiceWorkerMessageTypes,
} from '@commonTypes/types';

declare const self: ServiceWorkerGlobalScope;
//This variable is needed https://create-react-app.dev/docs/making-a-progressive-web-app/#customization
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line
const ignored = self.__WB_MANIFEST;

clientsClaim();

const isClientsInBackground = async () => {
    const windowClients = await self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true,
    });

    return windowClients.every(client => client.visibilityState === 'hidden');
};

const handleNotificationClick = async (departmentId: number, channelId: number) => {
    const appUrl = self.registration.scope;
    const clients = await self.clients.matchAll({ type: 'window' });
    const matchingClient = clients.find(client => client.url.includes(appUrl));
    const redirectionUrl = `${appUrl}platform/messages?departmentId=${departmentId}&channelId=${channelId}`;

    if (matchingClient) {
        matchingClient.navigate(redirectionUrl);
        matchingClient.focus();
    } else {
        self.clients.openWindow(redirectionUrl);
    }
};

const handleNotificationEvent = async (payload: NewChannelEntryNotificationPayload) => {
    const isClientInBackground = await isClientsInBackground();
    const currentUserId = await get('currentUserId');

    if (currentUserId !== payload.data.senderId && isClientInBackground) {
        let body = payload.notification.body;

        if (!body && payload.data.hasFiles) {
            body = 'File';
        }
        self.registration.showNotification(payload.notification.title, {
            body: body,
            icon: './logo196.png',
            data: payload.data,
        });
    }
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
PusherPushNotifications.onNotificationReceived = ({ pushEvent, payload }: NotificationEvent) => {
    pushEvent.waitUntil(
        handleNotificationEvent(payload),
    );
};

self.addEventListener('notificationclick', async (event) => {
    const { data } = event.notification;

    event.waitUntil(
        handleNotificationClick(data.departmentId, data.channelId),
    );
});

self.addEventListener('message', async (event) => {
    const { data, type } = event.data;

    if (data && type === ServiceWorkerMessageTypes.changeCurrentUserId) {
        set('currentUserId', data.userId);
    }

    if (data && type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
