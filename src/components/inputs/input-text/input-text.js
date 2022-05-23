import { Col, Input, InputGroup, Label, Row } from 'reactstrap'

import '../input-text/input-text.css'

function InputText(model) {

    return(
        <Row>
            <Col>
                <span>{model.label}</span>
                <InputGroup size="sm">
                    <Input type="text" name={model.name} placeholder={model.placeholder} value={model.value} onChange={(e)=>model.onChange(e.target.value)}/>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default InputText;