import styled from 'styled-components'

export const BannerBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: left;
  display: ${props => (props.displayBanner ? 'flex' : 'none')};
  flex-direction: column;
  padding: 30px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border-style: none;
  align-self: flex-end;
  font-size: 20px;
  cursor: pointer;
`
export const BannerContent = styled.div`
  width: 40%;
`

export const Logo = styled.img`
  width: 35%;
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #1e293b;
  margin: 20px 0px;
`

export const Button = styled.button`
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #1e293b;
  border: 1px #1e293b solid;
  padding: 10px 20px;
  margin-top: 30px;
`
