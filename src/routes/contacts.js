import express from 'express';
import { saveContact } from '../controllers/contacts';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).send({
      message: 'Contacts get',
      success: true,
    });
  })
  .post((req, res) => {
    saveContact(req, res);
  })
  .put((req, res) => {
    res.status(200).send({
      message: 'Contacts put',
      success: true,
    });
  });

export default router;
