import {
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    TextField,
} from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete'
import BuildIcon from '@mui/icons-material/Build'
import { useSubmit } from 'react-router-dom'
import SaveAsIcon from '@mui/icons-material/SaveAs'

/*
 * c r u d
 *
 */
/* const DeleteForm = styled(Form)`
    display: inline-block;
`
 */

const StyledTextField = styled(TextField)`
    width: 98%;
`
export default function TodoList({ items }) {
    const [itemStatus, setItemStatus] = useState({})
    let submit = useSubmit()
    let data = new FormData()

    const editShow = (id, show) => {
        let status = itemStatus

        if (show) {
            status[id] = { ...status, status: 'edit' }
            setItemStatus({ ...status })
            return
        }
        if (!status[id]?.todo) {
            let error = {
                type: 'input-update',
                message: 'todo should not be empty',
                id: id,
            }
            status[id] = {
                ...status[id],
                error: error,
            }
        } else {
            status[id] = { ...status, status: '' }
        }
        setItemStatus({ ...status })
    }

    const callActionUpdate = (id, todo, isCompleted) => {
        let tmpItemStatus = itemStatus
        tmpItemStatus[id] = { ...tmpItemStatus[id], isCompleted: isCompleted }
        data.set('id', id)
        data.set('todo', todo)
        data.set('completed', isCompleted)
        submit(data, {
            method: 'PUT',
            action: '/todo',
        })
        setItemStatus(tmpItemStatus)
    }
    const changeText = (id, e) => {
        let tmpItemStatus = itemStatus
        tmpItemStatus[id] = {
            todo: e.target.value,
        }
        setItemStatus(tmpItemStatus)
    }

    return React.useMemo(() => {
        {
            return (
                <List
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                    }}
                >
                    {items.map((item) => {
                        const labelId = `checkbox-list-label-${item.id}`

                        return (
                            <ListItem
                                key={item.id}
                                secondaryAction={
                                    itemStatus[item.id]?.status === 'edit' ? (
                                        <IconButton
                                            onClick={() => {
                                                callActionUpdate(
                                                    item.id,
                                                    itemStatus[item.id].todo,
                                                    item.isCompleted
                                                )
                                                editShow(item.id, false)
                                            }}
                                        >
                                            <SaveAsIcon />
                                        </IconButton>
                                    ) : (
                                        <>
                                            <IconButton
                                                edge="end"
                                                aria-label="comments"
                                                type="submit"
                                                onClick={() => {
                                                    data.set('id', item.id)
                                                    submit(data, {
                                                        method: 'delete',
                                                        action: '/todo',
                                                    })
                                                }}
                                            >
                                                <DeleteIcon />
                                            </IconButton>

                                            <IconButton
                                                onClick={() =>
                                                    editShow(item.id, true)
                                                }
                                            >
                                                <BuildIcon />
                                            </IconButton>
                                        </>
                                    )
                                }
                                sx={{ width: '100%' }}
                            >
                                {itemStatus[item.id]?.status === 'edit' ? (
                                    <StyledTextField
                                        error={
                                            itemStatus[item.id]?.error?.type ===
                                                'input-update' &&
                                            itemStatus[item.id]?.error?.id ===
                                                item.id
                                                ? true
                                                : false
                                        }
                                        id="filled-basic"
                                        label="Revise todo text"
                                        variant="filled"
                                        helperText={
                                            itemStatus[item.id]?.error?.type ===
                                                'input-update' &&
                                            itemStatus[item.id]?.error?.id ===
                                                item.id
                                                ? itemStatus[item.id]?.error
                                                      ?.message
                                                : null
                                        }
                                        onChange={(e) => changeText(item.id, e)}
                                    />
                                ) : (
                                    <ListItemButton
                                        role={undefined}
                                        dense
                                        onClick={() => {
                                            callActionUpdate(
                                                item.id,
                                                item.todo,
                                                !item.isCompleted
                                            )
                                        }}
                                    >
                                        <Checkbox checked={item.isCompleted} />
                                        <ListItemText
                                            id={labelId}
                                            primary={item.todo}
                                        />
                                    </ListItemButton>
                                )}
                            </ListItem>
                        )
                    })}
                </List>
            )
        }
    }, [items, itemStatus])
}
