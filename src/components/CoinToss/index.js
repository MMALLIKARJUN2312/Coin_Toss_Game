// Write your code here

import {Component} from 'react'
import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: headsImageUrl, headsCount: 0, tailsCount: 0}

  onTossingCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = headsImageUrl
      latestHeadsCount += 1
    } else {
      tossImage = tailsImageUrl
      latestTailsCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <div className="image-container">
            <img
              src={tossResultImage}
              alt="toss result"
              className="coin-image"
            />
          </div>
          <div className="button-container">
            <button
              type="button"
              className="coin-button"
              onClick={this.onTossingCoin}
            >
              Toss Coin
            </button>
          </div>
          <ul className="list-container">
            <p className="list-item">Total: {headsCount + tailsCount}</p>
            <p className="list-item">Heads: {headsCount}</p>
            <p className="list-item">Tails: {tailsCount}</p>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
