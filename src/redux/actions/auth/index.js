// User Logout
export const handleLogout = () => {
    return dispatch => {
      dispatch({ type: 'LOGOUT'})
  
    //   Clear Local Storage Items for auth
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    }
}

// CHANGE HANDLE LOGIN CURRENT IT ONLY STORES DATA
export const handleLogin = (payload) => {
    console.log(payload)
    return dispatch => {
      dispatch({ type: 'LOGIN', payload: payload})
    }
}
  