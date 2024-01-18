import { post } from "../services/authService";

import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
})

const navigate = useNavigate()

const { storeToken, authenticateUser } = useContext(AuthContext)

const handleTextInput = (e) => {
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = (e) => {
    e.preventDefault()

    post('/auth/login', user)
        .then((response) => {
            storeToken(response.data.authToken)
            authenticateUser()
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
}

return (
<div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        
    <div class="mb-3">
    <label for="exampleInputemail" class="form-label">Email</label>
    <input name="email" type="email" class="form-control" id="exampleInputPassword1" value={user.email} onChange={handleTextInput} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input name="password" type="password" class="form-control" id="exampleInputPassword1" value={user.password} onChange={handleTextInput}  />
  </div>
  <button type="submit" class="btn btn-primary">Signin</button>
    </form>
</div>
)
}

export default Login


{/* <div class="mb-3">
    <label for="exampleInputemail" class="form-label">Email</label>
    <input name="email" type="email" class="form-control" id="exampleInputPassword1" value={user.email} onChange={handleTextInput} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input name="password" type="password" class="form-control" id="exampleInputPassword1" value={user.password} onChange={handleTextInput}  />
  </div>
  <button type="submit" class="btn btn-primary">Signin</button> */}