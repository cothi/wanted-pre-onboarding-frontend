import { TextField, Button } from '@mui/material'
import styled from 'styled-components'
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'
import { Form } from 'react-router-dom'

const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`
const StyledForm = styled(Form)`
    display: flex;
    width: 80%;
    justify-content: 'space-betweet';
`

const StyledTextField = styled(TextField)`
    width: 80%;
`

export default function TodoForm() {
    return (
        <StyledForm method="post">
            <InputWrapper>
                <StyledTextField
                    id="filled-basic"
                    label="todo text line"
                    variant="standard"
                    helperText="input text"
                    name="item"
                />
                <LoadingButton
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    type="submit"
                >
                    Save
                </LoadingButton>
            </InputWrapper>
        </StyledForm>
    )
}
