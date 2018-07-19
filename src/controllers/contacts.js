import Contacts from '../models/contacts';
import Logger from '../tools/Logger';
import { emailCheck, valueCheck } from '../tools/validator';
import { plainResponse, payloadResponse } from '../tools/response';

export const saveContact = (req, res) => {
  const { name, email } = req.body;
  if (!valueCheck(name)) {
    return plainResponse(req, res, 400, 'name is required', false);
  }
  if (!valueCheck(email)) {
    return plainResponse(req, res, 400, 'email is required', false);
  }
  if (!emailCheck(email)) {
    return plainResponse(req, res, 400, 'email is not valid', false);
  }
  Contacts({
    name, email,
  })
    .save()
    .then(() => {
      Logger('info', 'Contact saved successfully');
      return plainResponse(req, res, 200, 'contact saved successfully', true);
    })
    .catch((error) => {
      Logger('error', error);
      return payloadResponse(req, res, 400, 'contact not saved successfully', false, error, 'error');
    });
};

export const name = () => Logger('info', 'test nothing');
