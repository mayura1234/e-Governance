import React from 'react'

function AddCom() {
  return (
    <div><br />
        <form>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder=" Name" />
      </div>
      <div class="form-group">
    <label for="eCom">Complaints</label>
    <textarea class="form-control" id="eCom" rows="3"></textarea>
  </div>
    </div>
  </form> </div>
  )
}

export default AddCom