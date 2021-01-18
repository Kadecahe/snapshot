import React from 'react'
import {Form} from 'react-bootstrap'

const isPrivate = ({makePrivate, bool}) => {
  return (
    <Form.Group
      controlId="isPrivate"
      onChange={() => makePrivate()}
      className="mb-1 mt-1"
    >
      <Form.Label>Make Private</Form.Label>
      {bool ? (
        <div className="d-flex flex-nowrap justify-items-between m-0 align-items-center">
          <Form.Label className="text-muted">
            Public images can be found by other users
          </Form.Label>
          <Form.Check
            type="checkbox"
            label="Private?"
            name="isPrivate"
            value={bool}
            onChange={makePrivate}
          />
        </div>
      ) : (
        <div className="d-flex flex-nowrap justify-items-between m-0 align-items-center">
          <Form.Label className="text-muted">
            When a picture is set to private, other users won't find it in their
            search
          </Form.Label>
          <Form.Check type="checkbox" label="Private?" name="isPrivate" />
        </div>
      )}
    </Form.Group>
  )
}

export default isPrivate
