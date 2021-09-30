import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import rutas from "../helpers/rutas"

export default function HomePage(){
    return (
        <Container>
            <Row className="mt-5">
                <Col>
                <p class="p-2 bg-dark text-white"><h5>INGRESO PARA DOCENTES DEL COLEGIO NUEVA GRANADA</h5></p>
               <p>Para ingresar, presiona en el botón de abajo e inicia sesión con los datos que te proporcionaron</p> 
               <div>
                   <Button as={Link} to={rutas.login}>Ingresar</Button>
               </div>
               </Col>
               <Col>
                <img
                    src="/img/task-manager.svg"
                    alt="horario"
                />
               </Col>
            </Row>
        </Container>
    )
}