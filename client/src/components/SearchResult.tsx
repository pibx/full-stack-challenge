import React from 'react'
//MouseEvent, useState
import { Listing } from '@full-stack-challenge/common'

import cardStyles from './Card.module.css'
import styles from './SearchResult.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

const tag = <FontAwesomeIcon icon={faTag} />

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

// function changeBackground(e: MouseEvent<HTMLButtonElement>) {
//   e.preventDefault
//   // e.target.card.background = 'red'
//   console.log('test')
// }

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  // const [value, setValue] = useState(0)
  console.log(result)

  // newElement = <div className={styles.newListed}> Newly Listed!</div>

  return (
    <a style={{ textDecoration: 'none' }} href={result.url}>
      <div className={`${styles.card} ${cardStyles.card}`}>
        {result.daysOnMarket == 1 && (
          <div className={styles.newListed}> Newly Listed! {tag}</div>
        )}

        <div className={styles.rowContainer}>
          <div className={styles.addressContainer}>
            <div className={styles.text}>
              address:
              {result.address || 'Not given'}
            </div>
            <div className={styles.text}>
              municipality: {result.municipality}
            </div>
            <div className={styles.text}>region: {result.region}</div>
            <div className={styles.text}>postalCode: {result.postalCode}</div>
          </div>
          <div className={styles.priceContainer}>
            <div className={styles.priceText}>Price: {result.price}</div>
          </div>
        </div>

        {/* end of card container */}
      </div>
    </a>
  )
}
