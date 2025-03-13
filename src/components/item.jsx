import { useState } from "react";
import Modal from "./Modal";

function Item({ t, deleteTitle }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <Modal deleteTitle={deleteTitle} setShowModal={setShowModal} t={t} />
      )}

      <li className="max-w-96 flex items-center place-content-between">
        <p className="font-bold text-lg">{t.title}</p>
        <button
          className="btn btn-secondary"
          onClick={() => setShowModal(true)}
        >
          Delete
        </button>
      </li>
    </>
  );
}

export default Item;
