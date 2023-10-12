const Todo = require('./models/Todo')

module.exports = {
    getTodos: async (request, response) => {
        try {
            const todoItems = await Todo.find();
            const itemsLeft = await Todo.countDocuments({completed: false})
            response.render('todos.ejs', {todos: todoItems, itemsLeft: itemsLeft})
        } catch (error) {
            console.log(error)
        }
    },
    createTodos: async (request, response) => {
        try {
            await Todo.create({todo: request.body.todoItem, completed: false})
            console.log("Todo item has been added.")
            response.redirect('/todos')
        } catch (error) {
            console.log(error)
        }
    },
    markComplete: async (request, response) => {
        try {
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        } catch (error) {
            console.log(error)
        }
    },
    markIncomplete: async (request, response) => {
        try {
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        } catch (error) {
            console.log(error)
        }
    },
    deleteTodos: async (request, response) => {
        try {
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        } catch (error) {
            console.log(error)
        }
    },
}
