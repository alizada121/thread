import React from 'react'

function ConfirmationModal(props) {
  return (
    <div>
        <h1>Are you sure?</h1>
        <button onClick={props.onClick1} >Yes</button>
        <button onClick={props.OnClick2}>Go back to form</button>
    </div>
  )
}

export default ConfirmationModal