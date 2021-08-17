import React from 'react'

import { Listing } from '@full-stack-challenge/common'

import { ListingsClient } from '../client/ListingsClient'

import { SearchBar } from './SearchBar'
import { SearchResult } from './SearchResult'

import cardStyles from './Card.module.css'
import styles from './ListingSearch.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const infoIcon = <FontAwesomeIcon icon={faInfoCircle} />
const warningIcon = <FontAwesomeIcon icon={faExclamationTriangle} />
// would be better to get this from environment config
const API_PATH = 'http://localhost:3000'
export const ListingSearch: React.FC = () => {
  const listingsClient = React.useRef(new ListingsClient(API_PATH))
  const [results, setResults] = React.useState<undefined | Listing[] | Error>(
    undefined
  )

  const onSearch = async (searchStr: string) => {
    try {
      setResults(await listingsClient.current.get({ searchStr }))
    } catch (error) {
      setResults(error)
    }
  }
  return (
    <main className={styles.layout}>
      <SearchBar onSearch={onSearch} />
      {results ? (
        Array.isArray(results) ? (
          results.map(result => (
            <SearchResult key={result.mls} result={result} />
          ))
        ) : (
          <div className={`${styles.errorMessage} ${cardStyles.card}`}>
            {results.message}
          </div>
        )
      ) : (
        <div className={`${styles.placeholder} ${cardStyles.card}`}>
          <div className={styles.rowContainer}>
            <div className={styles.infoIcon}>{infoIcon}</div>

            <div className={styles.textDescription}>
              Try searching with a partial match on Property Type, Address,
              City, or Neighborhood.
              <br />
              You can also use an exact match on an MLS ID or a two-letter State
              code (such as CA).
            </div>
          </div>
        </div>
      )}
      {Array.isArray(results) && results.length === 0 && (
        <div className={`${styles.placeholder} ${cardStyles.card}`}>
          <div className={styles.rowContainer}>
            <div className={styles.textDescription}>
              <div className={styles.rowContainer}>
                {warningIcon} &nbsp;&nbsp; No records Found&nbsp;&nbsp;{' '}
                {warningIcon}
              </div>
              <br />
              Try searching with a partial match on Property Type, Address,
              City, or Neighborhood.
              <br />
              You can also use an exact match on an MLS ID or a two-letter State
              code (such as CA).
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
