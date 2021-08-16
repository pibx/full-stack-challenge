import React from 'react'
import { StyleMap } from './styles'
import { ReactComponent as SearchIcon } from './search_house.svg'

type SearchBarProps = {
  onSearch: (searchStr: string) => void
}

const SEARCH_INPUT_NAME = 'search'

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const formEl = React.useRef<HTMLFormElement | null>(null)
  const onSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    doSearch()
  }
  const doSearch = () => {
    const input = new FormData(formEl.current!).get(SEARCH_INPUT_NAME) as string
    if (input.length >= 2) {
      onSearch(input)
    }
  }

  return (
    <form ref={formEl} onSubmit={onSubmit} style={styles.form}>
      <input
        name={SEARCH_INPUT_NAME}
        type="text"
        style={styles.input}
        onInput={doSearch}
      />
      <button type="submit" style={styles.button}>
        <SearchIcon style={styles.icon} />
      </button>
    </form>
  )
}

const styles: StyleMap = {
  form: { border: '1px solid black', display: 'flex' },
  input: { flex: 1, background: 'none', border: 'none' },
  button: { background: 'none', border: 'none' },
  icon: { width: '1em', height: '1em' }
}
