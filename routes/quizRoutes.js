const express = require("express");
const { createQuiz, getActiveQuiz, getQuizResult, getAllQuizzes } = require("../controllers/quizController");
const { auth } = require("../Middleware/authMiddleware");
const rateLimiter = require("../Middleware/rateLimiter");


const quizRouter = express.Router();

quizRouter.post('/quizzes', auth, createQuiz);
quizRouter.get('/quizzes/active', rateLimiter, getActiveQuiz);
quizRouter.get('/quizzes/:id/result', auth, getQuizResult);
quizRouter.get('/quizzes/all', auth, getAllQuizzes);

module.exports = { quizRouter }