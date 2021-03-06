import {Modal, Alert, Button} from 'react-bootstrap'
import useAuth from '../../../auth/useAuth'

export default function DeleteModal( {isOpen, close}){

    const {logout} = useAuth()

    const handleDelete = () => {  
        //peticion
        /* close() */
        logout();
    }

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header >
                <Modal.Title>Mis Notas</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant="primary"> 
                
                <table class="table table-primary">
  <thead>
    <tr>
      <th scope="col">Materia</th>
      <th scope="col">Periodo 1</th>
      <th scope="col">Periodo 2</th>
      <th scope="col">Periodo 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Español</th>
      <td>3.5</td>
      <td>3.7</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th scope="row">Matemáticas</th>
      <td>4.0</td>
      <td>3.3</td>
      <td>4.3</td>
    </tr>
    <tr>
      <th scope="row">Sociales</th>
      <td>4.3</td>
      <td>3.2</td>
      <td>3.4</td>
    </tr>
    <tr>
      <th scope="row">Biología</th>
      <td>4.0</td>
      <td>4.2</td>
      <td>3.4</td>
    </tr>
    <tr>
      <th scope="row">Física</th>
      <td>3.3</td>
      <td>4.2</td>
      <td>4.4</td>
    </tr>
    <tr>
      <th scope="row">Química</th>
      <td>4.3</td>
      <td>3.2</td>
      <td>3.6</td>
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