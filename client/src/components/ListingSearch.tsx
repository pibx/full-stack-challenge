import React from 'react'

import { Listing } from '@full-stack-challenge/common'

import { ListingsClient } from '../client/ListingsClient'

import { SearchBar } from './SearchBar'
import { SearchResult } from './SearchResult'

import cardStyles from './Card.module.css'
import styles from './ListingSearch.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const coffeIcon = <FontAwesomeIcon icon={faInfoCircle} />
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
          results.map(result => <SearchResult result={result} />)
        ) : (
          <div className={`${styles.errorMessage} ${cardStyles.card}`}>
            {results.message}
          </div>
        )
      ) : (
        <div className={`${styles.placeholder} ${cardStyles.card}`}>
          {coffeIcon}Try searching with a partial match on Property Type,
          Address, City, or Neighborhood.
          <br />
          You can also use an exact match on an MLS ID or a two-letter State
          code (such as CA).
          <i className="fa fa-info-circle" aria-hidden="true"></i>
        </div>
      )}
    </main>
  )
}
