
const { createQuiz, getActiveQuiz, getQuizResult, getAllQuizzes, updateQuizStatus } = require("../services/quizService");




exports.createQuiz = async (req, res) => {
    try {
        const quiz = await createQuiz(req.body);
        res.status(201).json({ success: true, data: quiz });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.getActiveQuiz = async (req, res) => {
    try {
        await updateQuizStatus(); 
        const quiz = await getActiveQuiz();
        if (!quiz) {
            return res.status(404).json({ success: false, message: 'No active quiz found' });
        }
        res.status(200).json({ success: true, data: quiz });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getQuizResult = async (req, res) => {
    try {
        const result = await getQuizResult(req.params.id);
        if (!result) {
            return res.status(404).json({ success: false, message: 'Quiz not found or result not available' });
        }
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await getAllQuizzes();
        res.status(200).json({ success: true, data: quizzes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};