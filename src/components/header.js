import styled from 'styled-components'
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import logout from '../utils/logout'

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
    font-size: 40px;
    &:hover {
        cursor: pointer;
    }
`

export default function Header() {
    const nav = useNavigate()
    return (
        <Wrapper>
            <HeaderContent>
                <HeaderItem onClick={() => nav('/')}>
                    <ListAltRoundedIcon sx={{ fontSize: 40 }} />
                    TODO
                </HeaderItem>
                <HeaderItem>
                    <LogoutIcon
                        sx={{ fontSize: 40 }}
                        onClick={() => logout({ nav: nav })}
                    />
                </HeaderItem>
            </HeaderContent>
        </Wrapper>
    )
}
