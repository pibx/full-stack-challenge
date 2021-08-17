import ReactDOM from 'react-dom'
import { ListingSearch } from './components/ListingSearch'

// allow the loading animation to show, we wouldn't do this in prod
setTimeout(() => {
  ReactDOM.render(<ListingSearch />, document.querySelector('main'))
}, 4000)
