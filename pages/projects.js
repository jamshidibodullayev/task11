import Layout from "@/components/Layout";
import Typography from "@mui/material/Typography";
import Layaut2 from "@/components/Layaut2";
import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import {Button, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import {projectsData, teamsData} from "@/components/Data";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getEmployees, getProjects, getTeams, getTeamsAndProjects} from "@/components/api";

export default function Projects(props) {
    const [projects, setProjects]=useState(props.projects);
    const [teams, setTeams]=useState(props.teams);
    console.log(props);


    // useEffect(()=>{
    //     // getProjects().then((res)=>{
    //     //     if (res.success){
    //     //         setProjects(res.data);
    //     //     }
    //     // });
    //     //
    //     // getTeams().then((res)=>{
    //     //     if (res.success){
    //     //         setTeams(res.data);
    //     //     }
    //     // });
    //     getTeamsAndProjects().then((res)=>{
    //         if (res.success){
    //             setTeams(res.data.teams);
    //             setProjects(res.data.projects);
    //         }
    //     })
    // }, []);


    const router=useRouter();


    const getTeamName=(teamId)=>{
       return teams.map(value => {
            if (value.id===teamId){
                return value.name;
            }
        });

       return "Team mavjud emas";
    }


    let index=0;




    return (
        <Layaut2>
            <Typography variant={"h6"}>
                Projects
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Tartib raqami</TableCell>
                            <TableCell>Nomi</TableCell>
                            <TableCell>Team</TableCell>
                            <TableCell align={"center"}>
                                Amallar
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.map(value => {
                            return (
                                <TableRow
                                    key={value.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {++index}
                                    </TableCell>
                                    <TableCell>{value.name}</TableCell>
                                    <TableCell>{getTeamName(value.teamId)}</TableCell>
                                    <TableCell align="center">
                                        <Button variant={"contained"} color={"success"} onClick={()=>{router.push("/projects/"+value.id)}}>Ko`rish</Button>
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
    const res=await getTeamsAndProjects();

    return {
        props:{teams:res.data.teams, projects:res.data.projects},
    }
}