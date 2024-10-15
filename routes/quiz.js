import express from "express"
const router = express.Router()


router.get("/", (req, res) => {
    res.render('quiz.njk', {
        title: "Quiz",
    })
})

router.get("/questions", (req, res) => {
    res.render("questions.njk", {
        message: "Frågor",
        questions
    })
})

const questions = [
    {
        id: "q1",
        text: "Hur många däck har en bil?",
        answers: [4, 6, 8, 5],
        correctAnswer: 4
    },

    {
        id: "q2",
        text: "Hur många ben har en elefant?",
        answers: [4, 6, 7, 2],
        correctAnswer: 6,
    }        
]

router.post("/end", (req, res) => {
    const answers = req.body
    console.log(answers)
    questions.forEach(question=> {
        const answer = answers[question.id]
        if (answer == question.correctAnswer) {
            console.log("Du har svarat rätt på fråga: ", question.id )
        }
        else {
            console.log("Du har svarat fel på fråga: ", question.id)
        }
    })

    res.json(answers)
})

export default router