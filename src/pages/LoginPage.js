import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import useAuth from "../auth/useAuth"


const initialUser = { usuario: '', password: '' };

export default function LoginPage() {
    const [user, setUser] = useState(initialUser)
    const history = useHistory()
    const { login } = useAuth();

    const handleChange = ({ target: { name, value } }) => setUser({ ...user, [name]: value })

    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            console.log(user)
            const { data } = await axios.post('http://localhost:3200/api/login', user)
            console.log('logged', data)
            history.push('/account')
            login(data)
        }
        catch (err) { console.error(err) }
    }

    
    return (
    <div class="wrapper fadeInDown">
        <div id="formContent">
        <div class="fadeIn first">
        <img src="/img/male_avatar.svg" alt="User Icon" widht="50" height="50" />
    </div>   
        <form onSubmit={handleLogin}>
        <input id="usuario" type="text" class="fadeIn second" name="usuario" value={user.usuario} onChange={handleChange} placeholder="usuario"/>
        
        <input id="password" type="password" class="fadeIn third" name="password" value={user.password} onChange={handleChange} placeholder="contraseña"/>
        <input type="submit" class="fadeIn fourth" value="Iniciar Sesión"/>
    </form>
    </div>  
</div>

    )
}