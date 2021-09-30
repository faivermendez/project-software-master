import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import useAuth from "../../auth/useAuth"
import ChangePasswordModal from "./components/ChangePasswordModal";
import DeleteModal from "./components/DeleteModal";

export default function AccountPage() {
    const { user } = useAuth();

    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

    const handleModal = () => setIsOpenDeleteModal(!isOpenDeleteModal);

    const [isOpenChangePasswordModal, setIsOpenChangePasswordModal] = useState(false);
    const handleChangePasswordModal = () =>
        setIsOpenChangePasswordModal(!isOpenChangePasswordModal);

    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col xs={12} className="text-center">
                        <img
                            src="/img/male_avatar.svg"
                            alt="profile"
                            style={{
                                width: '200px',
                                height: '200px'
                            }}
                        />
                    </Col>
                    <Col className="mt-5">
                        <Card style={{ maxWidth: '360px' }} className="mx-auto p-4">
                            <p className="text-center" ><b>Nombre:</b> {user?.nombre} </p>
                            <p className="text-center" ><b>Email:</b> {user?.email} </p>
                            {/* <p className="text-center" ><b>Rol:</b> {user?.rol} </p> */}

                            <Button variant="success" className="mt-3" onClick={handleModal}>
                                Mis Notas
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <DeleteModal
                isOpen={isOpenDeleteModal}
                close={handleModal}
            />
            <ChangePasswordModal
                isOpen={isOpenChangePasswordModal}
                close={handleChangePasswordModal}
            />
            <table class="table table-primary">
  <thead>
    <tr>
      <th scope="col">Hora</th>
      <th scope="col">Lunes</th>
      <th scope="col">Martes</th>
      <th scope="col">Miércoles</th>
      <th scope="col">Jueves</th>
      <th scope="col">Viernes</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">7:00 am</th>
      <td>Sociales</td>
      <td>Matemáticas</td>
      <td>Química</td>
      <td>Biología</td>
      <td>Español</td>
    </tr>
    <tr>
      <th scope="row">8:00 am</th>
      <td>Ed Física</td>
      <td>Biología</td>
      <td>Geometría</td>
      <td>Artes</td>
      <td>Ética</td>
    </tr>
    <tr>
      <th scope="row">9:00 am</th>
      <td>Descanso</td>
      <td>Descanso</td>
      <td>Descanso</td>
      <td>Descanso</td>
      <td>Descanso</td>
    </tr>
    <tr>
      <th scope="row">10:00 am</th>
      <td>Biología</td>
      <td>Matemáticas</td>
      <td>Física</td>
      <td>Constitución</td>
      <td>Contabilidad</td>
    </tr>
    <tr>
      <th scope="row">11:00 am</th>
      <td>Español</td>
      <td>Inglés</td>
      <td>Sociales</td>
      <td>Religión</td>
      <td>Emprendimiento</td>
    </tr>
    <tr>
      <th scope="row">12:00 m</th>
      <td>Matemáticas</td>
      <td>Biología</td>
      <td>Artes</td>
      <td>Ed Física</td>
      <td>Ed Física</td>
    </tr>
  </tbody>
</table>

        </>
    )
}