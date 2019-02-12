const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const data = {
  Profile: {
    Name: "Theodore Robert BUNDY",
    Classification: "Serial killer",
    Number_of_victims: "14 +",
    Date_of_arrest: "February 15, 1978",
    Date_of_birth: "November 24, 1946",
    Victims_profile: "Girls and young women",
    Method_of_murder: "Beating with metal bar / Strangulation",
    Location: "Washington/Colorado/Utah/oregon/Florida/Idaho/Vermont, USA",
    Status: "Executed by electrocution in Florida on January 24, 1989"
  },
  img: "http://murderpedia.org/male.B/images/b/bundy/bundy000.jpg"
};

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/killer/:killer", (req, res) => {
      const actualPage = "/killerprofile";
      const queryParams = { ...{ data }, killer: req.params.killer };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
