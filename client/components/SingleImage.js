import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {deleteImage} from '../store/image'

const SingleImage = ({picture, deleteImage}) => {
  function handleDelete(id) {
    deleteImage(id)
  }
  return (
    <Card key={picture.id} className="picture-card m-2 border-white" bg="white">
      <Card.Img src={picture.imageUpload} className="picture-image rounded" />
      <Card.Title className="m-1">{picture.title}</Card.Title>
      <Card.Text>
        {picture.tags.map((elem, i) => (
          <span key={i}>
            {`#${elem}`}
            {'  '}
          </span>
        ))}
      </Card.Text>
      <div>
        <Button variant="danger" onClick={() => handleDelete(picture.id)}>
          Delete
        </Button>
      </div>
    </Card>
  )
}

const mapDispatch = dispatch => ({
  deleteImage: id => dispatch(deleteImage(id))
})

export default connect(null, mapDispatch)(SingleImage)
