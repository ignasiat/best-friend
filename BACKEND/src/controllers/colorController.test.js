const Color = require('../models/colorModel');
const { getAllColors } = require('./colorController');

jest.mock('../models/colorModel');

describe('Given a getAllColors function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be invoked', async () => {
      const req = {};
      const res = { json: jest.fn() };

      Color.find = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn() }));

      await getAllColors(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
