import styled from 'styled-components'

export const ListItem = styled.li`
  background-color: ${props => {
    if (props.darkTheme) {
      return props.isActive ? '#313131' : 'transparent'
    }
    return props.isActive ? '#f1f5f9' : 'transparent'
  }};
`
export const Button = styled.button`
  width: 100%;
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
  padding-left: 20px;
`

export const TabLabel = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  color: ${props => (props.darkTheme ? '#f8fafc' : '#424242')};
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 20px;
`
