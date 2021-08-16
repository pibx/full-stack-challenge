import * as fs from 'fs'
import * as path from 'path'

import * as csv from 'fast-csv'

import { Listing } from '@full-stack-challenge/common'

import { transformListing } from './transform'

const dir = './data'
const filename = 'redfin_2021-08-12-13-57-17.csv'

export const parse = () =>
  new Promise<Listing[]>((resolve, reject) => {
    const listingArray: Listing[] = []
    let failed: unknown = null

    fs.createReadStream(path.resolve(dir, filename))
      .pipe(csv.parse({ headers: true }))
      .on('error', error => {
        console.error(error)
        failed = error
      })
      .on('data', (row: any) => {
        listingArray.push(transformListing(row as Record<string, any>))
      })
      .on('end', () => {
        if (!failed) {
          resolve(listingArray)
        } else {
          reject(failed)
        }
      })
  })
