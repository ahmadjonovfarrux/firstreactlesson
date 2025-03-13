function Modal({ t, deleteTitle, setShowModal }) {
  return (
    <div className="modal__box ">
      <p>Do you want to remove {t.title}</p>
      <div className="modal__btn__div">
        <button className="btn btn-secondary" onClick={() => deleteTitle(t.id)}>
          Yes
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setShowModal(false)}
        >
          No
        </button>
      </div>
    </div>
  );
}
export default Modal;
