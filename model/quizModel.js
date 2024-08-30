const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: { type: [String], required: true },
    rightAnswer: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, enum: ['upcoming', 'active', 'finished'], default: 'upcoming' },
},
    {
        timestamps: true,
        versionKey: false
    });

const QuizModule = mongoose.model('Quiz', quizSchema);

module.exports = { QuizModule };