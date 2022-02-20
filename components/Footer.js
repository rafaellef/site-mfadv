import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  let date = new Date();
  date.getFullYear();

  return (
    <div className="footer-bar">
      <div className="copyright">
        <small>&copy; {date.getFullYear()}, Mario Filho & Advogados.</small>
        <small>Todos os direitos reservados.</small>
      </div>
      <div className="social-media">
        <ul>
          <li><Link href='https://www.facebook.com/mariofilhoadvogadosassociados/'><a target="_blank"><AiFillFacebook /></a></Link></li>
          <li><Link href='https://www.instagram.com/escritorio.mariofilho/'><a target='_blank'><AiFillInstagram /></a></Link></li>
          <li><Link href='https://www.linkedin.com/in/mario-filho-793009216/'><a target='_blank'><AiFillLinkedin /></a></Link></li>
          <li><Link href='https://api.whatsapp.com/send?phone=5553999102011&text=Gostaria%20de%20receber%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os...'><a target='_blank'><AiOutlineWhatsApp /></a></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
