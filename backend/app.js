require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

const fs = require("fs");
const path = require("path");

// DB connection
mongoose.connect(
  process.env.MONGO_DB_ATLAS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log(`DB Connected`);
    }
  }
);

app.use(express.static("build"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

const beersModel = require("./models/beers");
const userModel = require("./models/user");

app.get("/getdata/:username", (req, res) => {
  beersModel
    .find({ user: `${req.params.username}` }, (err, items) => {
      if (err) {
        console.log(err);
        res.status(500).send("An error occured", err);
      } else {
        res.send(items);
      }
    })
    .sort({ date: -1 });
});

app.post("/edit/:id/:username", upload.single("Image"), (req, res) => {
  let obj = null;
  let isImg = false;
  if (!req.file) {
    obj = {
      breweryName: req.body.brN,
      beerName: req.body.bN,
      type: req.body.bT,
      desc: req.body.dsc,
      user: req.params.username,
    };
  } else {
    isImg = true;
    obj = {
      breweryName: req.body.brN,
      beerName: req.body.bN,
      type: req.body.bT,
      desc: req.body.dsc,
      img: {
        data: fs.readFileSync(
          path.join(__dirname + "/uploads/" + req.file.filename)
        ),
        contentType: "image/png",
      },
      user: req.params.username,
    };
  }
  let response = null;
  beersModel.findByIdAndUpdate(req.params.id, obj, (err, docs) => {
    if (err) {
      response = err;
    } else {
      response = docs;
    }
  });
  if (isImg) {
    fs.unlinkSync(path.join(__dirname + "/uploads/" + req.file.filename));
  }
  res.send(response);
});

app.post("/postdata/:username", upload.single("Image"), (req, res) => {
  const obj = {
    breweryName: req.body.brN,
    beerName: req.body.bN,
    type: req.body.bT,
    desc: req.body.dsc,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
    user: req.params.username,
  };
  beersModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();
      fs.unlinkSync(path.join(__dirname + "/uploads/" + req.file.filename));
      res.send("Beer added.");
    }
  });
});

app.post("/login", (req, res) => {
  userModel.find({ username: req.body.user }, (err, items) => {
    if (items[0]) {
      if (
        items[0].password === req.body.pass &&
        items[0].username === req.body.user
      ) {
        res.send("okejos");
      } else {
        res.redirect(404, "/");
      }
    } else {
      res.redirect(404, "/");
    }
  });
});

app.post("/register", (req, res) => {
  userModel.find({ username: req.body.user }, (err, items) => {
    if (items[0]) {
      if (items[0].username === req.body.user) {
        res.redirect(404, "/");
      }
    } else {
      userModel.create(
        { username: req.body.user, password: req.body.pass },
        (err) => {
          if (err) {
            res.redirect(404, "/");
          } else {
            res.send("Okejos registeros");
          }
        }
      );
    }
  });
});

app.post("/delete/:id", (req, res) => {
  let response = null;
  beersModel.findByIdAndDelete(req.params.id, (err, docs) => {
    if (err) {
      response = err;
    } else {
      response = docs;
    }
  });
  res.send("Deleted: " + response);
});

const port = process.env.PORT || "3003";
app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Server listening on port: ${port}`);
  }
});
