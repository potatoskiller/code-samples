import { LoadingTypes } from '@commonTypes/types';

export interface NotificationsContextProps {
  notificationsActivated: boolean;
  notificationEnabledStatusLoading: LoadingTypes;
  addInterest: (interestsId: number) => void;
  removeInterest: (interestsId: number) => void;
  enableNotifications: () => void;
  disableNotifications: () => void;
}
