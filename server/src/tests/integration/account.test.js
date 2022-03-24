import chai from 'chai';
import http from 'chai-http';
import app from '../../app';

chai.use(http);
const { expect } = chai;
let token = '';
let userId = '';
let status = 400;
let payload = {};
let success = false;
describe('Accounts Success', () => {
  before((done) => {
    const account = {
       first_name:"John",
       last_name:"Doe",
       phone: "07863536352"
    };
    chai
      .request(app)
      .post('/api/v1/accounts')
      .send(account)
      .then((res) => {
        status = res.status;
        payload = res.body.payload;
        success = res.body.success;
        done();
      })
      .catch((err) => {
        done(err);
      });
  })

  it('Should create account', ()=> {
      expect(success).to.eql(true);
      expect(payload.first_name).to.eql("John");
  })
});
