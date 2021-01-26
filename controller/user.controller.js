const db = require('../db') 

class UserController {
    async createUser (req, res) {
        try {
            let {name, surname} = req.body
            let newPerson = await db.query(`INSERT INTO persons (name, surname) values ($1, $2) RETURNING *`, [name, surname]);
            res.json(newPerson.rows[0])
        }
        catch (e) {
            console.log('ERROR: ', e);
            res.json('failed');
        }
        
    }

    async GetUser (req, res) {
        const users = await db.query('SELECT * FROM persons')
        res.json(users.rows)
    }

    async getOneUser (req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM persons where id = $1', [id])
        res.json(user.rows[0])
    }

    async updateUser (req, res) {
        const {id, name, surname} = req.body
        console.log(req.body);
        const user = await db.query('UPDATE persons SET name = $1, surname = $2 where id = $3 RETURNING *', [name, surname, id])
        res.json(user.rows[0])
    }

    async deleteUser (req, res) {
      const id = req.params.id
      const user = await db.query('DELETE FROM persons where id = $1', [id])
      res.json(user.rows[0])
    }
}

module.exports = new UserController()