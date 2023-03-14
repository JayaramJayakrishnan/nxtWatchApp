import 'reactjs-popup/dist/index.css'

import {
  LogoutButton,
  StyledPopup,
  ModalText,
  ModalButton,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const Logout = props => {
  const {onClickLogout} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <div className="popup-container">
            <StyledPopup
              modal
              trigger={
                <LogoutButton
                  type="button"
                  className="trigger-button"
                  darkTheme={darkTheme}
                >
                  Logout
                </LogoutButton>
              }
              darkTheme={darkTheme}
            >
              {close => (
                <>
                  <ModalText darkTheme={darkTheme}>
                    Are you sure, you want to logout?
                  </ModalText>
                  <div>
                    <ModalButton
                      type="button"
                      onClick={() => close()}
                      darkTheme={darkTheme}
                    >
                      Cancel
                    </ModalButton>
                    <ModalButton
                      type="button"
                      onClick={onClickLogout}
                      confirm
                      darkTheme={darkTheme}
                    >
                      Confirm
                    </ModalButton>
                  </div>
                </>
              )}
            </StyledPopup>
          </div>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Logout
