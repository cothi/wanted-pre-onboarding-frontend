import axios from 'axios'
import { todoApi } from '../api/api'
export default async function todoAction({ request }) {
    let formData = await request.formData()
    const token = localStorage.getItem('token')
    let res, id, item, todo, completed, query
    let errors = {}
    // let fromData = await request.formData()

    switch (request.method) {
        case 'POST':
            item = formData.get('item')
            if (!item) {
                errors.type = 'input'
                errors.message = 'todo should not be empty'
                return errors
            }
            query = [item, token]
            res = await todoApi.createTodo({ itemQuery: query })
            break

        case 'DELETE':
            id = formData.get('id')
            /*             if (!id) {
                errors.type = 'id'
                errors.message = `don't exist id value`
            } */
            query = [id, token]
            res = await todoApi.deleteTodo({ itemQuery: query })
            break
        case 'PUT':
            todo = formData.get('todo')
            id = formData.get('id')
            // myBool = Boolean('false')  => true
            completed = 'true' === formData.get('completed')
            query = [id, token, todo, completed]
            if (todo === 'undefined') {
                errors.type = 'input-update'
                errors.message = 'todo should not be empty'
                errors.id = id
                return errors
            }
            res = await todoApi.updateTodo({ itemQuery: query })
            break
        default:
            errors.type = 'method'
            errors.message = `don't exist method type`
            return errors
    }

    if (axios.isAxiosError(res)) {
        errors.type = 'res'
        errors.message = res.response.data.message
        return errors
    }

    return
}
