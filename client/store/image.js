import axios from 'axios'

const SET_IMAGES = 'SET_IMAGES'
const REMOVE_IMAGES = 'REMOVE_IMAGES'

const setImages = images => ({
  type: SET_IMAGES,
  images
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
  } catch (err) {
    console.error(err)
  }
}

let defaultImages = []

export default function(state = defaultImages, action) {
  switch (action.type) {
    case SET_IMAGES:
      return action.images
    case REMOVE_IMAGES:
      return defaultImages
    default:
      return state
  }
}
