import { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Button } from 'antd';
import style from './counter.module.css';

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="common-wrapper">
      <Header />
      <div className={style.wrapper}>
        <h2 className={style.title}>Cчетчик:</h2>
        <h1 className={style.number}>{counter}</h1>
        <div className={style.buttonWrapper}>
          <Button type="primary" className={style.minus} onClick={() => setCounter(counter - 1)}>
            - Минус
          </Button>
          <Button type="primary" danger className={style.plus} onClick={() => setCounter(counter + 1)}>
            Плюс +
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Counter;
