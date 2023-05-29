function Modal(props) {
  function cancelHandler() {
    console.log('click cancel')
    props.onCancel()
  }

  function confirmHandler() {
    console.log('click confirm')
    props.onConfirm()
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  )
}

export default Modal
