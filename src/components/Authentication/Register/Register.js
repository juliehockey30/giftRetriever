import React, { useState } from 'react';
import {
    Flex,
    Background,
    LogoBackground,
    InputWrapper,
    InputColumn,
    HeaderName,
    InputField,
    LoginButton,
    NoAccountText,
    SwitchViewWrapper,
    SwitchViewText,
    ShowPasswordIcon,
    HelperText
} from './Register.styled';
import logo from '../../../assets/retrieverLogo.png'
import showIcon from '../../../assets/show.png'
import hideIcon from '../../../assets/hide.png'
import firebase from '../../../config/fire.js'
import { useHistory } from 'react-router-dom';

const Register = ({
    setDisplay 
}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [groupCode, setGroupCode] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const history = useHistory()

    async function register() {
        const userName= email.substr(0, email.indexOf('@'));
        try {
            await firebase.register(displayName, groupCode, email, password)
            await firebase.addUserToGroup(groupCode, userName, displayName)
            firebase.login(email, password)
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

    return (
        <Flex>
            <LogoBackground>
                <img src={logo} alt="logo" />
            </LogoBackground>
            <Background>
                <HeaderName>GIFT RETRIEVER</HeaderName>
                <InputWrapper>
                    <InputColumn>
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
                        <HelperText includeMargin={true} >Password must be at least 6 characters long</HelperText>
                    </InputColumn>
                    <InputColumn>
                        <InputField
                            placeholder="Display Name"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                        />
                        <InputField
                            placeholder="Group Code" 
                            value={groupCode}
                            onChange={(e) => setGroupCode(e.target.value)}
                        />
                        <HelperText includeMargin={false} >NOTE: You must enter your group code EXACTLY as it was sent to you (including capitalization).</HelperText>
                        <HelperText includeMargin={true} >Not matching group code identically will result in your creating a new group.</HelperText>
                    </InputColumn>
                </InputWrapper>
                <LoginButton onClick={register}>REGISTER</LoginButton>
                <NoAccountText>Already have an account?</NoAccountText>
                <SwitchViewWrapper onClick={() => setDisplay('login')}>
                    <SwitchViewText>LOGIN</SwitchViewText>
                </SwitchViewWrapper>
            </Background>
        </Flex>
    )
}

export default Register