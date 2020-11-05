import React, { useState } from 'react';
import {
    Wrapper,
    Modal,
    ModalContent,
    Flex,
    LogoBackground,
    TextWrapper,
    HeaderName,
    InputField,
    ForgotPasswordInputField,
    LoginButton,
    NoAccountText,
    SwitchViewWrapper,
    SwitchViewText,
    ShowPasswordIcon,
    ButtonWrapper,
    CancelButton,
    SendEmailButton,
    ForgotPasswordText
} from './Login.styled';
import logo from '../../../assets/retrieverLogo.png'
import showIcon from '../../../assets/show.png'
import hideIcon from '../../../assets/hide.png'
import firebase from '../../../config/fire.js'
import { useHistory } from 'react-router-dom';

const Login = ({
    setDisplay 
}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [forgotPasswordModal, setForgotPasswordModal] = useState(false)
    const [emailSuccess, setEmailSuccess] = useState(false)

    const history = useHistory()

    async function login() {
        try {
            await firebase.login(email, password)
            history.push('/')
        } catch(error) {
            alert(error.message)
        }
    }

    const getPasswordIcon = () => {
        if(showPassword) {
            return hideIcon
        } else {
            return showIcon
        }
    }

    const showPasswordOnClick = () => {
        setShowPassword(!showPassword)
    }

    const sendForgotPasswordEmail = () => {
        firebase.sendForgotPasswordEmail(email)
        .then((value) => {
            setEmailSuccess(true)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <>
        {forgotPasswordModal && 
                <Modal>
                    <ModalContent>
                        {emailSuccess ? 
                            <Wrapper>
                                <NoAccountText>Please check your email for futher steps.</NoAccountText>
                                <CancelButton onClick={() => setForgotPasswordModal(false)}>CLOSE</CancelButton>
                            </Wrapper>
                            : <>
                                <ForgotPasswordInputField
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <ButtonWrapper>
                                    <CancelButton onClick={() => setForgotPasswordModal(false)}>CANCEL</CancelButton>
                                    <SendEmailButton onClick={sendForgotPasswordEmail}>SEND RESET PASSWORD EMAIL</SendEmailButton>
                                </ButtonWrapper>
                            </>
                        }
                    </ModalContent>
                </Modal>
            }
            <Flex>
                <LogoBackground>
                    <img src={logo} alt="logo" />
                </LogoBackground>
                <TextWrapper>
                    <HeaderName>GIFT RETRIEVER</HeaderName>
                    <InputField
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div>
                        <InputField
                            placeholder="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <ShowPasswordIcon
                            src={getPasswordIcon()}
                            onClick={showPasswordOnClick}
                        />                   
                    </div>
                    <ForgotPasswordText onClick={() => setForgotPasswordModal(true)}>Forgot Password?</ForgotPasswordText>
                    <LoginButton onClick={login}>LOGIN</LoginButton>
                    <NoAccountText>Don't have an account?</NoAccountText>
                    <SwitchViewWrapper onClick={() => setDisplay('signup')}>
                        <SwitchViewText>SIGN UP</SwitchViewText>
                    </SwitchViewWrapper>
                </TextWrapper>
            </Flex>
        </>
    )
}

export default Login