import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#181818' : '#ffffff')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FromContainer = styled.form`
  width: 100%;
  max-width: 450px;
  background-color: ${props => (props.darkTheme ? '#000000' : '#ffffff')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 40px;
  box-shadow: ${props =>
    props.darkTheme ? 'none' : '0px 0px 20px 10px #f1f5f9'};

  @media (max-width: 767px) {
    width: 90%;
    padding: 30px 15px;
  }
`
export const Logo = styled.img`
  width: 40%;
  margin-bottom: 50px;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#f1f5f9' : '#909090')};
  margin-bottom: 8px;
`
export const Input = styled.input`
    width: 100%;
    height: 40%;
    background-color: transparent;
    font-family: "Roboto"
    font-size: 16px;
    color: #909090;
    border-style: none;
    border: ${props =>
      props.darkTheme ? '1px #64748b solid' : '1px #cbd5e1 solid'};
    border-radius: 2px;
    padding: 10px 15px;
    outline: none;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 10px;
`

export const ShowPasswordCheckbox = styled.input`
  height: 15px;
  width: 20px;
  border: 1px #181818 solid;
  border-radius: 6px;
  margin-right: 5px;
  outline: none;
`
export const CheckboxLabel = styled(InputLabel)`
  color: ${props => (props.darkTheme ? '#f1f5f9' : '#181818')};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0px;
`

export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #3b82f6;
  border-radius: 8px;
  border-style: none;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  outline: none;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
  margin-top: 5px;
  align-self: flex-start;
`
