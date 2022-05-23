import { useState } from 'react';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import InputText from '../../components/inputs/input-text/input-text';

function Company() {

    const [company, setCompany] = useState();

    return(
        <Container>
            <Form>
                <Row>
                    <Col lg="6">
                        <InputText name="Company" value={company} label="Nome Fantasia" onChange={setCompany}/>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Company;