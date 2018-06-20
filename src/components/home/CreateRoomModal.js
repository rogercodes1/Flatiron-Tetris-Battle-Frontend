import React from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import setNewRoom from '../../actions/setNewRoom'
import createRoom from '../../actions/createRoom'

const CreateRoomModal = (props) => {
  return (
    <Modal trigger={<Button primary>Create a Room</Button>}>
      <Modal.Header>Create a Room</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={(e) => onCreateRoom(e, props.socket)}>
            <Form.Field>
              <label>Room Name</label>
              <input onChange={props.setNewRoom} />
            </Form.Field>
            <Button primary type='submit'>Create</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

const onCreateRoom = (e, socket) => {
  socket.send(JSON.stringify({
    subscription: 'room',
    type: 'CREATE',
    user: localStorage.userId,
    payload: {
      name: e.target.querySelector('input').value
    }
  }))
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    setNewRoom,
    createRoom: (name) => createRoom(name)
  }, dispatch)
}


export default connect(null, mapDispatchToProps)(CreateRoomModal)
