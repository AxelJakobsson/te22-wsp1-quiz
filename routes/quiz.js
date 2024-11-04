import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.render("quiz.njk", {
    message: "Quiz" 
    })
})

const questions = [
  {
    id: "q1",
    text: "Hur många hjul har en bil?",
    answers: [3, 12, 5, 4],
    correctAnswer: 4
  },
  {
    id: "q2",
    text: "Hur många ben har en gnu?",
    answers: ["två", "sju", "tre", "fyra"],
    correctAnswer: "fyra",
  },
  {
    id: "q3",
    text: "Hur många ben har en trebent stol",
    answers: ["två", "sju", "tre", "fyra"],
    correctAnswer: "tre",
  },
  {
    id: "q4",
    text: "Hur många ben har en gnu?",
    answers: ["två", "sju", "tre", "fyra"],
    correctAnswer: "fyra",
  }
]

router.get("/questions", (req, res) => {
  res.render("questions.njk", {
    message: "Frågor",
    questions
  })
})

router.post("/end", (req, res) => {
  const answers = req.body
  let correctAmount = 0;
  let totalAmount = 0;
//   console.log(answers)
  const results = questions.map(question => {
    const answer = answers[question.id]
    totalAmount += 1;
    if (answer == question.correctAnswer){
         correctAmount += 1;
         console.log(correctAmount) 
    }
    return {
      question: question.text,
      questionId: question.id,
      answer,
      correct: answer == question.correctAnswer
    }
  })


  res.render("result.njk", {
    message: "Ditt resultat",
    results,
    correctAmount,
    totalAmount
  })
})




export default router