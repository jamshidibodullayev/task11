import Layout from "@/components/Layout";
import Layaut2 from "@/components/Layaut2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {Button, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {employeesData, teamsData} from "@/components/Data";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getEmployees, getTeams, getTeamsAndProjects} from "@/components/api";



export default function Teams(props) {
    const [teams, setTeams]=useState(props.teams);
    const [employees, setEmployees]=useState(props.employees);

     // useEffect(()=>{
     //     getTeamsAndProjects().then((res)=>{
     //         if (res.success){
     //             setTeams(res.data.teams);
     //         }
     //     })
     //
     //
     //     getEmployees().then((res)=>{
     //         if (res.success){
     //             setEmployees(res.data)
     //         }
     //     });
     // }, []);


    const router=useRouter();

    let index=0;


    const getDirector=(id)=>{
       return employees.map((value)=>{
            return value.id===id&&value.firstName+" "+value.lastName;
        });
        return "Rahbar topilmadi"
    }


    return (
        <Layaut2>
            <Typography variant={"h6"}>Teams</Typography>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell width={"5%"}>Tartib raqami</TableCell>
                            <TableCell>Nomi</TableCell>
                            <TableCell>Rahbari</TableCell>
                            <TableCell align={"center"}>
                                Amallar
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teams&&teams.map(value => {
                            return (
                                <TableRow
                                    key={value.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {++index}
                                    </TableCell>
                                    <TableCell>{value.name}</TableCell>
                                    <TableCell>{getDirector(value.id)}</TableCell>
                                    <TableCell align="center">
                                        <Button variant={"contained"} color={"success"} onClick={()=>{router.push("/teams/"+value.id)}}>Ko`rish</Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>


        </Layaut2>
    );
}


export async function getStaticProps(context){
    console.log(context);
    const res1=await getTeams();
    const res2=await getEmployees();

    console.log(res1);
    console.log(res2);
    return {
        props:{teams:res1.data, employees:res2.data},
    }
}