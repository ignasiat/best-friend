const Size = require('../models/sizeModel');
const { getAllSizes } = require('./sizeController');

jest.mock('../models/sizeModel');

describe('Given a getAllSizes function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be invoked', async () => {
      const req = {};
      const res = { json: jest.fn() };

      Size.find = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn() }));

      await getAllSizes(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
