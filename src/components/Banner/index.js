import {Component} from 'react'
import {RiCloseFill} from 'react-icons/ri'

import {
  BannerBg,
  CloseButton,
  BannerContent,
  Logo,
  BannerText,
  Button,
} from './StyledComponents'

class Banner extends Component {
  state = {displayBanner: true}

  onClickClose = () => {
    this.setState({displayBanner: false})
  }

  render() {
    const {displayBanner} = this.state

    return (
      displayBanner && (
        <BannerBg
          type="button"
          displayBanner={displayBanner}
          data-testid="banner"
        >
          <CloseButton onClick={this.onClickClose} data-testid="close">
            <RiCloseFill />
          </CloseButton>
          <BannerContent>
            <Logo
              alt="nxt watch logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            />
            <BannerText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerText>
            <Button>GET IT NOW</Button>
          </BannerContent>
        </BannerBg>
      )
    )
  }
}

export default Banner
