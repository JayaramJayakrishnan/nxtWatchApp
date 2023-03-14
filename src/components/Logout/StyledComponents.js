import styled from 'styled-components'

import Popup from 'reactjs-popup'

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

export const StyledPopup = styled(Popup)`
  &-content {
    width: 360px;
    height: 180px;
    background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
    border-radius: 10px;
    border-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
`

export const ModalText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#00306e')};
`
export const ModalButton = styled.button`
  width: 90px;
  background-color: ${props => (props.confirm ? '#3b82f6' : 'transparent')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.confirm ? '#ffffff' : '#94a3b8')};
  border: ${props => {
    if (props.confirm) {
      return '1px #3b82f6 solid'
    }
    return props.darkTheme ? '1px #94a3b8 solid' : '1px #00306e solid'
  }};
  border-radius: 3px;
  padding: 10px 0px;
  margin: 15px;
  cursor: pointer;
`
