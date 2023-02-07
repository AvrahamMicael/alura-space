import instagram from '../../assets/svg/instagram.svg';
import facebook from '../../assets/svg/facebook.svg';
import twitter from '../../assets/svg/twitter.svg';
import styles from './styles.module.scss';

const Footer = () => {

  const genSocial = (name, img, href = '#') => ({ name, img, href });
  const socials = [
    genSocial('facebook', facebook),
    genSocial('twitter', twitter),
    genSocial('instagram', instagram),
  ];

  return (
    <footer className={ styles.footer }>
      <div>
        {socials.map(({ name, img, href }) => (
          <a key={ name } href={ href } target="_blank">
            <img src={ img } alt={ name } />
          </a>
        ))}
      </div>
      <p>Desenvolvido por Mim</p>
    </footer>
  );
};

export default Footer;
