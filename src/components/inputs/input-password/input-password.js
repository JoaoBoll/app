import {Col, Input, InputGroup, Label, Row, InputGroupText} from 'reactstrap';
import { HiOutlineLockClosed } from "react-icons/hi";

import './input-password.css'

function InputPassword(model) {

    return(
        <Row>
            <Col className='mt-1 col-12'>
                <Label>{model.label}</Label>
                <InputGroup>
                    <InputGroupText className=''>
                        <HiOutlineLockClosed/>
                    </InputGroupText>
                    <Input type="password" name={model.name} placeholder={model.placeholder} value={model.value} onChange={(e)=>model.onChange(e.target.value)}/>
                </InputGroup>
            </Col>       
        </Row>
    );
}

export default InputPassword;