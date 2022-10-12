import {
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
} from '@mui/material'
import React, { useRef, useState } from 'react'
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
    const inputRef = useRef(null)

    function reviseSetting(id, show) {
        let status = itemStatus
        if (show) {
            status[id] = { status: 'edit' }
            setItemStatus({ ...status })
        } else {
            status[id] = { status: '' }
        }
    }

    const changeText = (id, e) => {
        let tmpItemStatus = itemStatus
        tmpItemStatus[id]['todo'] = e.target.value
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
                                                console.log(inputRef.current)
                                                data.set('id', item.id)
                                                data.set(
                                                    'todo',
                                                    itemStatus[item.id].todo
                                                )
                                                data.set(
                                                    'completed',
                                                    item.isCompleted
                                                )
                                                console.log(item)
                                                submit(data, {
                                                    method: 'PUT',
                                                    action: '/todo',
                                                })
                                                reviseSetting(item.id, false)
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
                                                    reviseSetting(item.id, true)
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
                                        id="filled-basic"
                                        label="Revise todo text"
                                        variant="filled"
                                        onChange={(e) => changeText(item.id, e)}
                                    />
                                ) : (
                                    <ListItemButton role={undefined} dense>
                                        <ListItemIcon>
                                            {item.isCompleted ? (
                                                <Checkbox checked />
                                            ) : (
                                                <Checkbox />
                                            )}
                                        </ListItemIcon>
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
