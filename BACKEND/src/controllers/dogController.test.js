const cloudinary = require('cloudinary').v2;
const {
  createDog,
  getAllDogs,
  getDogById,
  getDogsByShelter,
  updateDogById,
  deleteDogById
} = require('./dogController');

const { uploadCloudinary } = require('./dogController');

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
  describe('When is invoked without error', () => {
    test('Then res.status should be invoked with 200', async () => {
      const req = { params: { dogId: 11 } };
      const res = { status: jest.fn(), json: jest.fn() };

      Dog.findById
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({ exec: jest.fn() }))
        }));

      await getDogById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

describe('Given a getDogById function', () => {
  describe('When is invoked with error', () => {
    test('Then res.status should be invoked with 500', async () => {
      const req = { params: { dogId: 11 } };
      const res = { status: jest.fn(), json: jest.fn() };

      Dog.findById
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => { throw new Error(); })
        }));

      await getDogById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a uploadCloudinary function', () => {
  describe('When is invoked with callback successful', () => {
    test('Then newDog will contain a photosURL property with length 1', () => {
      const imagesURL = ['fake photo URL'];
      const newDog = { photosURL: [] };

      cloudinary.uploader.upload = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, { url: 'fake url' });
      });

      uploadCloudinary(newDog, imagesURL);

      expect(newDog.photosURL.length).toBe(1);
    });
  });
});

describe('Given a uploadCloudinary function', () => {
  describe('When is invoked with callback with an error', () => {
    test('Then the promise will resolve with error equals to true', async () => {
      const imagesURL = ['fake photo URL'];
      const newDog = { photosURL: [] };

      cloudinary.uploader.upload = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      });

      try {
        await Promise.all(uploadCloudinary(newDog, imagesURL));
      } catch (error) {
        expect(error).toBe(true);
      }
    });
  });
});

describe('Given a createDog function', () => {
  describe('When is invoked', () => {
    test('Then res.json should be invoked with {dog: "dog example"}', async () => {
      const req = { body: { imagesURL: ['fake photo URL'] }, params: { dogId: null } };
      const res = { status: jest.fn(), json: jest.fn() };

      cloudinary.uploader.upload = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, { url: 'fake url' });
      });

      jest.spyOn(Dog.prototype, 'save')
        .mockImplementationOnce(() => Promise.resolve({ _id: 'dogId' }));

      Dog.findById
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({ exec: jest.fn().mockReturnValue({ dog: 'dog example' }) }))
        }));

      await createDog(req, res);
      expect(res.json).toHaveBeenCalledWith({ dog: 'dog example' });
    });
  });
});

