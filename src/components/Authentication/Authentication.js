import React, { useEffect, useState } from 'react';
import {
    ApiButton,
    CompanyName,
    FormHeader,
    FormWrapper,
    Logo,
    LogoBackground,
    SendEmailText,
    StyledInput,
    StyledLabel,
    SwitchViewLink,
    SwitchViewText,
    TextWrapper,
    WarningText,
    Wrapper
} from './Authentication.styled';
import logo from '../../assets/retrieverLogo.png'
import firebase from '../../config/fire.js'
import { useHistory } from 'react-router-dom';

const Authentication = ({ setShowNavBar }) => {

    useEffect(() => {
        setShowNavBar(false)
    }, [setShowNavBar])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [formHeader, setFormHeader] = useState('LOGIN')
    const [switchViewText, setSwitchViewText] = useState("Don't have an account?")
    const [switchViewLink, setSwitchViewLink] = useState("SIGN UP NOW")
    const [currentView, setCurrentView] = useState('login')
    const [disableApiButton, setDisableApiButton] = useState(true)
    const [sendEmailText, setSendEmailText] = useState('Send forgot password to email above →')
    const [emailSuccess, setEmailSuccess] = useState(false)

    const history = useHistory()

    useEffect(() => {
        if(currentView === 'login') {
            if(email === '' || password === '') {
                setDisableApiButton(true)
            } else {
                setDisableApiButton(false)
            }
        } else {
            if(email === '' || password === '' || confirmPassword === '' || displayName === ''
                || password !== confirmPassword || password.length < 6) {
                setDisableApiButton(true)
            } else {
                setDisableApiButton(false)
            } 
        }
    }, [email, password, confirmPassword, displayName, currentView])

    async function login() {
        try {
            await firebase.login(email, password)
            history.push('/')
        } catch(error) {
            alert(error.message)
        }
    }

    async function register() {
        try {
            await firebase.register(displayName, email, password)
            firebase.login(email, password)
            history.push('/')
        } catch(error) {
            alert(error.message)
        }
    }

    const sendForgotPasswordEmail = () => {
        if(email === '' || emailSuccess) {
            return
        } else {
            firebase.sendForgotPasswordEmail(email)
            .then((value) => {
                setEmailSuccess(true)
                setSendEmailText('Forgot password email sent!')
            })
            .catch((error) => {
                alert(error.message)
            })
        }
    }

    function switchView() {
        if(currentView === 'login') {
            setCurrentView('signUp')
            setSwitchViewText('Already have an account?')
            setSwitchViewLink('LOGIN')
            setFormHeader('SIGN UP')
        } else {
            setCurrentView('login')
            setSwitchViewText("Don't have an account?")
            setSwitchViewLink('SIGN UP NOW')
            setFormHeader('LOGIN')
        }
    }

    function apiButtonOnClick() {
        if(currentView === 'login') {
            login()
        } else {
            register(0)
        }
    }

    return (
        <Wrapper>
            <LogoBackground>
                 <Logo src={logo} alt="logo" />
             </LogoBackground>
             <TextWrapper>
                 <CompanyName>GIFT RETRIEVER</CompanyName>
                 <FormWrapper>
                     <FormHeader>{formHeader}</FormHeader>
                    <div>
                        <StyledInput
                            hasValue={email !== ''}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <StyledLabel hasValue={email !== ''}>Email</StyledLabel> 
                    </div>
                    <div>
                        <StyledInput
                            hasValue={password !== ''}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            value={password}
                        />
                        <StyledLabel hasValue={password !== ''}>Password</StyledLabel> 
                    </div>
                    { currentView === 'signUp' &&
                        <div>
                            <StyledInput
                                hasValue={confirmPassword !== ''}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                value={confirmPassword}
                            />
                            <StyledLabel hasValue={confirmPassword !== ''}>Confirm password</StyledLabel> 
                        </div>
                    }
                    { currentView === 'signUp' &&
                        <div>
                            <StyledInput
                                hasValue={displayName !== ''}
                                onChange={(e) => setDisplayName(e.target.value)}
                                value={displayName}
                            />
                            <StyledLabel hasValue={displayName !== ''}>Display name</StyledLabel> 
                        </div>
                    }
                    <SendEmailText
                        emailSuccess={emailSuccess}
                        onClick={sendForgotPasswordEmail}
                    >{sendEmailText}</SendEmailText>
                    <ApiButton
                        disabled={disableApiButton}
                        onClick={apiButtonOnClick}
                    >{formHeader}</ApiButton>
                    {currentView === 'signUp' && password.length < 6 && <WarningText>Password must be at least 6 characters long</WarningText>}
                    {password !== confirmPassword && <WarningText>Passwords must match</WarningText>}
                    <SwitchViewText>{switchViewText}</SwitchViewText>
                    <SwitchViewLink onClick={switchView}>{switchViewLink}</SwitchViewLink>
                 </FormWrapper>
             </TextWrapper>
        </Wrapper>
    )
}

export default Authentication