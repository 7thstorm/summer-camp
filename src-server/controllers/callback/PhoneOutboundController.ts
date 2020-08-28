import { Response, NextFunction } from 'express';
import VoiceResponse = require('twilio/lib/twiml/VoiceResponse');
import { callRepository as calls } from '../../worker';
import { RequestWithAccount } from '../../requests/RequestWithAccount';
import { getConferenceStatusEventUrl } from './PhoneHelper';
import { Call } from '../../models/Call';
import { CallNotFoundException } from '../../exceptions/CallNotFoundException';

const generateConnectTwiml = (req: RequestWithAccount, call: Call) => {
  let twiml = new VoiceResponse();

  const dial = twiml.dial({ callerId: call.from });

  const options: any = {
    endConferenceOnExit: true,
    statusCallbackEvent: ['join'],
    statusCallback: getConferenceStatusEventUrl(req, call),
    participantLabel: 'agent',
  };

  dial.conference(options, call.id);

  return twiml.toString();
};

const handle = async (req: RequestWithAccount, res: Response, next: NextFunction) => {
  try {
    const call = await calls.getById(req.body.callId);

    if (!call) {
      throw new CallNotFoundException();
    }

    res.status(200).send(generateConnectTwiml(req, call));
  } catch (error) {
    return next(error);
  }
};

export const PhoneOutboundController = {
  handle,
};
