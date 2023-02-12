import Layaut2 from "@/components/Layaut2";
import {useRouter} from "next/router";
import Typography from "@mui/material/Typography";
import {projectsData, teamsData} from "@/components/Data";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {getEmployeeById, getProjectById, getProjects, getTeamById} from "@/components/api";


export default function Projects(props) {

    const [project, setProject]=useState(props.project);
    const [team, setTeam]=useState(props.team);

    const router=useRouter();
    const url=router.query.projects;

    console.log(props);


    console.log(project);
    console.log(team);

    // useEffect(()=>{
    //     getProjectById(url).then((res)=>{
    //         if (res.success){
    //             setProject(res.data)
    //         }
    //     });
    // }, []);
    //
    //
    //
    // useEffect(()=>{
    //     if (project){
    //         getTeamById(url).then((res)=>{
    //             if (res.success){
    //                 setTeam(res.data);
    //             }
    //         })
    //     }
    // }, [project]);





    const getTeamName=(teamId)=>{
        return  teamsData.map(value => {
            if (value.id===teamId){
                return value.name;
            }
        });

        return "Team mavjud emas";
    }


    return (
        <Layaut2>
            {project?
                <Box>
                    <Typography> Project nomi: {
                        project.name
                    }</Typography>
                    <Typography> Project qaysi guruhga tushgan: {getTeamName(project.teamId)}
                    </Typography>
                    <Typography>Project tavsifi:     {project.description}
                    </Typography>
                </Box>
                :<Typography>Project mavjud emas</Typography>
            }
        </Layaut2>
    );

}


export async function getServerSideProps(context){

    const res1= await getProjectById(context.query.projects);
    console.log(res1);


    const res2=await getTeamById(res1.data.directorId);
    console.log(res2);

    return {
        props:{project:res1.data, team:res2.data},
    }
}