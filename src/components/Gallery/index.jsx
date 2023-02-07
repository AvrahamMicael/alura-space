import Tags from '../Tags';
import Cards from './Cards';
import styles from './styles.module.scss';
import images from './images.json';

const Gallery = () => (
  <section className={ styles.gallery }>
    <h2>Navegue pela galeria</h2>
    <Tags/>
    <Cards images={ images } styles={ styles }/>
  </section>
);

export default Gallery;
