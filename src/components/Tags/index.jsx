import styles from './styles.module.scss';

const Tags = () => {
  const tags = [ 'estrelas', 'galáxias', 'lua', 'planetas' ];
  return (
    <div className={ styles.tags }>
      <p>Filtre por tags:</p>
      <ul className={ styles.tags__list }>
        {tags.map(tag => (
          <li key={ tag }>{ tag }</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
