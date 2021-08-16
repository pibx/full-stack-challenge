import { camelCase, startCase, toLower } from 'lodash'
import * as t from 'io-ts'

import { ListingC, decode } from '@full-stack-challenge/common'

export const transformListing = (row: Record<string, any>) => {
  return decode(
    ListingC,
    Object.entries(transformManualFields(row)).reduce<Record<string, any>>(
      (newListing, [key, value]) => {
        const newKey = camelCase(key)
        const mergedProps = {
          ...ListingC.types[0].props,
          ...ListingC.types[1].props
        }
        const propCodec = mergedProps[newKey as keyof typeof mergedProps]
        if (propCodec._tag === t.number._tag) {
          if (value === '') {
            newListing[newKey] = 0
          } else {
            newListing[newKey] = Number(value)
          }
        } else if (propCodec._tag === t.boolean._tag) {
          newListing[newKey] = Boolean(value)
        } else {
          // it's gotta be a string
          if (value !== '') {
            newListing[newKey] = String(value)
          }
        }
        return newListing
      },
      {}
    )
  )
}

const PRICE_SQ_FT_KEY = '$/SQUARE FEET'
const HOA_KEY = 'HOA/MONTH'
const URL_KEY =
  'URL (SEE http://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)'
const STATUS_KEY = 'STATUS'
const STATUS_TRUE = 'Active'
const REGION_KEY = 'STATE OR PROVINCE'
const MUNICIPALITY_KEY = 'CITY'
const NEIGHBORHOOD_KEY = 'LOCATION'
const POSTAL_CODE_KEY = 'ZIP OR POSTAL CODE'
const FAVORITE_KEY = 'FAVORITE'
const INTERESTED_KEY = 'INTERESTED'
const FAVORITE_INTERESTED_TRUE = 'Y'
const transformManualFields = (row: Record<string, any>) => {
  const newRow = { ...row }
  newRow.pricePerSquareFoot = newRow[PRICE_SQ_FT_KEY]
  delete newRow[PRICE_SQ_FT_KEY]
  newRow.hoaMonthlyFee = newRow[HOA_KEY]
  delete newRow[HOA_KEY]
  newRow.url = newRow[URL_KEY]
  delete newRow[URL_KEY]
  newRow.status = newRow[STATUS_KEY] === STATUS_TRUE ? true : false
  delete newRow[STATUS_KEY]
  newRow.region = newRow[REGION_KEY]
  delete newRow[REGION_KEY]
  newRow.municipality = titleCase(newRow[MUNICIPALITY_KEY])
  delete newRow[MUNICIPALITY_KEY]
  newRow.neighborhood = titleCase(newRow[NEIGHBORHOOD_KEY])
  delete newRow[NEIGHBORHOOD_KEY]
  newRow.postalCode = newRow[POSTAL_CODE_KEY]
  delete newRow[POSTAL_CODE_KEY]
  newRow.favorite =
    newRow[FAVORITE_KEY] === FAVORITE_INTERESTED_TRUE ? true : false
  delete newRow[FAVORITE_KEY]
  newRow.interested =
    newRow[INTERESTED_KEY] === FAVORITE_INTERESTED_TRUE ? true : false
  return newRow
}

const titleCase = (str: string) => startCase(toLower(str))
