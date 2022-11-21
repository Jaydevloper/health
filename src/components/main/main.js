import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Contextvalue } from "../../context/context";
function Main(){

const data =[
    {
        id:1,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva",
        admin_name: "Toshkent shahri"
    },
    {
        id:2,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva",
        admin_name: "Buxoro",

    },
    {
        id:3,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva",
        admin_name: "Samarqand",
    },
    {
        id:4,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva",
        admin_name: "Namangan",

    },
    {
        id:5,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva",
        admin_name: "Farg‘ona",

    },
    {
        id:6,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva",
        admin_name: "Surxondaryo",
    },
    {
        id:7,
        name:"Faloncha",
        surname:"Falonchayev",
        fathername:"Falonchayeva",
        admin_name: "Qoraqalpog‘iston Respublikasi",
    },
]
const {filter} = React.useContext(Contextvalue )
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Bemor</TableCell>
                <TableCell align="right">Region</TableCell>
                <TableCell align="right">Adress</TableCell>
                <TableCell align="right">Viloyat</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data?.map(row =>{
                  if (row.admin_name.includes(filter) && filter){
                    return (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell align="right">{row.name}</TableCell>
                          <TableCell align="right">{row.name}</TableCell>
                          <TableCell align="right">{row.name}</TableCell>
                          <TableCell align="right">{row.admin_name}</TableCell>
                        </TableRow>
                    );
                  }
                  else if (!filter || filter=== "ВСЕ"){
                    return (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.admin_name}</TableCell>
                      </TableRow>
                    );
                  }
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
}
export default Main;