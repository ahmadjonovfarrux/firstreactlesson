import { useState } from "react";
import Modal from "./Modal";
import { MdDelete } from "react-icons/md";

function Item({ t, deleteTitle }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <Modal deleteTitle={deleteTitle} setShowModal={setShowModal} t={t} />
      )}

      <li className="max-w-96 flex items-center place-content-between gap-10 mb-2">
        <p className="font-bold text-lg">{t.title}</p>
        <button
          className="btn btn-secondary"
          onClick={() => setShowModal(true)}
        >
          <MdDelete />
        </button>
      </li>
    </>
  );
}

export default Item;
