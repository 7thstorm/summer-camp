import { CallNotFoundException } from '../../exceptions/CallNotFoundException';
import { CallNotInProgressException } from '../../exceptions/CallNotInProgressException';
import { TwilioCallControlHelper } from '../../helpers/twilio/TwilioCallControlHelper';
import { CallStatus } from '../../models/CallStatus';
import { HoldMessage } from '../../models/socket/messages/HoldMessage';
import { UserWithSocket } from '../../models/UserWithSocket';
import { callRepository } from '../../worker';

const handle = async (user: UserWithSocket, message: HoldMessage): Promise<HoldMessage> => {
  const call = await callRepository.getById(message.payload.id);

  if (!call) {
    throw new CallNotFoundException();
  }

  if (call.status !== CallStatus.InProgress) {
    throw new CallNotInProgressException();
  }

  const helper = new TwilioCallControlHelper(user.account);

  await helper.hold(call, 'customer', message.payload.state);

  return new HoldMessage(call.id, message.payload.state, message.header.id);
};

export const HoldMessageHandler = {
  handle,
};
