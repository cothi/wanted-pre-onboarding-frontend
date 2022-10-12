import { todoApi } from '../api/api'
export default async function todoAction({ request }) {
    let formData = await request.formData()
    // console.log(formData.get('id'))
    const token = localStorage.getItem('token')

    let res, id, item, todo, completed, query
    // let fromData = await request.formData()

    switch (request.method) {
        case 'POST':
            item = formData.get('item')
            query = [item, token]
            res = await todoApi.createTodo({ itemQuery: query })
            return

        case 'DELETE':
            id = formData.get('id')
            query = [id, token]
            res = await todoApi.deleteTodo({ itemQuery: query })
            return res
        case 'PUT':
            todo = formData.get('todo')
            // myBool = Boolean('false')  => true
            completed = 'true' === formData.get('completed')
            id = formData.get('id')
            query = [id, token, todo, completed]

            res = await todoApi.updateTodo({ itemQuery: query })
            return
        default:
            return
    }
}
