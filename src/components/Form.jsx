function GetForm({ handleSubmit, text, setText, error }) {
  return (
    <>
      <form
        className="form max-w-96 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="input"
          onChange={(e) => {
            const inputText = e.target.value;
            setText(inputText);
          }}
          value={text}
          type="text"
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Add
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
}
export default GetForm;
