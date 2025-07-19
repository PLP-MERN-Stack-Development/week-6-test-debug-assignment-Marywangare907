const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

let mongoServer, token;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());

  const user = new User({ username: 'user1', email: 'user1@example.com', password: 'hashed' });
  await user.save();

  token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('User API', () => {
  it('should update user profile', async () => {
    const res = await request(app)
      .put('/api/users/profile')
      .set('Authorization', `Bearer ${token}`)
      .send({ username: 'newUser' });

    expect(res.statusCode).toBe(200);
    expect(res.body.username).toBe('newUser');
  });

  it('should return 404 if user not found', async () => {
    await mongoose.connection.dropCollection('users'); // Remove all users

    const res = await request(app)
      .put('/api/users/profile')
      .set('Authorization', `Bearer ${token}`)
      .send({ username: 'ghost' });

    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe('User not found');
  });
});
