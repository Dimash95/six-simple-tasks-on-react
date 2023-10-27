import { Link } from 'react-router-dom';
import style from './header.module.css';

function Header() {
  return (
    <div className={style.wrapper}>
      <div>
        <Link className={style.logo} to="/">
          Six simple tasks on React
        </Link>
      </div>

      <ul className={style.list}>
        <li>
          <Link className={style.link} to="/counter">
            Counter
          </Link>
        </li>
        <li>
          <Link className={style.link} to="/modal">
            Modal
          </Link>
        </li>
        <li>
          <Link className={style.link} to="/quiz">
            Quiz
          </Link>
        </li>
        <li>Modal</li>
        <li>Modal</li>
        <li>Modal</li>
      </ul>
    </div>
  );
}

export default Header;
