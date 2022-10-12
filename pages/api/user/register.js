import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const client = await MongoClient.connect(
    "mongodb+srv://moej00:daamypassword@cluster0.daayg.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db("sis");

  if (req.method === "POST") {
    const {
      firstname,
      lastname,
      email,
      program,
      password,
      confirmPassword,
      areaCode,
      mobileNumber,
    } = req.body;

    const newUser = {
      firstname,
      lastname,
      email,
      program,
      password,
      confirmPassword,
      areaCode,
      mobileNumber,
    };
    try {
      const users = db.colletion("user");
      const result = await users.insertOne(newUser);
      console.log(result);
      res.status(201).json({ message: "Registration Successfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler;
