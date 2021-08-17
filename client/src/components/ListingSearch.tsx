import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

import { useTransition, animated as a } from 'react-spring'

import { Listing } from '@full-stack-challenge/common'

import { ListingsClient } from '../client/ListingsClient'

import { SearchBar } from './SearchBar'
import { SearchResult } from './SearchResult'

import cardStyles from './Card.module.css'
import styles from './ListingSearch.module.css'

// would be better to get this from environment config
const API_PATH = 'http://localhost:3000'

const rowHeight = 170
const rowMargin = 10

type ListingSearchResultsState = undefined | Listing[] | Error

export const ListingSearch: React.FC = () => {
  const listingsClient = React.useRef(new ListingsClient(API_PATH))

  const [results, setResults] =
    React.useState<ListingSearchResultsState>(undefined)

  const onSearch = async (searchStr: string) => {
    if (searchStr.length >= 2) {
      try {
        setResults(await listingsClient.current.get({ searchStr }))
      } catch (error) {
        setResults(error)
      }
    } else {
      setResults(undefined)
    }
  }

  const transitions = useListingSearchTransition(results)

  return (
    <div className={styles.layout}>
      <SearchBar onSearch={onSearch} className={styles.searchBar} />
      <div
        style={{
          height: Array.isArray(results)
            ? results.length * (rowHeight + rowMargin) + rowMargin
            : undefined
        }}
      >
        {transitions(
          (style, result) =>
            result && (
              <a.div
                style={{
                  width: '100%',
                  position: 'absolute',
                  ...style
                }}
              >
                <SearchResult
                  key={result.mls!}
                  result={result}
                  cardStyle={{
                    height: rowHeight
                  }}
                />
              </a.div>
            )
        )}
      </div>
      {Array.isArray(results) ? (
        results.length === 0 && (
          <div
            key="noresults"
            className={`${styles.placeholder} ${cardStyles.card}`}
          >
            <div className={styles.rowContainer}>
              <div className={styles.textDescription}>
                <div
                  className={`${styles.rowContainer} ${styles.warningIcon}`}
                  style={{ marginTop: '-0.5em' }}
                >
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                  &nbsp;&nbsp;No records Found&nbsp;&nbsp;
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                </div>
                Try searching with a partial match on Property Type, Address,
                City, or Neighborhood.
                <br />
                You can also use an exact match on an MLS ID or a two-letter
                State code (such as CA).
              </div>
            </div>
          </div>
        )
      ) : results ? (
        <div
          key="errormessage"
          className={`${styles.errorMessage} ${cardStyles.card}`}
        >
          <div className={styles.warningIcon}>
            <FontAwesomeIcon icon={faExclamationTriangle} size="2x" />
          </div>
          {results.message}
        </div>
      ) : (
        <div
          key="placeholder"
          className={`${styles.placeholder} ${cardStyles.card}`}
        >
          <div className={styles.rowContainer}>
            <div className={styles.infoIcon}>
              <FontAwesomeIcon icon={faInfoCircle} size="2x" />
            </div>

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
    </div>
  )
}

const useListingSearchTransition = (results: ListingSearchResultsState) =>
  useTransition(Array.isArray(results) ? results : [], {
    keys: result => result.mls!,
    from: result => ({
      transform: Array.isArray(results)
        ? `translateY(${
            results.indexOf(result) * (rowHeight + rowMargin) * 1.2
          }px)`
        : 'translateY(0)',
      opacity: 0
    }),
    enter: result => ({
      transform: Array.isArray(results)
        ? `translateY(${results.indexOf(result) * (rowHeight + rowMargin)}px)`
        : 'translateY(0)',
      opacity: 1
    }),
    update: result => ({
      transform: Array.isArray(results)
        ? `translateY(${results.indexOf(result) * (rowHeight + rowMargin)}px)`
        : 'translateY(0)',
      opacity: 1
    }),
    leave: () => ({
      opacity: 0
    }),
    delay: key =>
      Array.isArray(results)
        ? results.findIndex(result => result.mls! === key) * 100
        : 0
  })
