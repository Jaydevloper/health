import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./site-main.scss";
function Main(){
const data =[
    {
        id:1,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva"
    },
    {
        id:2,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva"
    },
    {
        id:3,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva"
    },
    {
        id:4,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva"
    },
    {
        id:5,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva"
    },
    {
        id:6,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva"
    },
    {
        id:7,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva"
    },
]
    return(
        <>
            <main className="site-main container">
                <table>
                    <thead>
                            <tr>
                                <th>Пациент</th>
                                <th>Возраст</th>
                                <th>Дата рождения</th>
                                <th>Регион</th>
                                <th>Улица</th>
                                <th>Адрес</th>
                                <th>Телефон</th>
                                <th>E-mail</th>
                                <th>Номер карты</th>
                                <th>Номер истории болезни</th>
                                <th>Подроробне</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(el =>{
                                return(
                                    <Fragment key={el.id}>
                                         <tr id={el.id}>
                                            <td>{el.name}</td>
                                            <td>{el.surname}</td>
                                            <td>{el.fathername}</td>
                                            <td>{el.fathername}</td>
                                            <td>{el.fathername}</td>
                                            <td>{el.fathername}</td>
                                            <td>{el.fathername}</td>
                                            <td>{el.fathername}</td>
                                            <td>{el.fathername}</td>
                                            <td>{el.fathername}</td>
                                            <td><Link className="site-main__link" to={"/"}>Подроробне</Link></td>
                                        </tr>
                                    </Fragment>
                                )
                            })
                        }
                           
                            
                    </tbody>
                </table>
            </main>
        </>
    )
}
export default Main;