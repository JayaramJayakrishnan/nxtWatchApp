import {Component} from 'react'
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  BgContainer,
  FromContainer,
  Logo,
  InputContainer,
  InputLabel,
  Input,
  ShowPasswordCheckbox,
  CheckboxContainer,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './StyledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitUserDetails = event => {
    event.preventDefault()
    this.verifyUser()
  }

  verifyUser = async () => {
    const {username, password} = this.state
    const userData = {
      username,
      password,
    }

    const options = {
      method: 'Post',
      body: JSON.stringify(userData),
    }

    const apiUrl = 'https://apis.ccbp.in/login'

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const {history} = this.props

      const jwtToken = data.jwt_token
      Cookie.set('jwt_token', jwtToken, {expires: 15})
      this.setState({showErrorMsg: false})

      history.replace('/')
    } else {
      const errorMsg = data.error_msg
      this.setState({showErrorMsg: true, errorMsg})
    }
  }

  onCheckShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const jwtToken = Cookie.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }

          const {darkTheme} = value

          const logoUrl = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const {
            username,
            password,
            showPassword,
            errorMsg,
            showErrorMsg,
          } = this.state
          const inputType = showPassword ? 'text' : 'password'

          return (
            <BgContainer darkTheme={darkTheme}>
              <FromContainer
                onSubmit={this.onSubmitUserDetails}
                darkTheme={darkTheme}
              >
                <Logo alt="website logo" src={logoUrl} />
                <InputContainer>
                  <InputLabel htmlFor="username" darkTheme={darkTheme}>
                    USERNAME
                  </InputLabel>
                  <Input
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={this.onChangeUserName}
                    value={username}
                    darkTheme={darkTheme}
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel htmlFor="password" darkTheme={darkTheme}>
                    PASSWORD
                  </InputLabel>
                  <Input
                    type={inputType}
                    placeholder="Password"
                    id="password"
                    onChange={this.onChangePassword}
                    value={password}
                    darkTheme={darkTheme}
                  />
                  <CheckboxContainer>
                    <ShowPasswordCheckbox
                      type="checkbox"
                      id="showPassword"
                      onChange={this.onCheckShowPassword}
                    />
                    <CheckboxLabel htmlFor="showPassword" darkTheme={darkTheme}>
                      Show Password
                    </CheckboxLabel>
                  </CheckboxContainer>
                </InputContainer>

                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FromContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
