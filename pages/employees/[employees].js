import Layaut2 from "@/components/Layaut2";
import {useRouter} from "next/router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {getEmployeeById, getEmployees} from "@/components/api";


export default function Employees(props) {
    const router=useRouter();

    const [employee, setEmployee]=useState(props.data);
    let id=router.query.employees;

    // useEffect(()=>{
    //     getEmployeeById(id).then((res)=>{
    //         if (res.success){
    //             setEmployee(res.data);
    //             console.log(res);
    //         }
    //     })
    // }, []);

    return (
        <Layaut2>
            {employee?
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Box width={"50%"}>
                        <Box display={"flex"} width={"100%"}>
                            <Typography sx={{border:"1px solid black", minWidth:"25%"}}>Ismi:</Typography>
                            <Typography sx={{border:"1px solid black", width:"50%"}}>{employee.firstName}</Typography>
                        </Box>

                        <Box display={"flex"} width={"100%"}>
                            <Typography sx={{border:"1px solid black", minWidth:"25%"}}>Familiyasi:</Typography>
                            <Typography sx={{border:"1px solid black", width:"50%"}}>{employee.lastName}</Typography>
                        </Box>

                        <Box display={"flex"} width={"100%"}>
                            <Typography sx={{border:"1px solid black", width:"25%"}}>Telifon raqami:</Typography>
                            <Typography sx={{border:"1px solid black", width:"50%"}}>{employee.phoneNumber}</Typography>
                        </Box>

                        <Box display={"flex"} width={"100%"}>
                            <Typography sx={{border:"1px solid black", width:"25%"}}>Roli:</Typography>
                            <Typography sx={{border:"1px solid black", width:"50%"}}>{employee.role}</Typography>
                        </Box>

                        <Box display={"flex"} width={"100%"}>
                            <Typography sx={{border:"1px solid black", width:"25%"}}>Tavsifi:</Typography>
                            <Typography sx={{border:"1px solid black", width:"50%"}}>{employee.description}</Typography>
                        </Box>

                    </Box>
                </Box>:
                <Typography color={"error"}>Ishchi mavjud emas</Typography>}
        </Layaut2>
    );
}


export async function getServerSideProps(context){
    console.log(context);
    const res= await getEmployeeById(context.query.employees);
    console.log(res);

    return {
        props:{data:res.data},
    }
}