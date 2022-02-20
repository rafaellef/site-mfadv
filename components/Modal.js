import Image from "next/image";

const Modal = ({ isOpen, close }) => {
  return (
    <>
      {isOpen ? (
        <div className="modal-background">
          <div className="modal-container">
            <Image
              src="/arte/thomson-reuters-logo.png"
              alt="logo-thomson-reuters"
              width={250}
              height={200}
            />
            <h1>Acesso do cliente</h1>
            <form>
              <input type="text" placeholder="Usuário" />
              <input type="password" placeholder="Senha" />
            </form>
            <div>
              <button onClick={close}>Cancelar</button>
              <button>Entrar</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
