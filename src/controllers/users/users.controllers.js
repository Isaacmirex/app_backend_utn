import {client} from '../../database/database.js';

// Users CRUD 
const getUsers = async (req, res) => {
    try {
        const response = await client.query('select*from users;');
        if (response === undefined) {
            res.status(404).json({
                error: null,
                users: "Users not found!"
            })
        }
        else {
            res.status(200).json(response.rows)
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
            users: null
        })
    }
}

export {
    getUsers
}