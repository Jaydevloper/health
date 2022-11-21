import "./site-header.scss";
import account from "../../assets/img/account.svg";
import { Fragment, useContext, useState } from "react";
import { Contextvalue } from "../../context/context";
function Header(){
const [open,setOpen] = useState(false)
const {setFilter} = useContext(Contextvalue)
  const regionArr = [
    { id: 1, admin_name: "Toshkent shahri" },
    {
      id: 2,
      admin_name: "Buxoro",
    },
    {
      id: 3,
      admin_name: "Andijon",
    },
    {
      id: 4,
      admin_name: "Samarqand",
    },
    {
      id: 5,
      admin_name: "Namangan",
    },
    {
      id: 6,
      admin_name: "Farg‘ona",
    },
    {
      id: 7,
      admin_name: "Surxondaryo",
    },
    {
      id: 8,
      admin_name: "Qoraqalpog‘iston Respublikasi",
    },
    {
      id: 9,
      admin_name: "Xorazm",
    },
    {
      id: 10,
      admin_name: "Navoiy",
    },
    {
      id: 11,
      admin_name: "Sirdaryo",
    },
    { id: 12, admin_name: "Toshkent" },
  ];
    return (
      <>
        <header className="site-header container">
          <div className="site-header__wrraper">
            <select className="site-header__filter" onChange={(e)=> setFilter(e.target.value)}>
              <option value={"ВСЕ"}>ВСЕ</option>
              {
                // eslint-disable-next-line
                regionArr?.map((el) => {
                    return(
                  <Fragment key={el.id}>
                    <option id={el.id}>{el.admin_name}</option>
                  </Fragment>
                    )
                })
              }
            </select>
            <button className="site-header__btn" onClick={() => setOpen(!open)}>
              {
                // eslint-disable-next-line
                <img src={account} />
              }
            </button>
          </div>
          <div
            className={
              open
                ? "site-header__out "
                : "site-header__out site-header__out--open"
            }
          >
            <p className="site-main__page">Выход</p>
          </div>
        </header>
      </>
    );
}
export default Header;