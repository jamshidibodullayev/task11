import Layaut2 from "@/components/Layaut2";
import {useRouter} from "next/router";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import {useEffect, useState} from "react";
import {getEmployeeById, getTeamById, getEmployees, getTeams} from "@/components/api";


export default function Teams(props) {
    const [team, setTeam]=useState(props.team);
    const [employee, setEmployee]=useState(props.employee);
    const [employees, setEmployees]=useState(props.employees);


    const router=useRouter();

    const id=router.query.teams;






    // useEffect(()=>{
    //     getTeamById(id).then((res)=>{
    //         if (res.success){
    //             console.log(res);
    //             setTeam(res.data);
    //         }
    //     });
    // }, []);
    //
    // useEffect(()=>{
    //
    //     if (team){
    //         getEmployeeById(team.directorId).then((res)=>{
    //             if (res.data){
    //                 setEmployee(res.data);
    //             }
    //         });
    //
    //         getEmployees().then((res)=>{
    //             if (res.success){
    //                 setEmployees(res.data);
    //             }
    //         })
    //     }
    // }, [team]);
    //
    // console.log(team);

    const getDirector=(id)=>{
        return employee===undefined?"Rahbar mavjud emas":employee.firstName+" "+employee.lastName;
    }




    const getEmployeesIdList=(idList)=>{
        let members=[];

        employees.map((value)=>{
            return (
                idList.map((value2)=>{
                    if (value.id===value2){
                        members.push(value.firstName+" "+value.lastName)
                    }
                })
            )
        })
        return members.join(", ");
    }












    return (
        <Layaut2>
            {team?
                <Box>
                    <Typography>Guruh nomi: {team.name}</Typography>
                    <Typography>Guruh rahbari: {getDirector(team.directorId)}</Typography>
                    <Typography>Guruh a`zolari soni: {team.employees.length}</Typography>
                    <Typography>A`zolari: {getEmployeesIdList(team.employees)}</Typography>
                </Box>
                :<Typography>Team mavjud emas</Typography>}
        </Layaut2>
    );
}



export async function getServerSideProps(context){
    const resTeam= await getTeamById(context.query.teams);
    const resEmployee=await getEmployeeById(resTeam.data.directorId);
    const resEmployees=await getEmployees();

    return {
        props:{team:resTeam.data, employee:resEmployee.data, employees:resEmployees.data},
    }
}
