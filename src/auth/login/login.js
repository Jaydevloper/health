import { Link } from 'react-router-dom';
import './login-page.scss';
function Login (){
    return(
        <>
            <div className="login-page container">
                    <form className='login-page__form' method="POST" action="#">
                        <h1>Login</h1>
                        <input className="login-page__login" type={"text"} placeholder="Login"/>
                        <input className="login-page__login" type={"password"} placeholder="Password"/>
                        <Link className='login-page__link' to={"/signup"}>У вас нет аккаунт?</Link>
                        <button className='login-page__btn'>Отправить</button>
                    </form>
            </div>
        </>
    )
}

export default Login;