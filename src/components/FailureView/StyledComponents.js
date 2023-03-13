import styled from 'styled-components'

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
