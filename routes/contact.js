import express from 'express';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).send({
      message: 'Contacts get',
    });
  })
  .post((req, res) => {
    res.status(200).send({
      message: 'Contacts post',
    });
  })
  .put((req, res) => {
    res.status(200).send({
      message: 'Contacts put',
    });
  });

export default router;
