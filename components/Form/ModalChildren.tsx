"use client"

const ModalChildren = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div className={"flex items-center text-2xl"}>
      <h2 className={"p-2"}>Employee created!</h2>
      <button
        className={'p-2'}
        onClick={handleClose}
        aria-label="Close"
        type="button">X</button>
    </div>
  );
}

export default ModalChildren