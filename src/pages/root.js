import { Button, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { Form, redirect, useActionData, useNavigate } from 'react-router-dom'
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

const Alert = styled.span`
    color: #f94449;
`

export default function Root() {
    const errors = useActionData()
    const nav = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            nav('/todo')
        }
    }, [])
    return (
        <Wrapper>
            <FormWrapper>
                <Form method="post">
                    <HeaderForm>Login</HeaderForm>

                    <ContentForm>
                        <TextField
                            id="standard-basic"
                            type="email"
                            label="email"
                            variant="standard"
                            helperText={
                                (errors?.email && (
                                    <Alert> {errors.email} </Alert>
                                )) ||
                                "you'll need to confirm that your email belongs to"
                            }
                            name="email"
                        />
                        <TextField
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
                        sign in
                    </Button>
                </Form>
            </FormWrapper>
        </Wrapper>
    )
}
