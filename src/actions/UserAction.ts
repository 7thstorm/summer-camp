import { ActionType } from './ActionType';
import { User } from '../models/User';
import { UserActivity } from '../models/enums/UserActivity';
import { UserConnectionState } from '../models/enums/UserConnectionState';
import { UserRole } from '../models/enums/UserRole';

export interface UserAction {
  type: ActionType;
  payload: UserActionPayload;
}

export interface UserConnectionStateAction {
  type: ActionType;
  payload: {
    state: UserConnectionState;
    code: number | undefined;
  };
}

interface UserActionPayload {
  id: string | undefined;
  name: string | undefined;
  profileImageUrl: string | undefined;
  tags: string[];
  activity: UserActivity;
  role: UserRole | undefined;
}

const toPlainObject = (user: User) => {
  return {
    id: user.id,
    name: user.name,
    profileImageUrl: user.profileImageUrl,
    tags: Array.from(user.tags),
    activity: user.activity,
    role: user.role,
    connectionState: user.connection.state,
  };
};

export const setActivity = (user: User): UserAction => {
  return {
    type: ActionType.USER_ACTIVITY_CHANGED,
    payload: toPlainObject(user),
  };
};

export const setConnectionState = (state: UserConnectionState, code: number | undefined): UserConnectionStateAction => {
  return {
    type: ActionType.USER_CONNECTION_STATE_CHANGED,
    payload: { state, code },
  };
};

export const setLogout = (reason?: string) => {
  return {
    type: ActionType.USER_LOGOUT,
    payload: { reason: reason },
  };
};

export const setLogin = (token: string) => {
  return {
    type: ActionType.USER_LOGIN,
    payload: { token: token },
  };
};
