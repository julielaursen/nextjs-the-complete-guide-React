function Backdrop(props) {
  function cancelHandler() {
    props.onCancel()
  }

  return <div className="backdrop" onClick={cancelHandler}></div>
}

export default Backdrop
