import axios from 'axios'
import history from '../history'

const SET_IMAGES = 'SET_IMAGES'
const REMOVE_IMAGES = 'REMOVE_IMAGES'
const DELETE_IMAGE = 'DELETE_IMAGE '

const setImages = images => ({
  type: SET_IMAGES,
  images
})

const removeImage = id => ({
  type: DELETE_IMAGE,
  id
})

const removeAllImages = () => ({
  type: REMOVE_IMAGES
})

export const fetchImages = () => async dispatch => {
  try {
    let {data} = await axios.get(`api/images`)
    dispatch(setImages(data))
  } catch (err) {
    console.error(err)
  }
}

export const uploadSingleImage = imageObj => async dispatch => {
  try {
    let res = await axios.post('api/images/single', imageObj)
    dispatch({type: 'done'})
    history.push('/home')
  } catch (err) {
    console.error(err)
  }
}

export const deleteImage = id => async dispatch => {
  try {
    await axios.delete(`api/images/single/${id}`)
    dispatch(removeImage(id))
  } catch (err) {
    console.error(err)
  }
}

export const removeAll = () => async dispatch => {
  try {
    console.log('in thunk')
    await axios.delete(`api/images/all`)
    dispatch(removeAllImages())
  } catch (err) {
    console.error(err)
  }
}
let defaultImages = []

export default function(state = defaultImages, action) {
  switch (action.type) {
    case SET_IMAGES:
      return action.images
    case DELETE_IMAGE:
      let newImages = state.filter(pic => pic.id !== action.id)
      return newImages
    case REMOVE_IMAGES:
      return defaultImages
    default:
      return state
  }
}
