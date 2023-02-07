import open from './img/open.png';
import favorite from './img/favorito.png';

const Cards = ({ images, styles }) => (
  <ul className={ styles.gallery__cards }>
    {images.map(({ title, credits, src, id }) => (
      <li key={ id } className={ styles.gallery__card }>
        <img src={ src } alt={ title } className={ styles.gallery__img }/>
        <p className={ styles.gallery__description }>{ title }</p>
        <div>
          <p>{ credits }</p>
          <span>
            <img src={ favorite } alt="ícone coração de curtir"/>
            <img src={ open } alt="ícone de abrir modal"/>
          </span>
        </div>
      </li>
    ))}
  </ul>
);

export default Cards;
