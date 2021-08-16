import React from 'react'

import { Listing } from '@full-stack-challenge/common'

import { StyleMap } from './styles'

type SearchResultProps = {
  result: Listing
}

/*

    t.type({
      municipality: t.string,
      region: t.string,
      postalCode: t.string,
      price: t.number,
      beds: t.number,
      daysOnMarket: t.number,
      status: t.string,
      url: t.string,
      source: t.string,
      favorite: t.boolean,
      interested: t.boolean,
      latitude: t.number,
      longitude: t.number
    }),
    t.partial({
      address: t.string,
      /** Date string 
      soldDate: t.number,
      baths: t.number,
      squareFeet: t.number,
      lotSize: t.number,
      pricePerSquareFoot: t.number,
      yearBuilt: t.number,
      hoaMonthlyFee: t.number,
      /** Datetime string 
      nextOpenHouseStart: t.string,
      /** Datetime string 
      nextOpenHouseEnd: t.string
    })
*/

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <div style={styles.card}>
      <a href={result.url}>
        <div>
          <div>municipality: {result.municipality}</div>
          <div>region: {result.region}</div>
          <div>postalCode: {result.postalCode}</div>
          <div>price: {result.price}</div>
          <div>address: {result.address || 'Not given'}</div>
        </div>
      </a>
    </div>
  )
}

const styles: StyleMap = {
  card: {
    border: '1px solid black',
    borderRadius: 4,
    padding: '1em 0.5em'
  }
  // ... other stuff
}
