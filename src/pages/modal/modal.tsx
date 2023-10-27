import { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import style from './modal.module.css';
import { Button } from 'antd';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="common-wrapper">
      <Header />
      <div className={style.wrapper}>
        <Button type="primary" onClick={() => setIsOpen(true)}>
          Открыть
        </Button>
        <div className={isOpen ? style.img : style.hidden}>
          <Button className={style.buttonClose} type="primary" danger onClick={() => setIsOpen(false)}>
            x
          </Button>
          <img src="/src/assets/gif/cat.gif" alt="Cat" width={500} height={400} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Modal;
