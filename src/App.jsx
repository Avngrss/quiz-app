
import { useState } from 'react';
import './App.scss';


const questions = [
  {title: 'React JS - это...', answers: ['Библиотека', "Фреймворк", "Back-end платформа"], correct: 0},
  {title: 'Как много компонентов может быть на сайте?', answers: ['Не более 10', "Не более 100", "Неограниченое колличество"], correct: 2},
  {title: 'Куда можно встроить готовый код из метода render()?', answers: ['Только в div', "Только в div у которого есть id", "В любой тег"], correct: 2}
]

function Quizz({ question, onClickAnsw }) {
return (
  <div className="quizz">
      <div className="proggress"></div>
      <div className="game">
          <h1 className='game-title'>{question.title}</h1>
          <ul className='game-list'>
              {
                question.answers.map((ans, index) => 
                  <li key={ans} className='game-list-item' onClick={() => onClickAnsw(index)}>{ans}</li>
                )
              }
          </ul>
      </div>
  </div>
  )
}

function Result({ correct }) {
  return (
    <div className="result">
      <h2>Поздравляем!!</h2>
      <p className='result-text'>У вас {correct} правильных ответов из {questions.length}</p>
      <a href="/">
        <button className='result-btn'>Попробывать заново</button>
      </a>
    </div>
  )
}

function App() {
  const [step, setStape] = useState(0);
  const question = questions[step];

  const [correct, setCorrect] = useState(0);

  const onClickAnsw = (index) => {
    setStape(step + 1);
    if(index === question.correct) {
      setCorrect(correct + 1)
    }
  }
  return (
    <div className="App">
      {
        step !== questions.length ? <Quizz question={question} onClickAnsw={onClickAnsw}/> : <Result correct={correct}/>
      }
    </div>
  );
}

export default App;
