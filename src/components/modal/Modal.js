import Modal from "react-modal";
import { useState } from "react";
import "./modal.scss";

// Инфа, которую надо вставить в модалку принимается в props
//
//   props.content - контент модального окна
//  props.open - кнопка открытия для модалки
//  props.close - кнопка закрытия для модалки

// https://reactcommunity.org/react-modal/styles/transitions/  -  документация modalki

// style пишем стили нашего блока передается из props.style

// Стили записываются так
// content - стиль для тела модалки
// overlay - стиль для окружения: затемнения, заземления и исчезновения   


// const customStyles = {
//   content: {
//     color: "red",
//   },
// };

// Пример того как прокидываем стили и саму модалку
/* <ModalComponent
    open={<>Open</>}
    close={<>Close</>}
    content={<>Lorem, ipsum dolor.</>}
    style={customStyles}
  /> */




function ModalComponent(props) {
  console.log(props.style.content);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>{props.open}</button>
      <Modal
        closeTimeoutMS={500}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: props.style.content,
        }}
      >
        <button onClick={closeModal}>{props.close}</button>
        <div>{props.content}</div>
      </Modal>
    </div>
  );
}

export default ModalComponent;
