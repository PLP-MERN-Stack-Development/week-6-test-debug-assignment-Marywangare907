const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');

let mongoServer;
let token;
let bugId;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);

  // Register a user
  await request(app).post('/api/auth/register').send({
    username: 'tester',
    email: 'test@example.com',
    password: 'password123',
  });

  // Login to get token
  const res = await request(app).post('/api/auth/login').send({
    email: 'test@example.com',
    password: 'password123',
  });

  token = res.body.token;
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Bug API', () => {
  it('should create a bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Bug title',
        description: 'Bug description',
        reporter: 'tester',
        status: 'open',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    bugId = res.body._id;
  });

  it('should get all bugs', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get single bug', async () => {
    const res = await request(app).get(`/api/bugs/${bugId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('_id', bugId);
  });

  it('should update a bug', async () => {
    const res = await request(app)
      .put(`/api/bugs/${bugId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Updated bug',
       description: 'Updated description',
       reporter: 'tester',
        status: 'closed',
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('closed');
  });


  it('should delete a bug', async () => {
    const res = await request(app)
      .delete(`/api/bugs/${bugId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Bug deleted');
  });
});
