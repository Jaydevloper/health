import { Link } from 'react-router-dom';
import '../login/login-page.scss';
function Signup (){

    return(
        <>
             <div className="login-page container">
                    <form className='login-page__form' method="POST" action="#">
                        <h1>Signup</h1>
                        <input className="login-page__login" type={"text"} placeholder="Login"/>
                        <input className="login-page__login" type={"password"} placeholder="Password"/>
                        <Link className='login-page__link' to={"/login"}>У вас есть аккаунт?</Link>
                        <button className='login-page__btn'>Отправить</button>
                    </form>
            </div>
        </>
    )
}
export default Signup;