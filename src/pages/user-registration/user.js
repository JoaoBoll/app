import { useState } from "react";
import { Col, Form, FormGroup, Input, Row } from "reactstrap";
import InputText from "../../components/inputs/input-text/input-text";

function User() {

    const [deliveryman, setDeliveryman] = useState();

    return(
        <FormGroup>
           <Form>
                <Row>
                    <Col>
                        <Input></Input>
                    </Col>
                </Row>
            </Form> 
        </FormGroup>
    )
}

export default User;