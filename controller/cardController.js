const db = require('../db') 
class CardController {

async createCardUser(req, res)  {
    const {number, balance, user_id} = req.body
    const newCard = await db.query(`INSERT INTO cards (number, balance, user_id) values ($1, $2, $3) RETURNING *`, [number, balance, user_id]);
    res.json(newCard.rows[0]);
}

async getCardByUser(req, res)  {
    const id = req.query.id
    const cards = await db.query(`select * from cards where user_id = $1`, [id])
    res.json(cards.rows);
}

}


module.exports = new CardController();