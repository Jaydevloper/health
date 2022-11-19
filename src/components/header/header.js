import "./site-header.scss";
import account from "../../assets/img/account.svg";
import { useState } from "react";
function Header(){
const [open,setOpen] = useState(false)
    return(
        <>  
            <header className="site-header container">
                <div className="site-header__wrraper">
                    <select className="site-header__filter">
                        <option value={"ВСЕ"}>ВСЕ</option>
                    </select>
                    <button className="site-header__btn" onClick={() => setOpen(!open)}>
                        {
                            // eslint-disable-next-line
                                <img src={account}/>          
                        }
                    </button> 
                </div>
                <div className={open?"site-main__out ":"site-main__out site-main__out--open"}>
                    <p className="site-main__page">Выход</p>
                </div>
            </header>
        </>
    )
}
export default Header;