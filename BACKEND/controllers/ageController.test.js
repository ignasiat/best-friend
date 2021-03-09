const Age = require('../models/ageModel');
const { getAllAges } = require('./ageController');

jest.mock('../models/ageModel');

describe('Given a getAllAges function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be invoked', async () => {
      const req = {};
      const res = { json: jest.fn() };

      Age.find = jest.fn();

      await getAllAges(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
