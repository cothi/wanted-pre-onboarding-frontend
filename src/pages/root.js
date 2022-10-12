import LoginForm from '../components/signInForm'
import styled from 'styled-components'
import Header from '../components/header'

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
`
const Body = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4%;
    width: 50%;
    height: 50%;
    border: 1px solid #ccc;
    border-radius: 10px;
`

export default function Root() {

    return (
        <Wrapper>
            <Header />
            <Body>
                <FormWrapper>
                    <LoginForm />
                </FormWrapper>
            </Body>
        </Wrapper>
    )
}
