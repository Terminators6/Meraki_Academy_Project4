const mongoose = require("mongoose");
// const app = require("./server");
// const req = require("supertest");
// const db = require("./db/db");

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect("mongodb://localhost:27017/testing", options);

const app = require("./server");
const req = require("supertest");

const User = require("./db/models/user");
const Sup = require("./db/models/supService");
const Comm = require("./db/models/commentSchema");
const Role = require("./db/models/Role_Schema");

beforeAll(async () => {
  await User.remove();
});
afterAll(async () => {
  await User.remove();
  await mongoose.connection.close();
});
afterEach(async () => {
  await User.remove();
});

// testing

describe("User", () => {
  test("check if user defined", () => {
    expect(User).toBeDefined();
  });

  test("should save a User ", async () => {
    const userInfo = {
      firstName: "mohammad",
      lastName: "alnabale",
      age: 24,
      country: "Jordan",
      email: "al@awww.com",
      password: "12423423423423",
    };
    const user = new User(userInfo);
    await user.save();
    const check = await User.findOne({ firstName: userInfo.firstName });
    expect(check.firstName).toBe(userInfo.firstName);
  });
});

describe("Supservice", () => {
  it("check if sup defined", () => {
    expect(Sup).toBeDefined();
  });
  it("should createNewService", async () => {
    const service = {
      title: "supser",
      description: "good",
    };
    const newService = new Sup(service);
    await newService.save();
    const checkSer = await Sup.findOne({ name: service.name });
    expect(service.name).toBe(checkSer.name);
  });
  it("should getAllservice", () => {
    const checkAllServices = Sup.find({});
    expect(checkAllServices).toBeDefined();
  });
});

describe("Comments", () => {
  test("check if comments defined", () => {
    expect(Comm).toBeDefined();
  });
});

describe("Role", () => {
  it("check if Role defined", () => {
    expect(Role).toBeDefined();
  });
});

describe("Testing User APIs", () => {
  test("check if user defined", async () => {
    const userInfo = {
      firstName: "mohammad",
      lastName: "alnabale",
      age: 24,
      country: "Jordan",
      email: "al@awww.com",
      password: "12423423423423",
    };
    expect(User).toBeDefined();
    const newuser = await req(app).post("/register").send(userInfo);
    expect(typeof newuser.body).toEqual(typeof newuser);
    expect(newuser.body).toHaveProperty("_id");
    expect(newuser.body.firstName).toBe(userInfo.firstName);
  });
});
