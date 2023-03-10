import styled from 'styled-components'

export const ListItem = styled.li`
  background-color: ${props => {
    if (props.darkTheme) {
      return props.isActive ? '#424242' : 'transparent'
    }
    return props.isActive ? '#f1f1f1' : 'transparent'
  }};
`
export const Button = styled.button`
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => {
    if (props.isActive) {
      return '#ff0000'
    }
    return props.darkTheme ? '#cccccc' : '#606060'
  }};
  border-style: none;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin-left: 20px;
`

export const TabLabel = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#424242')};
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 20px;
`
