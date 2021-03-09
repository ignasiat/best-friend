const {
  createUser, getAllUsers, getUserById, updateUserById, deleteUserById
} = require('./userController');

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
            .mockImplementationOnce(() => ({
              populate: jest.fn()
                .mockImplementationOnce(() => ({ exec: jest.fn() }))
            }))
        }));

      await getAllUsers(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getUserById function', () => {
  describe('When is invoked with a userId', () => {
    test('Then res.json should be invoked', async () => {
      const req = { params: { userId: 11 } };
      const res = { json: jest.fn() };

      User.findById
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              populate: jest.fn()
                .mockImplementationOnce(() => ({ exec: jest.fn() }))
            }))
        }));

      await getUserById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a updateUserById function', () => {
  describe('When is invoked with a userId and some data', () => {
    test('Then res.json should be invoked', async () => {
      const req = { params: { userId: 11 }, body: { name: 'Fake name' } };
      const res = { json: jest.fn() };

      User.findByIdAndUpdate
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              populate: jest.fn()
                .mockImplementationOnce(() => ({ exec: jest.fn() }))
            }))
        }));

      await updateUserById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteUserById function', () => {
  describe('When is invoked with a userId', () => {
    test('Then res.json should be invoked', async () => {
      const req = { params: { userId: 11 } };
      const res = { json: jest.fn() };

      User.findByIdAndRemove
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              populate: jest.fn()
                .mockImplementationOnce(() => ({ exec: jest.fn() }))
            }))
        }));

      await deleteUserById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
