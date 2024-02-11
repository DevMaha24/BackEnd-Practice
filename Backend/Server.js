import express from "express";
import tasks from "./routes/Tasks.js";
const app = express();

app.use(express.json());

app.use("/api/vn/tasks", tasks);

// app.use("/api/vn/tasks", home);
// app.use("/api/vn/tasks", signin);
// app.use("/api/vn/tasks", signup);

app.listen(9000, () =>{
    console.log("listening at port number 9000");
});