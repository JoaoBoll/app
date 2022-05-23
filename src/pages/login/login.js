import {useState} from 'react';
import {FormGroup, Row, Col, Label} from 'reactstrap';

import './login.css';
import InputEmail from '../../components/inputs/input-email/input-email.js';
import InputPassword from '../../components/inputs/input-password/input-password.js';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <form class='center'>
            <Row>
                <Label className='mb-5 login'>Login</Label>
            </Row>
            <Row>
                <Col sm='12' id='large'>
                    <InputEmail value={email} name='email' onChange={setEmail} label='E-mail:'/>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col sm='12'>
                    <InputPassword value={senha} name='senha' onChange={setSenha} label='Senha:'/>
                </Col>
            </Row>
        </form>
    )
}

export default Login;