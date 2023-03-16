import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

export const ListItem = styled.li`
  background-color: ${props => {
    if (props.darkTheme) {
      return props.isActive ? '#313131' : 'transparent'
    }
    return props.isActive ? '#f1f5f9' : 'transparent'
  }};
`
export const StyledLink = styled(Link)`
  width: 100%;
  height: 50px;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  color: ${props => (props.darkTheme ? '#f8fafc' : '#424242')};
  text-decoration: none;
  border-style: none;
  display: flex;
  align-items: center;
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

export const HomeIcon = styled(AiFillHome)`
  font-size: 16px;
  color: ${props => {
    if (props.isActive) {
      return '#ff0000'
    }
    return props.darkTheme ? '#cccccc' : '#606060'
  }};
  margin-right: 15px;
`
export const TrendingIcon = styled(HiFire)`
  font-size: 16px;
  color: ${props => {
    if (props.isActive) {
      return '#ff0000'
    }
    return props.darkTheme ? '#cccccc' : '#606060'
  }};
  margin-right: 15px;
`

export const GamingIcon = styled(SiYoutubegaming)`
  font-size: 16px;
  color: ${props => {
    if (props.isActive) {
      return '#ff0000'
    }
    return props.darkTheme ? '#cccccc' : '#606060'
  }};
  margin-right: 15px;
`

export const SavedVideosIcon = styled(BiListPlus)`
  font-size: 16px;
  color: ${props => {
    if (props.isActive) {
      return '#ff0000'
    }
    return props.darkTheme ? '#cccccc' : '#606060'
  }};
  margin-right: 15px;
`
