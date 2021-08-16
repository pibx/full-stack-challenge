import React from 'react'

import { Listing } from '@full-stack-challenge/common'

import { ListingsClient } from '../client/ListingsClient'

import { SearchBar } from './SearchBar'
import { SearchResult } from './SearchResult'
import { ViewportProvider, useViewport, Viewport } from './ViewportContext'
import { StyleMap } from './styles'

export const ListingSearchViewport: React.FC = () => {
  return (
    <ViewportProvider>
      <ListingSearch />
    </ViewportProvider>
  )
}

// would be better to get this from environment config
const API_PATH = 'http://localhost:3000'
export const ListingSearch: React.FC = () => {
  const listingsClient = React.useRef(new ListingsClient(API_PATH))
  const viewport = useViewport()
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
    <main style={styles(viewport)}>
      <SearchBar onSearch={onSearch} />
      {results ? (
        Array.isArray(results) ? (
          results.map(result => <SearchResult result={result} />)
        ) : (
          <div style={styles(viewport).errorMessage}>{results.message}</div>
        )
      ) : (
        <div style={styles(viewport).loadingPlaceholder} />
      )}
    </main>
  )
}

const FONT_SIZE_MOBILE = 12
const FONT_SIZE_SMALLSCREEN = 12
const FONT_SIZE_LARGESCREEN = 12
const styles = (viewport: Viewport): StyleMap => ({
  main: {
    fontSize:
      viewport.width < 640
        ? FONT_SIZE_MOBILE
        : viewport.width < 1024
        ? FONT_SIZE_SMALLSCREEN
        : FONT_SIZE_LARGESCREEN
  },

  errorMessage: {},

  loadingPlaceholder: {}
})
