console.log("today we are going to learn about express js");
const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");

const port = process.env.PORT || 3300;   // when we change the port first we need to stop the server and then start it again.

// app.use((req, res)=>{    // app.use k ander jo ham pass h vo middlewarw hote hai...
//     res.status(200);     // in express status is defined in function.
//     res.end("<h1>Hellio express say something went </h1>" );
// });

// app.use((req, res, next)=>{
//     console.log("app running " + new Date().toLocaleString());    // if we write something on browser one output is execute.  get"/" and app.use are located/excute on home page.
//     // res.end("here are going to end the function/return something"); 
//     next();
//     console.log("by from use")
// });

// app.get("/",(req, res, next)=>{       // in the case of get forst we provide path then our other functionaities.
//     res.status(299);
//     res.setHeader("Content-Type", "text/html");
//     res.write("i'm from write");
//     console.log("hii");
//     // res.send("hello sender we are here");
//     // =============== 
//     //res.status(300).send("ye hai status k sath wala response");  // send work like end we cant able to do any thing after send. But in any case, we write after send it does run/execute we don't get any error.
//     next();
//     console.log("byy from /")
// });


app.use(express.static(path.resolve("src/public")));

app.get(/.*fly$/, (req,res)=>{
  res.status(200).send(req.query);
});

app.use("/ab*c", (_, res)=>{
  res.status(200).json({
    message: "hello mn user"
  })
})

// app.get("**", (req, res) => {
//   res.status(300).send("Halo mittar");
// });

app.listen(port, ()=>{
    console.log(`server is running on port http://localhost:${port}`);
});



// Question of the day...   in the case of next how  to write in both of the middlewares of the browser...