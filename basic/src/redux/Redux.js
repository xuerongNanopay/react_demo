import { Provider, useSelector, useDispatch } from 'react-redux'

export const Redux = () => {
  return (
    <div className="d-flex align-items-start justify-content-center">
      <p className="me-3">This is Redux: State control</p>
      <button type="button" class="btn btn-primary me-4">Primary</button>
      <select class="form-select w-50" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}

