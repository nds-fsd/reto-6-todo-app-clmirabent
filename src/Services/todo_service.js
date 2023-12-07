
class TodoService {
    baseUrl = "http://localhost:3000/todo/"

    async getTodos() {
        try {
            const response = await fetch(this.baseUrl);
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    async getTodoById(todoID) {
        try {
            const response = await fetch(this.baseUrl + `${todoID}`);
            return response;
        } catch (error) {
            console.log(error)
        }

    }

    async createTodo(text, date, isDone) {
        try {
            var body = {
                text: text,
                fecha: date,
                done: isDone,
            }
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            return response;

        } catch (error) {
            console.log(error);
        }
    }

    async updateTodo(id, text, date, isDone) {
        try {
            const response = await fetch(this.baseUrl + `${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: text,
                    fecha: date,
                    done: isDone,
                })
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }


    async removeById(todoID) {
        try {
            const response = await fetch(this.baseUrl + `${todoID}`, {
                method: 'DELETE',
            })
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

const instance = new TodoService();

export default instance;