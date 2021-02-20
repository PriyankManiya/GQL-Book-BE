import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./Schema/Schema.js";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;
const URL = "mongodb://localhost/gql-Books";

mongoose
  .connect(URL, {})
  .then(() => console.log("MongoDb Connected Successfully"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, (req, res) => {
  console.log(`Server Running on ${PORT}`);
});
