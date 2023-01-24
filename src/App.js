import { useState, useEffect, useMemo } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Who is the Prime minister of India?",
      answers: [
        {
          text: "Amit Shah",
          correct: false,
        },
        {
          text: "Rajnath Singh",
          correct: false,
        },
        {
          text: "Narendra Modi",
          correct: true,
        },
        {
          text: "Rahul Gandhi",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is the Capital of Maharashtra?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
        {
          text: "Chandigarh",
          correct: false,
        },
        {
          text: "Mumbai",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "Where is the Taj Mahal situated?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: true,
        },
        {
          text: "Banaras",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Where is the Taj Mahal sitauted?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: true,
        },
        {
          text: "Banaras",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Where is the Taj Mahal sitauted?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: true,
        },
        {
          text: "Banaras",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Where is the Taj Mahal sitauted?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: true,
        },
        {
          text: "Banaras",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Where is the Taj Mahal sitauted?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: true,
        },
        {
          text: "Banaras",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Where is the Taj Mahal sitauted?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: true,
        },
        {
          text: "Banaras",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Where is the Taj Mahal sitauted?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: true,
        },
        {
          text: "Banaras",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Where is the Taj Mahal sitauted?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: true,
        },
        {
          text: "Banaras",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Where is the Taj Mahal sitauted?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: true,
        },
        {
          text: "Banaras",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Where is the Taj Mahal sitauted?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: true,
        },
        {
          text: "Banaras",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Where is the Taj Mahal sitauted?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: true,
        },
        {
          text: "Banaras",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Where is the Taj Mahal sitauted?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: true,
        },
        {
          text: "Banaras",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Where is the Taj Mahal sitauted?",
      answers: [
        {
          text: "Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: true,
        },
        {
          text: "Banaras",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((item) => (
                <li
                  className={
                    questionNumber === item.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{item.id}</span>
                  <span className="moneyListItemAmount">{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}
export default App;
