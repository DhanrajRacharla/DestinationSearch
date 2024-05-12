// Write your code here
import './index.css'

import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachItem1 =>
      eachItem1.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="backround-container">
        <h1 className="heading">Destination Search</h1>
        <div className="img-flex">
          <input
            type="search"
            value={searchInput}
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="unorder-list">
          {searchResult.map(eachItem => (
            <DestinationItem
              key={eachItem.id}
              destinationsListItem={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

// const DestinationSearch = props => {
//   const {destinationsList} = props

//   return (
//     <div className="backround-container">
//       <h1 className="heading">Deatination Search</h1>
//       <input type="search" placeholder="Search" />
//       <ul className="unorder-list">
//         {destinationsList.map(eachItem => (
//           <DestinationItem destinationsListItem={eachItem} />
//         ))}
//       </ul>
//     </div>
//   )
// }

export default DestinationSearch
