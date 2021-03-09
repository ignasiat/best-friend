const Sex = require('../models/sexModel');
const { getAllSexes } = require('./sexController');

jest.mock('../models/sexModel');

describe('Given a getAllSexes function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be invoked', async () => {
      const req = {};
      const res = { json: jest.fn() };

      Sex.find = jest.fn();

      await getAllSexes(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
