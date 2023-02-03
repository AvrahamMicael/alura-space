import brand from './img/logo.png'
import search from './img/search.png'
import styles from './styles.module.scss';

const Header = () => (
  <header className={ styles.header }>
    <img src={ brand } alt="Logo do Alura Space"/>
    <div className={ styles.header__container }>
      <input className={ styles.header__input } type="text" placeholder="O quê você procura?"/>
      <img src={ search } alt="ícone de lupa"/>
    </div>
  </header>
);

export default Header;
