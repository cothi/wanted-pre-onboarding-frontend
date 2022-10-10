import styled from 'styled-components'
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import logout from '../utils/logout'
import Avatar from '@mui/material/Avatar'
import { useEffect, useState } from 'react'
import Tooltip from '@mui/material/Tooltip'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 8%;
    width: 100%;
`
const HeaderContent = styled.div`
    width: 80%;
    padding: 4% 0 0 0;
    display: flex;
    justify-content: space-between;
`

const HeaderItem = styled.div`
    display: flex;
    font-size: 40px;
    &:hover {
        cursor: pointer;
    }
`

export default function Header() {
    const nav = useNavigate()
    const [mail, setMail] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            let payload = token.split('.')[1]
            setMail(JSON.parse(atob(payload)).email)
        }
    }, [])
    return (
        <Wrapper>
            <HeaderContent>
                <HeaderItem onClick={() => nav('/')}>
                    <ListAltRoundedIcon sx={{ fontSize: 40 }} />
                    TODO
                </HeaderItem>
                <HeaderItem>
                    {mail ? (
                        <Tooltip title={mail} arrow>
                            <Avatar>{mail.slice(0, 2)}</Avatar>
                        </Tooltip>
                    ) : null}
                    <LogoutIcon
                        sx={{ fontSize: 40, marginLeft: 4 }}
                        onClick={() => logout({ nav: nav })}
                    />
                </HeaderItem>
            </HeaderContent>
        </Wrapper>
    )
}
