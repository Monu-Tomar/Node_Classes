    // ----====Part-2====----

const express = require("express");
const app = express();

// app.get("**", (req, res) => {
//   res.status(300).send("Halo mittar");
// });          // geting Error with *

app.use((req,res)=>{
  res.status(404).send(" from error")
  // console.log(req.url, "ye hai url ka link.")
})            // if we use (use method and then use get, post will not work).

app.use((req,res,next)=>{
  console.log(req.url, "ye hai url ka link.")
  next();
})            // when we are move to different link paths are upadte in console.

app.get("/user", (req,res)=>{
  res.status(200).send("User");
});

app.post("/login", (req, res)=>{
  res.status(200).send("post method")
  console.log(req.url, "ye hai url ka link.")
})

app.post("", (_, res)=>{
  res.status(200).send("post method")
  console.log(req.url, "ye hai url ka link.")
})

// app.get("/*", (_,res)=>{
//   res.status(404).send("404 error code.")
// });   



app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
