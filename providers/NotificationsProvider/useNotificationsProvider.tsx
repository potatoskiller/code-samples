import { useEffect, useState } from 'react';
import { RegistrationState } from '@pusher/push-notifications-web';
import { pusherBeamsClient } from '@api/beamsClient';
import { addToast } from '@providers/ToastProvider/ToastProvider';
import { sendMessageToServiceWorker } from '@utils/serviceWorkerMessages';
import { selectAuthSession } from '@state/auth/selectors';
import { selectMySubscriptionsData } from '@state/mySubscriptions/selectors';
import { setNotificationEnabledStatus } from '@state/persistPreferences/actions';
import { RootState, useAppDispatch, useAppSelector } from '@state/store';
import { ChannelSubscription, LoadingTypes, ServiceWorkerMessageTypes } from '@commonTypes/types';

const useNotificationsProvider = () => {
  const dispatch = useAppDispatch();
  const session = useAppSelector(selectAuthSession);
  const { notificationsEnabled } = useAppSelector((state: RootState) => state.persistPreferences?.data);
  const mySubscriptions = useAppSelector(selectMySubscriptionsData);
  const [notificationClientStatus, setNotificationClientStatus] = useState<RegistrationState>(RegistrationState.PERMISSION_PROMPT_REQUIRED);
  const [notificationEnabledStatusLoading, setNotificationEnabledStatusLoading] = useState(LoadingTypes.idle);
  const isPermissionGrantedWithBeams = notificationClientStatus === RegistrationState.PERMISSION_GRANTED_REGISTERED_WITH_BEAMS;
  const notificationsActivated = notificationsEnabled && isPermissionGrantedWithBeams;

  const updateNotificationsEnabledStatus = async () => {
    try {
      if (!pusherBeamsClient) {
        return console.log('[Beams]: Beams client not started.');
      }

      const notificationsState = await pusherBeamsClient.getRegistrationState();
      setNotificationClientStatus(notificationsState);
    } catch (error) {
      console.log('[Beams]: Failed to retrieve registration status');
    }
  };

  const getSubscriptionsAndConvertToInterests = () => {
    try {
      return mySubscriptions?.map((subscription: ChannelSubscription) => `message-${subscription.channelId}`) || [];
    } catch (error) {
      return [];
    }
  };

  const startBeamsClient = async () => {
    try {
      if (!pusherBeamsClient) {
        return console.log('[Beams]: Beams client not started.');
      }

      setNotificationEnabledStatusLoading(LoadingTypes.pending);
      await pusherBeamsClient.start();
      const interests = getSubscriptionsAndConvertToInterests();

      if (interests.length) {
        await pusherBeamsClient.setDeviceInterests(interests);
      }

      await updateNotificationsEnabledStatus();

      setNotificationEnabledStatusLoading(LoadingTypes.fulfilled);
    } catch (error) {
      setNotificationEnabledStatusLoading(LoadingTypes.rejected);
      await updateNotificationsEnabledStatus();
      console.log('[Beams]: Failed to start beams client: Error:', error);
    }
  };

  const stopBeamsClient = async () => {
    try {
      if (!pusherBeamsClient) {
        return console.log('[Beams]: Beams client not started.');
      }

      setNotificationEnabledStatusLoading(LoadingTypes.pending);
      await pusherBeamsClient.clearDeviceInterests();
      await pusherBeamsClient.stop();

      console.log('[Beams]: Client stopped');

      await updateNotificationsEnabledStatus();
      setNotificationEnabledStatusLoading(LoadingTypes.fulfilled);
    } catch (error) {
      setNotificationEnabledStatusLoading(LoadingTypes.rejected);
      await updateNotificationsEnabledStatus();
      console.log('[Beams]: Failed to stop beams client: Error:', error);
    }
  };

  const enableNotifications = async () => {
    try {
      await startBeamsClient();
      
      if (notificationEnabledStatusLoading === LoadingTypes.fulfilled) {
        dispatch(setNotificationEnabledStatus(true));
      }
      
      if (!notificationsEnabled && notificationClientStatus === RegistrationState.PERMISSION_DENIED) {
        addToast({
          type: 'warning',
          message: 'To enable notifications, update the settings in your browser.',
        });
      }
    } catch (error) {
      console.log('Failed to enable notifications: Error:', error);
    }
  };

  const disableNotifications = () => {
    dispatch(setNotificationEnabledStatus(false));
    stopBeamsClient();
  };

  const addInterest = async (interestsId: number) => {
    try {
      if (!pusherBeamsClient) {
        return console.log('[Beams]: Beams client not started.');
      }

      if (interestsId) {
        await pusherBeamsClient.addDeviceInterest(`message-${interestsId}`);
      }
    } catch (error) {
      console.log('[Beams]: Failed to add interest:', `message-${interestsId}`);
    }
  };

  const removeInterest = async (interestsId: number) => {
    try {
      if (!pusherBeamsClient) {
        return console.log('[Beams]: Beams client not started.');
      }

      if (interestsId) {
        await pusherBeamsClient.removeDeviceInterest(`message-${interestsId}`);
      }
    } catch (error) {
      console.log('[Beams]: Failed to remove interest', `message-${interestsId}`);
    }
  };

  useEffect(() => {
    if (session?.userId) {
      sendMessageToServiceWorker(ServiceWorkerMessageTypes.changeCurrentUserId, { userId: session.userId });
      if (notificationsEnabled && notificationClientStatus !== RegistrationState.PERMISSION_GRANTED_REGISTERED_WITH_BEAMS) {
        startBeamsClient();
      }
    }

    if (!session?.userId) {
      sendMessageToServiceWorker(ServiceWorkerMessageTypes.changeCurrentUserId, { userId: undefined });

      if (isPermissionGrantedWithBeams) {
        stopBeamsClient();
      }
    }
  }, [session?.userId]);

  useEffect(()=>{
    dispatch(setNotificationEnabledStatus(isPermissionGrantedWithBeams));
  }, [notificationClientStatus]);

  useEffect(() => {
    updateNotificationsEnabledStatus();
  }, []);
  
  return {
    notificationsActivated,
    notificationEnabledStatusLoading,
    addInterest,
    removeInterest,
    enableNotifications,
    disableNotifications,
  };
};

export default useNotificationsProvider;
