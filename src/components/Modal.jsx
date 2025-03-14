function Modal({ t, deleteTitle, setShowModal }) {
  // Modal
  return (
    <div className="modal__box flex flex-col gap-4 rounded-2xl">
      <p className="text-2xl">Do you want to remove {t.title}</p>
      <div className="modal__btn__div flex gap-2">
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
