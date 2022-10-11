import { MongoClient } from "mongodb";

const registerHandler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // const {
    //   firstname,
    //   lastname,
    //   email,
    //   program,
    //   password,
    //   confirmPassword,
    //   areaCode,
    //   mobileNumber,
    // } = data;
    await MongoClient.connect(process.env.DBURL).then(() =>
      console.log("Databse Connected")
    );
    const db = client.db();

    const users = db.colletion("user");
    const result = await users.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "user Inserted!" });
  }
};

export default registerHandler;
