import Header from '../../components/header';
import Footer from '../../components/footer';
import style from './home.module.css';

const Home = () => {
  return (
    <div className="common-wrapper">
      <Header />
      <div className={style.wrapper}>
        <p>Stack:</p>
        <ul>
          <li>React</li>
          <li>TS</li>
          <li>Css module</li>
          <li>Ant design</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
