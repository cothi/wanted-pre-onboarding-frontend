import { TextField, Button } from '@mui/material'
import styled from 'styled-components'
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'
import { Form, useActionData, useSubmit } from 'react-router-dom'
import { useEffect, useState } from 'react'

const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`
const StyledForm = styled.form`
    display: flex;
    width: 80%;
    justify-content: 'space-betweet';
`

const StyledTextField = styled(TextField)`
    width: 80%;
`

export default function TodoForm() {
    const [inputData, setInputData] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    let actionData = useActionData({})
    const submit = useSubmit()
    let formData = new FormData()

    const callAppendAction = () => {
        setIsLoading(true)
        formData.set('item', inputData)
        submit(formData, {
            method: 'post',
            action: '/todo',
        })
        setIsLoading(false)
    }


    return (
        <StyledForm method="post">
            <InputWrapper>
                <StyledTextField
                    error={actionData?.type === 'input' ? true : false}
                    id="filled-basic"
                    label="todo text line"
                    variant="standard"
                    helperText={
                        actionData?.type === 'input'
                            ? actionData.message
                            : 'input text'
                    }
                    onChange={(e) => setInputData(e.target.value)}
                    name="item"
                    sx={{ marginRight: '10px' }}
                />
                <LoadingButton
                    loading={isLoading}
                    onClick={() => {
                        callAppendAction()
                    }}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                >
                    Save
                </LoadingButton>
            </InputWrapper>
        </StyledForm>
    )
}
