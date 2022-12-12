const express = require("express");

const routes = express.Router();

const Survey = require("./Controllers/Survey");

routes.get("/", Survey.home);
routes.get("/all", Survey.index);
routes.get("/search-personal-data", Survey.searchPersonalData);
routes.get("/search-questions-count", Survey.searchQuestionsCount);
routes.get("/search-questions-users", Survey.searchQuestions);
routes.post("/register-answer", Survey.registerAnswer);

module.exports = routes;
