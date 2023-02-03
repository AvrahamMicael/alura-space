import Header from "../../components/Header";
import Menu from "../../components/Menu";
import banner from './img/banner.png';
import styles from './styles.module.scss';

const Home = () => (
  <>
    <Header/>
    <div className={ styles.flexDivisor }>
      <aside>
        <Menu/>
      </aside>
      <main>
        <section className={ styles.mainSection }>
          <div className={ styles.mainSection__image }>
            <h1>A galeria mais completa do espaço</h1>
            <img src={ banner } alt="Imagem da terra vista do espaço"/>
          </div>
        </section>
      </main>
    </div>
  </>
);

export default Home;