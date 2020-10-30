import { ActionType } from './ActionType';
import { PhoneState } from '../phone/PhoneState';
import { Call } from '../models/Call';
import { UserConfiguration } from '../models/UserConfiguration';

export interface PhoneDisplayAction {
  type: ActionType;
  payload: string;
}

export const updatePhoneDisplay = (value: string): PhoneDisplayAction => {
  return {
    type: ActionType.PHONE_DISPLAY_UPDATE,
    payload: value,
  };
};

export interface PhoneTokenAction {
  type: ActionType;
  payload: string;
}

export const setPhoneToken = (token: string): PhoneTokenAction => {
  return {
    type: ActionType.PHONE_TOKEN_UPDATE,
    payload: token,
  };
};

export interface PhoneExceptionAction {
  type: ActionType;
  payload: Error;
}

export const setPhoneException = (error: Error): PhoneExceptionAction => {
  return {
    type: ActionType.PHONE_ERROR,
    payload: error,
  };
};

export interface PhoneConfigurationAction {
  type: ActionType;
  payload: UserConfiguration | undefined;
}

export const setPhoneConfiguration = (configuration?: UserConfiguration | undefined): PhoneConfigurationAction => {
  return {
    type: ActionType.PHONE_CONFIGURATION_UPDATE,
    payload: configuration,
  };
};

export interface PhoneDeviceAction {
  type: ActionType;
  payload: string | undefined;
}

export const setPhoneInputDevice = (device: MediaDeviceInfo | string | undefined): PhoneDeviceAction => {
  let deviceId;

  if (device instanceof MediaDeviceInfo) {
    deviceId = device.deviceId;
  } else {
    deviceId = device;
  }

  return {
    type: ActionType.PHONE_INPUT_DEVICE_UPDATE,
    payload: deviceId,
  };
};

export const setPhoneOutputDevice = (device: MediaDeviceInfo | string | undefined): PhoneDeviceAction => {
  let deviceId;

  if (device instanceof MediaDeviceInfo) {
    deviceId = device.deviceId;
  } else {
    deviceId = device;
  }

  return {
    type: ActionType.PHONE_OUTPUT_DEVICE_UPDATE,
    payload: deviceId,
  };
};

export interface PhoneDeviceLostAction {
  type: ActionType;
  payload: undefined;
}

export const lostPhoneInputDevice = (): PhoneDeviceLostAction => {
  return {
    type: ActionType.PHONE_INPUT_DEVICE_LOST,
    payload: undefined,
  };
};

export const lostPhoneOutputDevice = (): PhoneDeviceLostAction => {
  return {
    type: ActionType.PHONE_OUTPUT_DEVICE_LOST,
    payload: undefined,
  };
};

export interface PhoneCallAction {
  type: ActionType;
  payload: Call | undefined;
}

export const setPhoneCall = (call: Call | undefined): PhoneCallAction => {
  return {
    type: ActionType.CALL_STATE_CHANGE,
    payload: call,
  };
};

export interface PhoneStateAction {
  type: ActionType;
  payload: PhoneState;
}

export const setPhoneState = (state: PhoneState): PhoneStateAction => {
  return {
    type: ActionType.PHONE_STATE_CHANGE,
    payload: state,
  };
};

export type PhoneActionType =
  | PhoneDisplayAction
  | PhoneTokenAction
  | PhoneExceptionAction
  | PhoneConfigurationAction
  | PhoneDeviceAction
  | PhoneDeviceLostAction
  | PhoneStateAction;
