import { post } from "../services/authService"

import { useContext, useState } from "react"

import { useNavigate } from "react-router-dom"

import { AuthContext } from "../context/auth.context"

// import logo from "../images/nbalogo.png"

const Signup = () => {

    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleTextInput = (e) => {
        setNewUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        post('/auth/signup', newUser)
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
        <h6>Signup</h6>
        {/* <div><img src={logo} alt="logo" /></div> */}
<form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputusername" class="form-label">Username</label>
    <input name="username" type="text" class="form-control" id="exampleInputusername" aria-describedby="emailHelp"  value={newUser.username} onChange={handleTextInput} />
  </div>
  <div class="mb-3">
    <label for="exampleInputemail" class="form-label">Email</label>
    <input name="email" type="email" class="form-control" id="exampleInputPassword1" value={newUser.email} onChange={handleTextInput} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input name="password" type="password" class="form-control" id="exampleInputPassword1" value={newUser.password} onChange={handleTextInput}  />
  </div>
  <button type="submit" class="btn btn-primary">Signup</button>
</form>

    </div>
  )
}

export default Signup



{/* <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputusername" class="form-label">Username</label>
    <input name="username" type="text" class="form-control" id="exampleInputusername" aria-describedby="emailHelp"  value={newUser.username} onChange={handleTextInput} />
  </div>
  <div class="mb-3">
    <label for="exampleInputemail" class="form-label">Email</label>
    <input name="email" type="email" class="form-control" id="exampleInputPassword1" value={newUser.email} onChange={handleTextInput} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input name="password" type="password" class="form-control" id="exampleInputPassword1" value={newUser.password} onChange={handleTextInput}  />
  </div>
  <button type="submit" class="btn btn-primary">Signup</button>
</form> */}




{/* <form onSubmit={handleSubmit}>
            <label>
                Username
                <input name="username" type="text" value={newUser.username} onChange={handleTextInput} />
            </label>
            <label>
                Email
                <input name="email" type="email" value={newUser.email} onChange={handleTextInput} />
            </label>
            <label>
                Password
                <input name="password" type="password" value={newUser.password} onChange={handleTextInput} />
            </label>

            <button type="submit">Signup</button>
        </form> */}