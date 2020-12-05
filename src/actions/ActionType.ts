export enum ActionType {
  PAGE_LOAD = 'PAGE_LOAD',
  CONNECTION_STATE_CHANGE = 'CONNECTION_STATE_CHANGE',
  CALL_STATE_CHANGE = 'CALL_STATE_CHANGE',
  AUDIO_DEVICES_CHANGE = 'AUDIO_DEVICES_CHANGE',
  AUDIO_DEVICES_EXCEPTION = 'AUDIO_DEVICES_EXCEPTION',
  WORKSPACE_VIEW = 'WORKSPACE_VIEW',
  WORKSPACE_NOTIFICATION_SHOW = 'WORKSPACE_NOTIFICATION_SHOW',
  WORKSPACE_NOTIFICATION_HIDE = 'WORKSPACE_NOTIFICATION_HIDE',
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
  USER_LIST_UPDATE = 'USER_LIST_UPDATE',
}

export interface Action {
  type: ActionType;
  payload: any;
}
