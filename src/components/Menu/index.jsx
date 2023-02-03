import home from '../../assets/icones/home-ativo.png';
import moreLikes from '../../assets/icones/mais-curtidas-inativo.png';
import moreViews from '../../assets/icones/mais-vistas-inativo.png';
import newOnes from '../../assets/icones/novas-inativo.png';
import surprise from '../../assets/icones/surpreenda-me-inativo.png';
import styles from './styles.module.scss';

const Menu = () => {
  const genListItemLink = (src, alt, href, name) => ({
    src, alt, href, name
  });
  const listItemLinks = [
    genListItemLink(home, '', '', 'Início'),
    genListItemLink(moreLikes, '', '', 'Mais curtidas'),
    genListItemLink(moreViews, '', '', 'Mais vistas'),
    genListItemLink(newOnes, '', '', 'Novas'),
    genListItemLink(surprise, '', '', 'Surpreenda-me'),
  ];

  return (
    <nav className={ styles.menu }>
      <ul className={ styles.menu__list }>
        {listItemLinks.map(({ src, alt, href, name }) => (
          <li className={ styles.menu__item } key={ name }>
            <img src={ src } alt={ alt }/>
            <a href={ href }>{ name }</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
