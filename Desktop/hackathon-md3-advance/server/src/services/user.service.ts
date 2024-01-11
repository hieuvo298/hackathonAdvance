import express, { Request, Response, urlencoded } from "express";
import * as fs from "fs";
import * as path from "path";
const server = express();
server.use(urlencoded());

server.use(express.json());
server.use(express.static("public"));

class UserService {
  constructor() {}

  async getUser(req: Request, res: Response) {
    const data = fs.readFileSync(path.join("public/user.json"), "utf8");
    const users = JSON.parse(data);
    res.status(200).json(users);
  }
  async postNewUser(req: Request, res: Response) {
    const newUser = req.body;
    const data = fs.readFileSync(path.join("public/user.json"), "utf-8");
    const users = JSON.parse(data);

    const existingUser = users.find((item: any) => item.name == newUser.name);

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
    } else {
      users.push(newUser);
      fs.writeFileSync(path.join("public/user.json"), JSON.stringify(users));

      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    }
  }

  async editUserById(req: Request, res: Response) {
    const userId = req.params.id;
    const updatedUser = req.body;
    const data = fs.readFileSync(path.join("public/user.json"), "utf-8");
    const users = JSON.parse(data);
    console.log(updatedUser);
    const userIndex = users.findIndex((u: any) => u.id == userId);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updatedUser };
      fs.writeFileSync(path.join("public/user.json"), JSON.stringify(users));

      res
        .status(200)
        .json({ message: "User updated successfully", user: users[userIndex] });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }
  async deleteUserById(req: Request, res: Response) {
    const userId = req.params.id;
    const data = fs.readFileSync(path.join("public/user.json"), "utf-8");
    const users = JSON.parse(data);

    const userIndex = users.findIndex((u: any) => u.id == userId);
    console.log(userId);
    if (userIndex !== -1) {
      const deletedUser = users.splice(userIndex, 1)[0];
      fs.writeFileSync(path.join("public/user.json"), JSON.stringify(users));

      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }
  async getUserById(req: Request, res: Response) {
    const data = fs.readFileSync(path.join("public/user.json"), "utf-8");
    const users = JSON.parse(data);

    const user = users.find((u: any) => u.id === req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }
}

export default UserService;
