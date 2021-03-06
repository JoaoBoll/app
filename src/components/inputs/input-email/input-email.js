import {Col, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import {HiOutlineAtSymbol} from 'react-icons/hi'

function InputEmail(model) {

    return(
        <Row>
            <Col className='mt-1 col-12'>
                <Label>{model.label}</Label>
                <InputGroup>
                    <InputGroupText>
                        <HiOutlineAtSymbol/>
                    </InputGroupText>
                    <Input type="text" name={model.name} placeholder={model.placeholder} value={model.value} onChange={(e)=>model.onChange(e.target.value)}/>
                </InputGroup>
            </Col>       
        </Row>
       
    );
}

export default InputEmail;