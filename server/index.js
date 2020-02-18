const path = require("path");
const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const compression = require("compression");
const session = require("express-session");
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./db");
const sessionStore = new SequelizeStore({ db });
const PORT = process.env.PORT || 8080;
const app = express();
module.exports = app;

if (process.env.NODE_ENV === "test") {
  after("close the session store", () => sessionStore.stopExpiringSessions());
}

if (process.env.NODE_ENV !== "production") require("../secrets");

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    if (!id) {
      id = null;
    }
    const user = await db.models.user.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

const createApp = () => {
  app.use(morgan("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(compression());

  app.use(
    session({
      secret: process.env.SESSION_SECRET || "my best friend is Cody",
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/auth", require("./auth"));
  app.use("/api", require("./api"));
  app.use("/maps", require("./maps"));

  app.use(express.static(path.join(__dirname, "..", "dist")));
  app.use(express.static(path.join(__dirname, "..", "public")));
  app.use(express.static(path.join(__dirname, "..", "uploads")));

  let upload = multer({ dest: "uploads/" });

  app.post("/file", upload.single("file"), (req, res, next) => {
    const file = req.file;
    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }

    res.send({ fileName: file.filename });
  });

  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error("Not found");
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist/index.html"));
  });

  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });
};

const startListening = () => {
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  );
};

const syncDb = () => db.sync();

async function bootApp() {
  await sessionStore.sync();
  await syncDb();
  await createApp();
  await startListening();
}

if (require.main === module) {
  bootApp();
} else {
  createApp();
}
