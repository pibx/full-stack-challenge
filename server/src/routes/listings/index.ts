import { Router, Request, Response } from 'express'

import { parse } from './parse'
import { filter } from './filter'

const router = Router()

interface ListingsParams {
  searchStr: string
}

router.get(
  '/listings',
  async (req: Request<{}, {}, {}, ListingsParams>, res: Response) => {
    const { searchStr } = req.query
    if (searchStr) {
      try {
        const allResults = await parse()
        const filteredResults = filter(allResults, searchStr)

        res.status(201).send({
          status: 'success',
          data: filteredResults
        })
      } catch (error) {
        res.status(500).send({
          status: 'error',
          error: error.message
        })
      }
    } else {
      res.status(400).send({
        status: 'error',
        error:
          'Invalid request. No value was sent for the required query parameter `searchStr`.'
      })
    }
  }
)

export { router }
