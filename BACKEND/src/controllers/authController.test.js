const { register, login, logout } = require('./authController');
const User = require('../models/userModel');
require('md5');

jest.mock('../models/userModel');
jest.mock('md5');

describe('Given a register function', () => {
  describe('When is invoked with errors', () => {
    test('Then should invoke res.status with 500', async () => {
      const req = { body: { email: 'fake email', password: 'fake password' } };
      const res = { status: jest.fn(), send: jest.fn() };

      jest.spyOn(User.prototype, 'save')
        .mockImplementationOnce(() => Promise.reject());

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a register function', () => {
  describe('When is invoked without errors', () => {
    test('Then should invoke res.status with 200', async () => {
      const req = { body: { email: 'fake email', password: 'fake password' } };
      const res = { status: jest.fn(), send: jest.fn() };

      jest.spyOn(User.prototype, 'save')
        .mockImplementationOnce(() => Promise.resolve());

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

describe('Given a login function', () => {
  describe('When is invoked', () => {
    test('Then should invoke res.json method', async () => {
      const req = { params: { }, user: { _id: 11 } };
      const res = { json: jest.fn() };

      User.findById
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({ exec: jest.fn() }))
        }));

      await login(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a logout function', () => {
  describe('When is invoked', () => {
    test('Then should invoke res.redirect', () => {
      const req = { logout: jest.fn() };
      const res = { redirect: jest.fn() };

      logout(req, res);

      expect(res.redirect).toHaveBeenCalled();
    });
  });
});
