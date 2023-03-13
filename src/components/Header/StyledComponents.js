import styled from 'styled-components'

export const NavContainer = styled.nav`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  padding: 24px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLogo = styled.img`
  width: 100px;
  height: 28px;
`
export const NavButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const NavButton = styled.button`
  background-color: transparent;
  font-size: 30px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '')};
  border-style: none;
  display: flex;
  align-items: center;
  margin: 0px 10px;
  padding: 0px;
  cursor: pointer;
`

export const ProfileIcon = styled.img`
  width: 30px;
  margin: 0px;
`
export const LogoutButton = styled.button`
  height: 30px;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#3b82f6')};
  border: ${props =>
    props.darkTheme ? '2px #f9f9f9 solid' : '2px #3b82f6 solid'};
  border-radius: 4px;
  margin: 0px 10px;
  padding: 0px 20px;
  cursor: pointer;
`
