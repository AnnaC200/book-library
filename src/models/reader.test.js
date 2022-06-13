const { expect } = require('chai')
const request = require('supertest')
const { Reader } = require('../src/models')
const app = require('../app')
// const { DataTypes } = require('sequelize/types');

describe('/readers', () => {
// func to run once before ALL the test in describe
  before(async () => Reader.sequelize.sync())
// func to run before EACH test in describe to clean out the Reader table so there's no interference from previous tests
  beforeEach(async () => {
      await Reader.destroy({ where: {} })
  })
// creating a new reader by sending data to the /readers endpoint, asserting a new record gets added in the READERS table in DB
  describe('with no records in the database', () => {
    describe('POST /readers', () => {
      it('creates a new reader in the database', async () => {
        const response = await request(app).post('/readers').send({
          name: 'Anna Chan',
          email: 'annachan@gmail.com',
        })

        expect(response.status).to.equal(201)
      })
    })
  })
})