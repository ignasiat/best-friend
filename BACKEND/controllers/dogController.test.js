const {
  createDog, getAllDogs, getDogById, getDogsByShelter, updateDogById, deleteDogById
} = require('./dogController');

const Dog = require('../models/dogModel');
require('../models/userModel');
require('../models/breedModel');
require('../models/addressModel');
require('../models/colorModel');

jest.mock('../models/dogModel');
jest.mock('../models/userModel');
jest.mock('../models/breedModel');
jest.mock('../models/addressModel');
jest.mock('../models/colorModel');

describe('Given a getDogById function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be invoked', async () => {
      const req = { params: { dogId: 11 } };
      const res = { json: jest.fn() };

      Dog.findById
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              populate: jest.fn()
                .mockImplementationOnce(() => ({
                  populate: jest.fn()
                    .mockImplementationOnce(() => ({
                      populate: jest.fn()
                        .mockImplementationOnce(() => ({ exec: jest.fn() }))
                    }))
                }))
            }))
        }));

      await getDogById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a createDog function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be invoked', async () => {
      const req = { body: { imagesURL: ['fake photo URL'] } };
      const res = { json: jest.fn() };

      const cloudinary = jest.genMockFromModule('cloudinary').v2;

      cloudinary.uploader = jest.fn().mockImplementationOnce(() => ({
        upload: jest.fn()
          .mockImplementationOnce((url, callback) => callback(null, { url: '' }))
      }));

      await createDog(req, res);
      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getAllDogs function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be invoked', async () => {
      const req = {};
      const res = { json: jest.fn() };

      Dog.find
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              populate: jest.fn()
                .mockImplementationOnce(() => ({
                  populate: jest.fn()
                    .mockImplementationOnce(() => ({
                      populate: jest.fn()
                        .mockImplementationOnce(() => ({ exec: jest.fn() }))
                    }))
                }))
            }))
        }));

      await getAllDogs(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getDogsByShelter function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be invoked', async () => {
      const req = { params: { userId: 11 } };
      const res = { json: jest.fn() };

      Dog.find
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              populate: jest.fn()
                .mockImplementationOnce(() => ({
                  populate: jest.fn()
                    .mockImplementationOnce(() => ({
                      populate: jest.fn()
                        .mockImplementationOnce(() => ({ exec: jest.fn() }))
                    }))
                }))
            }))
        }));

      await getDogsByShelter(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a updateDogById function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be invoked', async () => {
      const req = { params: { dogId: 11 }, body: {} };
      const res = { json: jest.fn() };

      Dog.findByIdAndUpdate
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              populate: jest.fn()
                .mockImplementationOnce(() => ({
                  populate: jest.fn()
                    .mockImplementationOnce(() => ({
                      populate: jest.fn()
                        .mockImplementationOnce(() => ({ exec: jest.fn() }))
                    }))
                }))
            }))
        }));

      await updateDogById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a deleteDogById function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be invoked', async () => {
      const req = { params: { dogId: 11 } };
      const res = { json: jest.fn() };

      Dog.findByIdAndRemove
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              populate: jest.fn()
                .mockImplementationOnce(() => ({
                  populate: jest.fn()
                    .mockImplementationOnce(() => ({
                      populate: jest.fn()
                        .mockImplementationOnce(() => ({ exec: jest.fn() }))
                    }))
                }))
            }))
        }));

      await deleteDogById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
