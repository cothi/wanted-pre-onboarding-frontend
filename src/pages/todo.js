import React from 'react'
import { useLoaderData } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/header'
import TodoForm from '../components/todoForm'
import TodoList from '../components/todoList'
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`
const Body = styled.div`
    display: flex;
    direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

const TodosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 70%;
    border-radius: 10px;
`

export default function Todo() {
    const items = useLoaderData()

    return (
        <Wrapper>
            <Header></Header>
            <Body>
                <TodosWrapper>
                    <TodoForm />
                    <TodoList items={items} />
                </TodosWrapper>
            </Body>
        </Wrapper>
    )
}
