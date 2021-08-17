import ReactDOM from 'react-dom'
import { ListingSearch } from './components/ListingSearch'

document
  .querySelector('svg.logo-animated')
  ?.addEventListener('animationend', () => {
    ReactDOM.render(<ListingSearch />, document.querySelector('main'))
  })
