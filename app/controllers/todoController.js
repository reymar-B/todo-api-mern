// @desc    Get todos
// @route   GET /todos
// @access  Private


const getTodos = (req, res) => { 

    res.status( 200 ).json( { a :'list of todos' }) 

}

// @desc    Create todos
// @route   POST /todos
// @access  Private


const createTodos = (req, res) => { 

    res.status( 201 ).json( { a :'create todos' }) 

}

// @desc    Update todos
// @route   Put /todos/:todo_id
// @access  Private


const updateTodos = (req, res) => { 

    res.status( 200 ).json( { a :'update todos' }) 

}

// @desc    Delete todos
// @route   Delete /todos/:todo_id
// @access  Private


const deleteTodos = (req, res) => { 

    res.status( 200 ).json( { a :'delete todos' }) 

}

module.exports = {

    getTodos,
    createTodos,
    updateTodos,
    deleteTodos

}