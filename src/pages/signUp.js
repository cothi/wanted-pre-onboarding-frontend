import { Form, useActionData, useSubmit } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;
    padding: 4%;
    border: 1px solid #ccc;
`

const HeaderForm = styled.h1`
    font-size: 24px;
    bold: 1;
`
const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4% 0 4% 0;
`
const SupportForm = styled.div`
    color: gray;
    font-size: 14px;
    padding: 0 0 3% 0;
`
const InputForm = styled.input`
    height: 20px;
    line-height: 24px;
    font-size: 14px;
    padding: 6px 8px 6px 8px;
    /* border: rgb(255, 0, 0) dashed 1px; */
    border: 1px solid #ccc;
    border-radius: 4px;
`

const Alert = styled.span`
    color: #f94449;
`

export default function SignUp() {
    const errors = useActionData()
    return (
        <Wrapper>
            <FormWrapper>
                <Form method="post">
                    <HeaderForm>Create your Todo Account</HeaderForm>

                    <ContentForm>
                        <InputForm
                            type="email"
                            placeholder="Email"
                            name="email"
                        />
                        <SupportForm>
                            {(errors?.email && (
                                <Alert> {errors.email} </Alert>
                            )) ||
                                "you'll need to confirm that your email belongs to"}
                        </SupportForm>
                        <InputForm
                            type="password"
                            placeholder="Password"
                            name="password"
                        />
                        <SupportForm>
                            {(errors?.password && (
                                <Alert>{errors.password} </Alert>
                            )) ||
                                'Use 8 or more characters with a mix of letters, numbers & symbols'}
                        </SupportForm>
                        {errors?.message && <Alert>{errors.message} </Alert>}
                    </ContentForm>
                    <input type="submit" value="Submit" />
                </Form>
            </FormWrapper>
        </Wrapper>
    )
}
