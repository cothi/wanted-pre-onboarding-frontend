import { Form } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;
    padding: 4%;
    border: 1px solid #ccc;
`

export default function Root() {
    return (
        <Wrapper>
            <Form method="post">
                <label>
                    Name: <input type="text" name="name" />
                </label>
                <label>
                    Name: <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </Form>
        </Wrapper>
    )
}
