import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const tables = await knex('transactions').where('amount', 1000).select('*')

    return tables
  })
}
