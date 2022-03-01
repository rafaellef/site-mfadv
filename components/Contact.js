import { useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="form" id="contact">
      <h1 data-aos="fade-up">Contato</h1>
      <div className="contact-wrapper" data-aos="fade-up">
        <form className="form-container" action="https://formsubmit.co/rafaellfernan@gmail.com" method="POST">
        <input type="hidden" name="_next" value="http://localhost:3000/thanks" />
        <input type="hidden" name="_autoresponse" value="Obrigado pelo seu e-mail, retornaremos em breve com nossa resposta." />
        <input type="hidden" name="_captcha" value="false" />
          <div className="form-control">
            <input type="text" name="name" placeholder="Nome" required />
          </div>
          <div className="form-control">
            <input type="text" name="subject" placeholder="Assunto" required />
          </div>
          <div className="form-control">
            <input type="number" name="phone" placeholder="Telefone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" required />
          </div>
          <div className="form-control">
            <input type="email" name="email" placeholder="E-mail" required />
          </div>
          <div className="form-control">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Mensagem"
              required
            ></textarea>
          </div>
          <div>
            <input type="submit" value="Enviar" className="send-button" />
          </div>
        </form>
        <div className="contact-list-container">
          <ul className="contact-list">
            <li>
              <AiFillPhone /> (53) 3271-2326 | 09:00 – 18:00
            </li>
            <li>
              <AiOutlineWhatsApp /> +55 53 99910-2011
            </li>
            <li>
              <IoMail /> contato@mariofilho-advogados.adv.br
            </li>
            <li>
              <MdLocationOn /> Rua Visconde de Ouro Preto, 238 Pelotas–RS
            </li>
          </ul>
          <hr />
          <br />
          <div>
            <iframe
              className="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.542960502479!2d-52.31163188499788!3d-31.755673881292353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b561b53d658d%3A0xf401509eff0b5c24!2sMario%20Filho%20Advogados%20Associados!5e0!3m2!1spt-BR!2sbr!4v1645227007587!5m2!1spt-BR!2sbr"
              width="400"
              height="200"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
