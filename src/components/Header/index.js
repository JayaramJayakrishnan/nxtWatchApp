import {RiMoonFill} from 'react-icons/ri'
import {HiOutlineSun} from 'react-icons/hi'

import {
  NavContainer,
  NavLogo,
  NavButtonsContainer,
  NavButton,
  ProfileIcon,
  LogoutButton,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme, changeTheme} = value

      const logoUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavContainer darkTheme={darkTheme}>
          <NavLogo alt="nxt watch logo" src={logoUrl} />
          <NavButtonsContainer>
            <NavButton onClick={changeTheme} darkTheme={darkTheme}>
              {darkTheme ? <HiOutlineSun /> : <RiMoonFill />}
            </NavButton>
            <NavButton>
              <ProfileIcon
                alt="profile"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              />
            </NavButton>
            <LogoutButton darkTheme={darkTheme}>Logout</LogoutButton>
          </NavButtonsContainer>
        </NavContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Header
