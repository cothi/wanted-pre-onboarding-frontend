import { Button, TextField } from '@mui/material'
import { Form, useActionData } from 'react-router-dom'
import styled from 'styled-components'

const HeaderForm = styled.h1`
    font-size: 24px;
    bold: 1;
`
const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4% 0 4% 0;
`

const Alert = styled.span`
    color: #f94449;
`


// create form component
export default function CreateForm() {
    const errors = useActionData()
    return (
        <Form method="post">
            <HeaderForm>Create your Todo Account</HeaderForm>

            <ContentForm>
                <TextField
                    error={errors?.email ? true : false}
                    id="standard-basic"
                    type="email"
                    label="email"
                    variant="standard"
                    helperText={
                        (errors?.email && <Alert> {errors.email} </Alert>) ||
                        "you'll need to confirm that your email belongs to"
                    }
                    name="email"
                />
                <TextField
        error={errors?.password ? true : false}
                    id="standard-basic"
                    type="password"
                    name="password"
                    label="password"
                    variant="standard"
                    helperText={
                        (errors?.password && (
                            <Alert>{errors.password} </Alert>
                        )) ||
                        'Use 8 or more characters with a mix of letters, numbers & symbols'
                    }
                />
                {errors?.message && <Alert>{errors.message} </Alert>}
            </ContentForm>
            <Button variant="contained" type="submit">
                sign up
            </Button>
        </Form>
    )
}
