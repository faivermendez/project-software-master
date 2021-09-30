import {Modal, Alert, Button} from 'react-bootstrap'
import useAuth from '../../../auth/useAuth'

export default function Modal( {isOpen, close}){

    const {logout} = useAuth()

    const handleDelete = () => {  
        //peticion
        /* close() */
        logout();
    }

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Semanal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant="primary"> 
                
                <table class="table table-primary">
  <thead>
    <tr>
      <th scope="col">Día</th>
      <th scope="col">Hora</th>
      <th scope="col">Grado</th>
      <th scope="col">Materia</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">lunes</th>
      <td>7:00 am</td>
      <td>803</td>
      <td>Sociales</td>
    </tr>
    <tr>
      <th scope="row">martes</th>
      <td>9:00 am</td>
      <td>1101</td>
      <td>Biología</td>
    </tr>
    <tr>
      <th scope="row">jueves</th>
      <td>2:00 pm</td>
      <td>1101</td>
      <td>Sociales</td>
    </tr>
  </tbody>
</table>

                
                
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={close}>Volver</Button>
                
            </Modal.Footer>
        </Modal>
    )
}