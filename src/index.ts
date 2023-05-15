import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import { Prisma, PrismaClient } from "@prisma/client";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Healthy");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
/**
 * @findMany - find all users
 * @param {object} where - where clause
 */
PrismaClient.User.findMany({
    where: {
        id: 1
    },
    include: {
        posts: true
    }
})

