import { IoMdClose } from "react-icons/io";

import { Overlay } from "./styles";
import { ModalProps } from "./types";

const Modal = ({ country, onClose }: ModalProps) => {
  return (
    <Overlay>
      <div className='container'>
        <img
          src={country.flag}
          alt={country.code}
        />
        <h2>{country.name}</h2>
        <div className="grid-desc">
          <div className="desc">
            <h3>Native name</h3>
            <p>{country.native}</p>
            <h3>Capital</h3>
            <p>{country.capital}</p>
          </div>
          <div className="desc">
            <h3>Continent</h3>
            <p>{country.continent.name}</p>
            <h3>Currency</h3>
            <p>{country.currency}</p>
          </div>
        </div>
        <button 
          type='button'
          onClick={onClose}
          aria-label='Close'
        >
          <IoMdClose aria-hidden="true"/>
        </button>
      </div>
    </Overlay>
  )
};

export default Modal;
