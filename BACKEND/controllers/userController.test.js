const { createUser, getAllUsers } = require('./userController');

const User = require('../models/userModel');
require('../models/addressModel');
require('../models/userTypeModel');

jest.mock('../models/userModel');
jest.mock('../models/addressModel');
jest.mock('../models/userTypeModel');

describe('Given a createUser function', () => {
  describe('When is invoked ', () => {
    test('Then res.json should be invoked', () => {
      const req = { body: {} };
      const res = { json: jest.fn() };

      createUser(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getAllUsers function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be invoked', async () => {
      const req = {};
      const res = { json: jest.fn() };

      User.find
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => { jest.fn(); })
        }));

      await getAllUsers(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
