function Modal({ t, setShowModal, deleteTitle }) {
  return (
    <div className="modal">
      <p>Do you want to remove {t.title}</p>
      <div className="modal__btn__div">
        <button onClick={() => deleteTitle(t.id)}>Yes</button>
        <button onClick={() => setShowModal(false)}>No</button>
      </div>
    </div>
  );
}
export default Modal;
