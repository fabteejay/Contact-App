import supertest from 'supertest';
import app from '../src/routes/index';

const request = supertest(app);

describe('Contacts application tests ', () => {
  describe('Contacts route tests', () => {
    it('should get all the contacts', () => request.get('/contacts')
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('success');
        expect(response.body.message).toEqual('Contacts get');
        expect(response.body.success).toEqual(true);
      }));

    it('should add a new contact', () => request.post('/contacts')
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('success');
        expect(response.body.message).toEqual('Contacts post');
        expect(response.body.success).toEqual(true);
      }));

    it('should edit a contact', () => request.put('/contacts')
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('success');
        expect(response.body.message).toEqual('Contacts put');
        expect(response.body.success).toEqual(true);
      }));
  });
});
