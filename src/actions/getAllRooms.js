import { GET_ALL_ROOMS } from './types'

export default function getAllRooms() {
  return dispatch => {
    fetch('http://192.168.5.194:3000/api/v1/rooms/')
      .then(r => r.json())
      .then(res => {
        dispatch(getAllRoomsAsync({rooms: res}))
    })
  }
}

const getAllRoomsAsync = (rooms) => {
  return {
    type: GET_ALL_ROOMS,
    payload: rooms.rooms
  }
}
