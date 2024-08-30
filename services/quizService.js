const { QuizModule } = require("../model/quizModel");


const createQuiz = async (quizData) => {
    const quiz = new QuizModule(quizData);
    await quiz.save();
    return quiz;
}

const updateQuizStatus = async () => {
    const now = new Date();
    await QuizModule.updateMany(
        { startDate: { $lte: now }, endDate: { $gte: now }, status: 'upcoming' },
        { status: 'active' }
    );
    await QuizModule.updateMany(
        { endDate: { $lt: now }, status: { $ne: 'finished' } },
        { status: 'finished' }
    );
};


const getActiveQuiz = async () => {
    const now = new Date();
    return await QuizModule.findOne({ startDate: { $lte: now }, endDate: { $gte: now }, status: 'active' });
};

const getQuizResult = async (quizId) => {
    const quiz = await QuizModule.findById(quizId);
    if (!quiz || new Date() < new Date(quiz.endDate).getTime() + 5 * 60 * 1000) {
        return null;
    }
    return { question: quiz.question, correctAnswer: quiz.options[quiz.rightAnswer] };
};

// const getQuizResult = async (quizId) => {
//     const quiz = await QuizModule.findById(quizId);
//     if (!quiz) {
//         return null;
//     }
//     return { question: quiz.question, correctAnswer: quiz.options[quiz.rightAnswer] };
// };


const getAllQuizzes = async () => {
    return await QuizModule.find();
};


module.exports = {
    createQuiz,
    getActiveQuiz,
    getQuizResult,
    getAllQuizzes,
    updateQuizStatus
};