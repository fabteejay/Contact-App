import express from 'express';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).send({
      message: 'Contacts get',
      success: true,
    });
  })
  .post((req, res) => {
    res.status(200).send({
      message: 'Contacts post',
      success: true,
    });
  })
  .put((req, res) => {
    res.status(200).send({
      message: 'Contacts put',
      success: true,
    });
  });

export default router;
