const Breed = require('../models/breedModel');
const { getAllBreds } = require('./breedController');

jest.mock('../models/breedModel');

describe('Given a getAllBreds function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be called', async () => {
      const req = {};
      const res = { json: jest.fn() };

      Breed.find = jest.fn().mockImplementationOnce(() => ({ exec: jest.fn() }));

      await getAllBreds(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
