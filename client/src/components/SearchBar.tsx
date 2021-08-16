import React from 'react'

import styles from './SearchBar.module.css'
import { ReactComponent as SearchIcon } from './search_house.svg'

type SearchBarProps = {
  onSearch: (searchStr: string) => Promise<void>
}

const SEARCH_INPUT_NAME = 'search'

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [loading, setLoading] = React.useState(false)
  const formEl = React.useRef<HTMLFormElement | null>(null)
  const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    doSearch()
  }
  const doSearch = async () => {
    const input = new FormData(formEl.current!).get(SEARCH_INPUT_NAME) as string
    if (input.length >= 2) {
      setLoading(true)
      await onSearch(input)
      setLoading(false)
    }
  }

  return (
    <form ref={formEl} onSubmit={onSubmit} className={styles.form}>
      <input
        name={SEARCH_INPUT_NAME}
        type="text"
        placeholder={'Start typing your search...'}
        className={styles.input}
        onInput={doSearch}
      />
      <button type="submit" className={styles.button}>
        {loading ? '...' : <SearchIcon className={styles.icon} />}
      </button>
    </form>
  )
}
