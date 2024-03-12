import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import React from 'react'
import GlobalRulesComp from '../GlobalRulesDisplayComp'
import './index.css'

function RulesModal(props) {
  const {rulesset1, rulesset2} = props

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Rules</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GlobalRulesComp rulesset1={rulesset1} rulesset2={rulesset2} />
      </Modal.Body>
    </Modal>
  )
}

export default RulesModal
