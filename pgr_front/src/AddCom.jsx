import React from 'react'

function AddCom() {
  return (
    <div><br />
        <form >
    <div className="row">
      
      <div className="form-group col-12 mt-3">
    <label for="eCom">Write Here</label>
    <textarea className="form-control" id="eCom" rows="3"></textarea>
  </div><br />
  <div className="form-group col-12 mt-3">
        <input type="text" className="form-control" placeholder="Date" />
      </div><br />
      <div className="form-group col-12 mt-3">
        <input type="text" className="form-control" placeholder="Image" />
      </div><br />
      <div className="form-group col-12 mt-3">
        <input type="text" className="form-control" placeholder="Location" />
      </div><br />
    </div>
    <div className="form-group col-12 mt-3">
    <button type="submit" className="btn btn-primary mb-3">Submit</button>
  </div><br />
  </form> </div>
  )
}

export default AddCom