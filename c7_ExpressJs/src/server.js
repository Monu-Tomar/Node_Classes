    // ----====Part-2====----

const express = require("express");
const app = express();

// app.get("**", (req, res) => {
//   res.status(300).send("Halo mittar");
// });          // geting Error with *
// this will appear in version 5 but if work with older version 4.21.2 it will working well.
// step uninstall version 5 and install 4.21.2

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



//$---------------------------------------------------------------------------------------
app.get("/u2", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(req.url);
});
//$---------------------------------------------------------------------------------------
app.get("/search", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(req.query);
});

//$---------------------------------------------------------------------------------------
app.get("/product", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(req.params);
});
//$---------------------------------------------------------------------------------------
app.get("/product/:brand", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(req.params);
});
//$---------------------------------------------------------------------------------------
app.get("/product/:brand/:car", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(req.params);
});
//$---------------------------------------------------------------------------------------
//$---------------------------------------------------------------------------------------

app.get("/contact.php", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.redirect("/contact");
});
//$---------------------------------------------------------------------------------------
app.get("/contact", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h2>Contact page</h2>");
});

//$---------------------------------------------------------------------------------------
//$---------------------------------------------------------------------------------------
app.get("/applii", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.status(200).download(path.resolve("src/public/img/mute.png"), (err) => {
    console.warn("Try Again");
    res.status(404).send("<h2>File not found }}}}}</h2>");
  });
});



app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
