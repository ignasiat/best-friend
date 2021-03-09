const {
  createDog, getAllDogs, getDogById, getDogsByUser, updateDogById, deleteDogById
} = require('./dogController');

const Dog = require('../models/dogModel');
require('../models/userModel');
require('../models/breedModel');
require('../models/ageModel');
require('../models/sexModel');
require('../models/sizeModel');
require('../models/colorModel');

jest.mock('../models/dogModel');
jest.mock('../models/userModel');
jest.mock('../models/breedModel');
jest.mock('../models/ageModel');
jest.mock('../models/sexModel');
jest.mock('../models/sizeModel');
jest.mock('../models/colorModel');

describe('Given a createDog function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be invoked', () => {
      const req = { body: {} };
      const res = { json: jest.fn() };

      createDog(req, res);

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
                        .mockImplementationOnce(() => ({
                          populate: jest.fn()
                            .mockImplementationOnce(() => ({
                              populate: jest.fn()
                                .mockImplementationOnce(() => ({ exec: jest.fn() }))
                            }))
                        }))
                    }))
                }))
            }))
        }));

      await getAllDogs(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

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
                        .mockImplementationOnce(() => ({
                          populate: jest.fn()
                            .mockImplementationOnce(() => ({
                              populate: jest.fn()
                                .mockImplementationOnce(() => ({ exec: jest.fn() }))
                            }))
                        }))
                    }))
                }))
            }))
        }));

      await getDogById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getDogsByUser function', () => {
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
                        .mockImplementationOnce(() => ({
                          populate: jest.fn()
                            .mockImplementationOnce(() => ({
                              populate: jest.fn()
                                .mockImplementationOnce(() => ({ exec: jest.fn() }))
                            }))
                        }))
                    }))
                }))
            }))
        }));

      await getDogsByUser(req, res);

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
                        .mockImplementationOnce(() => ({
                          populate: jest.fn()
                            .mockImplementationOnce(() => ({
                              populate: jest.fn()
                                .mockImplementationOnce(() => ({ exec: jest.fn() }))
                            }))
                        }))
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
                        .mockImplementationOnce(() => ({
                          populate: jest.fn()
                            .mockImplementationOnce(() => ({
                              populate: jest.fn()
                                .mockImplementationOnce(() => ({ exec: jest.fn() }))
                            }))
                        }))
                    }))
                }))
            }))
        }));

      await deleteDogById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