describe('Given a createDog function', () => {
  describe('When is invoked and there is an error', () => {
    test('Then res.status should be invoked with 500', async () => {
      const req = { body: { imagesURL: ['fake photo URL'] }, params: { dogId: null } };
      const res = { status: jest.fn(), json: jest.fn() };

      cloudinary.uploader.upload = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, { url: 'fake url' });
      });

      jest.spyOn(Dog.prototype, 'save')
        .mockImplementationOnce(() => Promise.resolve({ _id: 'dogId' }));

      Dog.findById
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({ exec: jest.fn() }))
        }));

      await createDog(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a getAllDogs function', () => {
  describe('When is invoked without error', () => {
    test('Then res.status should be invoked with 200', async () => {
      const req = {};
      const res = { status: jest.fn(), json: jest.fn() };

      Dog.find
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({ exec: jest.fn() }))
        }));

      await getAllDogs(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

describe('Given a getAllDogs function', () => {
  describe('When is invoked with error', () => {
    test('Then res.status should be invoked with 500', async () => {
      const req = {};
      const res = { status: jest.fn(), json: jest.fn() };

      Dog.find
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => { throw new Error(); })
        }));

      await getAllDogs(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a getDogsByShelter function', () => {
  describe('When is invoked without error', () => {
    test('Then res.status should be invoked with 200', async () => {
      const req = { params: { userId: 11 } };
      const res = { status: jest.fn(), json: jest.fn() };

      Dog.find
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({ exec: jest.fn() }))
        }));

      await getDogsByShelter(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

describe('Given a getDogsByShelter function', () => {
  describe('When is invoked with error', () => {
    test('Then res.status should be invoked with 500', async () => {
      const req = { params: { userId: 11 } };
      const res = { status: jest.fn(), json: jest.fn() };

      Dog.find
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => { throw new Error(); })
        }));

      await getDogsByShelter(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a updateDogById function', () => {
  describe('When is invoked with no images', () => {
    test('Then res.json should be invoked with {dog: "updated dog"}', async () => {
      const req = { params: { dogId: 11 }, body: {} };
      const res = { status: jest.fn(), json: jest.fn() };

      Dog.findByIdAndUpdate
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({ exec: jest.fn().mockReturnValue({ dog: 'updated dog' }) }))
        }));

      await updateDogById(req, res);

      expect(res.json).toHaveBeenCalledWith({ dog: 'updated dog' });
    });
  });
});

describe('Given a updateDogById function', () => {
  describe('When is invoked with images from url', () => {
    test('Then res.json should be invoked with {dog: "updated dog with images"}', async () => {
      const req = { params: { dogId: 11 }, body: { imagesURL: ['http://fakeurl.com'] } };
      const res = { status: jest.fn(), json: jest.fn() };

      Dog.findByIdAndUpdate
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({ exec: jest.fn().mockReturnValue({ dog: 'updated dog with images' }) }))
        }));

      await updateDogById(req, res);

      expect(res.json).toHaveBeenCalledWith({ dog: 'updated dog with images' });
    });
  });
});

describe('Given a updateDogById function', () => {
  describe('When is invoked with images from url and findByIdandUpdate throws an error', () => {
    test('Then res.status should be invoked with 500', async () => {
      const req = { params: { dogId: 11 }, body: { imagesURL: ['http://fakeurl.com'] } };
      const res = { status: jest.fn(), json: jest.fn() };

      Dog.findByIdAndUpdate
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              exec: jest
                .fn().mockImplementationOnce(() => { throw new Error(); })
            }))
        }));

      await updateDogById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a updateDogById function', () => {
  describe('When is invoked with images from a file', () => {
    test('Then res.json should be invoked with {dog: "updated dog with files"} ', async () => {
      const req = { params: { dogId: 11 }, body: { imagesURL: ['file example.jgp'] } };
      const res = { status: jest.fn(), json: jest.fn() };

      cloudinary.uploader.upload = jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, { url: 'fake url' });
      });

      Dog.findByIdAndUpdate
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              exec: jest
                .fn().mockReturnValue({ dog: 'updated dog with files' })
            }))
        }));

      await updateDogById(req, res);

      expect(res.json).toHaveBeenCalledWith({ dog: 'updated dog with files' });
    });
  });
});

describe('Given a updateDogById function', () => {
  describe('When is invoked with images from a file and has an error uploading', () => {
    test('Then res.status should be invoked with 500', async () => {
      const req = { params: { dogId: 11 }, body: { imagesURL: ['file example.jgp'] } };
      const res = { status: jest.fn(), json: jest.fn() };

      cloudinary.uploader.upload = jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, { url: 'fake url' });
      });

      Dog.findByIdAndUpdate
        .mockImplementationOnce(() => ({
          populate: jest.fn()
            .mockImplementationOnce(() => ({
              exec: jest.fn()
            }))
        }));

      await updateDogById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a deleteDogById function', () => {
  describe('When is invoked without errors', () => {
    test('Then res.status should be invoked with 200', async () => {
      const req = { params: { dogId: 11 } };
      const res = { status: jest.fn(), json: jest.fn() };

      Dog.findByIdAndRemove
        .mockImplementationOnce(() => ({ exec: jest.fn() }));

      await deleteDogById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

describe('Given a deleteDogById function', () => {
  describe('When is invoked with errors', () => {
    test('Then res.status should be invoked with 500', async () => {
      const req = { params: { dogId: 11 } };
      const res = { status: jest.fn(), json: jest.fn() };

      Dog.findByIdAndRemove
        .mockImplementationOnce(() => { throw new Error(); });

      await deleteDogById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
