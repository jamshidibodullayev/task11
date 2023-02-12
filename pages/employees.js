import Layout from "@/components/Layout";
import Typography from "@mui/material/Typography";
import {employeesData} from "@/components/Data";



import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import {Button, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import {useRouter} from "next/router";
import Layaut2 from "@/components/Layaut2";
import {useEffect, useState} from "react";
import {getEmployees} from "@/components/api";


export default function Employees(props) {
    const [employees, setEmployees]=useState(props.data);


    // useEffect(()=>{
    //     getEmployees().then((res)=>{
    //         if (res.success){
    //             setEmployees(res.data);
    //         }
    //     })
    // }, []);

    const router=useRouter();

    let index=0;


    return (
        <Layaut2>
            <Typography variant={"h6"}>Employees</Typography>
            {employees?
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Tartib raqami</TableCell>
                                <TableCell>Ismi</TableCell>
                                <TableCell>Familiyasi</TableCell>
                                <TableCell align={"center"}>
                                    Amallar
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employees.map(value => {
                                return (
                                    <TableRow
                                        key={value.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {++index}
                                        </TableCell>
                                        <TableCell>{value.firstName}</TableCell>
                                        <TableCell>{value.lastName}</TableCell>
                                        <TableCell align="center">
                                            <Button variant={"contained"} color={"success"} onClick={()=>{router.push("/employees/"+value.id)}}>Ko`rish</Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>:
                <Typography>Ishchilar mavjud emas</Typography>}

        </Layaut2>
    );
}



export async function getStaticProps(context){
    const res= await getEmployees();

    return {
        props:{data:res.data},
    }
}