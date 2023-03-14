import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`

export const ContentsContainer = styled.div`
  flex-grow: 1;
  display: flex;
`

export const VideoItemsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`
export const SearchContainer = styled.div`
  width: 50%;
  height: 30px;
  background-color: ${props => (props.darkTheme ? 'transparent' : '#ffffff')};
  border: ${props =>
    props.darkTheme ? '1px #424242 solid' : '1px #cccccc solid'};
  display: flex;
  margin-top: 20px;
  margin-left: 30px;
`
export const SearchInput = styled.input`
  background-color: transparent;
  color: #909090;
  flex-grow: 1;
  border-style: none;
  padding-left: 15px;
  outline: none;
`
export const SearchButton = styled.button`
  width: 10%;
  background-color: ${props => (props.darkTheme ? '#313131' : '')};
  color: #606060;
  ${props => (props.darkTheme ? '#909090' : '#606060')};
  border-style: none;
  border-left: ${props =>
    props.darkTheme ? '1px #424242 solid' : '1px #cccccc solid'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px;
`

export const ViewContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`
export const ViewImage = styled.img`
  width: 40%;
`
export const ViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#1e293b')};
  margin-top: 40px;
  margin-bottom: 0px;
`
export const ViewText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #616e7c;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 0px;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #ebebeb;
  border-style: none;
  border-radius: 4px;
  padding: 10px 25px;
  margin-top: 30px;
  cursor: pointer;
`
