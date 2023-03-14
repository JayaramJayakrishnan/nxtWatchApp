import {RiCloseFill} from 'react-icons/ri'

import {
  BannerBg,
  CloseButton,
  BannerContent,
  Logo,
  BannerText,
  Button,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const Banner = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {displayBanner, toggleBannerVisibility} = value

      return (
        <BannerBg
          type="button"
          displayBanner={displayBanner}
          data-testid="banner"
        >
          <CloseButton onClick={toggleBannerVisibility} data-testid="close">
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
    }}
  </NxtWatchContext.Consumer>
)

export default Banner
