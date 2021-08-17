import React from 'react'
//MouseEvent, useState
import { Listing } from '@full-stack-challenge/common'

import cardStyles from './Card.module.css'
import styles from './SearchResult.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

type SearchResultProps = {
  result: Listing
  cardStyle?: React.CSSProperties
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

export const SearchResult: React.FC<SearchResultProps> = ({
  result,
  cardStyle = {}
}) => {
  return (
    <a className={styles.wrapperLink} href={result.url}>
      <div className={`${styles.card} ${cardStyles.card}`} style={cardStyle}>
        {result.daysOnMarket === 1 && (
          <div className={styles.newListed}>
            <FontAwesomeIcon icon={faTag} />
            <span style={{ marginLeft: '0.5em' }}>Newly Listed!</span>
          </div>
        )}

        <div className={styles.rowContainer}>
          <div className={styles.addressContainer}>
            <div className={styles.columnHeader}>Location</div>

            <div className={styles.rowContainer}>
              <div className={styles.textBold}>Address:</div>
              <div className={styles.text}>
                {result.address || 'Not Available'}
              </div>
            </div>
            <div className={styles.rowContainer}>
              <div className={styles.textBold}>Municipality:</div>
              <div className={styles.text}>
                {result.municipality || 'Not Available'}
              </div>
            </div>
            <div className={styles.rowContainer}>
              <div className={styles.textBold}>Region:</div>
              <div className={styles.text}>
                {result.region || 'Not Available'}
              </div>
            </div>
            <div className={styles.rowContainer}>
              <div className={styles.textBold}>PostalCode:</div>
              <div className={styles.text}>
                {result.postalCode || 'Not Available'}
              </div>
            </div>
          </div>

          {/* ---------------------------------- */}
          <div className={styles.amenitiesContainer}>
            <div className={styles.columnHeader}>Listing Details</div>

            <div className={styles.rowContainer}>
              <div className={styles.textBold}>HOA:</div>
              <div className={styles.text}>
                ${result.hoaMonthlyFee || 'None'}
              </div>
            </div>
            <div className={styles.rowContainer}>
              <div className={styles.textBold}>Open House:</div>
              <div className={styles.text}>
                {result.nextOpenHouseStartTime || 'Not Available'}
              </div>
            </div>
            <div className={styles.rowContainer}>
              <div className={styles.textBold}>Beds:</div>
              <div className={styles.text}>{result.beds || 'None'}</div>
            </div>
            <div className={styles.rowContainer}>
              <div className={styles.textBold}>Baths:</div>
              <div className={styles.text}>{result.baths || 'None'}</div>
            </div>
          </div>
          <div className={styles.priceContainer}>
            <div className={styles.columnHeader}>Pricing</div>
            <div className={styles.rowContainer}>
              <div className={styles.textBold}>Current Price:</div>
              <div className={styles.text}>
                {`$${result.price}` || 'Not Available'}
              </div>
            </div>
            <div className={styles.rowContainer}>
              <div className={styles.textBold}>Price Per Square Feet:</div>
              <div className={styles.text}>
                {`$${result.pricePerSquareFoot}` || 'None'}
              </div>
            </div>
          </div>
        </div>

        {/* end of card container */}
      </div>
    </a>
  )
}
