import { useRouteError } from 'react-router-dom'
import styledComponents from 'styled-components'

const styled = styledComponents

const Wrapper = styled.div`
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


// error page
export default function ErrorPage() {
    const error = useRouteError()

    return (
        <Wrapper>
            <h1>Oops!</h1>

            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </Wrapper>
    )
}
