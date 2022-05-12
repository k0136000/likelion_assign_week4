import express from "express";
import api from "./api/index.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api",api);

// app.get('/',(req,res)=>{
//   res.send("get");
// })

// port로 서버를 열어줍니다. 이후 console.log로 터미널에 주소를 보여줍니다.
app.listen(port,()=>{
  console.log(`서버실행 => http://localhost:${port}`);
});