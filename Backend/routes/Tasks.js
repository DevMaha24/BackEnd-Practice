import express from "express";
import functions from "../functions/Tasks.js";

const tasks = express.Router();

tasks.get("/", functions.home);
tasks.get("/signin", functions.signin);
tasks.get("/signup", functions.signup);

export default tasks;