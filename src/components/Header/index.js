import {withRouter, Link} from 'react-router-dom'
import Cookie from 'js-cookie'

import {RiMoonFill} from 'react-icons/ri'
import {HiOutlineSun} from 'react-icons/hi'

import {
  NavContainer,
  NavLogo,
  NavButtonsContainer,
  NavButton,
  ProfileIcon,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Logout from '../Logout'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme, changeTheme} = value

      const onClickLogout = () => {
        const {history} = props

        Cookie.remove('jwt_token')
        history.replace('/login')
      }

      const logoUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavContainer darkTheme={darkTheme}>
          <Link to="/">
            <NavLogo alt="website logo" src={logoUrl} />
          </Link>
          <NavButtonsContainer>
            <li>
              <NavButton
                type="button"
                onClick={changeTheme}
                darkTheme={darkTheme}
                data-testid="theme"
              >
                {darkTheme ? <HiOutlineSun /> : <RiMoonFill />}
              </NavButton>
            </li>
            <li>
              <NavButton type="button">
                <ProfileIcon
                  alt="profile"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                />
              </NavButton>
            </li>
            <li>
              <Logout onClickLogout={onClickLogout} type="button" />
            </li>
          </NavButtonsContainer>
        </NavContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
