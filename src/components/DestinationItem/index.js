// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationsListItem} = props
  const {name, imgUrl} = destinationsListItem
  return (
    <li>
      <div className="img-container">
        <img src={imgUrl} alt={name} />
        <p className="img-head">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
