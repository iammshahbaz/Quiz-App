const cron = require('node-cron');
const { QuizModule } = require('../model/quizModel');

const startCronJobs = () => {
    cron.schedule('* * * * *', async () => {
        const now = new Date();
        await QuizModule.updateMany(
            { startDate: { $lte: now }, endDate: { $gte: now }, status: 'upcoming' },
            { status: 'active' }
        );
        await QuizModule.updateMany(
            { endDate: { $lt: now }, status: 'active' },
            { status: 'finished' }
        );
        console.log('Cron job: Updated quiz statuses');
    });
};

module.exports = startCronJobs;
