import { useState } from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import style from './quiz.module.css';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: ['Это простой HTML', 'Это функция', 'Это тот же HTML, но с возможностью выполнять JS-код'],
    correct: 2,
  },
];

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  let percentage = (correctAnswer * 100) / questions.length;

  function chooseAnswer(event: React.MouseEvent<HTMLButtonElement>) {
    if (index === 3) {
      return;
    }

    setIndex(index + 1);

    const correct = questions[index].correct;

    if (event.target instanceof HTMLButtonElement) {
      const selectedValue = event.target.textContent;

      if (selectedValue === questions[index].variants[correct]) {
        setCorrectAnswer(correctAnswer + 1);
      }
    }
  }

  return (
    <div className="common-wrapper">
      <Header />
      <div className={style.wrapper}>
        <div className={style.quiz}>
          <div className={style.gray}>
            <div className={style.green} style={{ width: `${percentage}%` }}></div>
          </div>
          {index === 3 ? (
            <>
              <img src="/src/assets/img/smile.jpeg" alt="smile" />
              <p>Вы отгадали {correctAnswer} ответа из 3</p>
              <a className={style.buttonAgain} href="/quiz">
                Начать заново
              </a>
            </>
          ) : (
            <>
              <h2>{questions[index].title}</h2>
              {questions[index].variants.map((variant) => (
                <button key={variant} onClick={chooseAnswer}>
                  {variant}
                </button>
              ))}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
