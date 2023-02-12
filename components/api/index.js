import axios from "axios";


const BaseUrl="http://localhost:3000/api";



export const getTeamsAndProjects=async ()=>{
    try {
        const res=await axios.get(BaseUrl);
        return {success: true, data:res.data};
    }catch (error){
        return {success:false, data:"error"}
    }
}

export const getTeams=async ()=>{
    try {
        const res=await axios.get(BaseUrl+"/teams");
        return {success: true, data:res.data};
    }catch (error){
        return {success:false, data:"error"}
    }
}

export const getTeamById=async (id)=>{
    try {
        const res=await axios.get(`${BaseUrl}/teams/${id}`);
        // const res=await axios.get("http://localhost:3000/api/teams/1");

        return {success: true, data:res.data};
    }catch (error){
        return {success:false, data:"error"}
    }
}


export const getEmployees=async ()=>{
    try {
        const res=await axios.get(BaseUrl+"/employees");
        return {success: true, data:res.data};
    }catch (error){
        return {success:false, data:"error"}
    }
}

export const getEmployeeById=async (id)=>{
    try {
        const res=await axios.get(BaseUrl+"/employees/"+id);
        return {success: true, data:res.data};
    }catch (error){
        return {success:false, data:"error"}
    }
}


export const getProjects=async ()=>{
    try {
        const res=await axios.get(BaseUrl+"/projects");
        return {success: true, data:res.data};
    }catch (error){
        return {success:false, data:"error"}
    }
}

export const getProjectById=async (id)=>{
    try {
        const res=await axios.get(BaseUrl+"/projects/"+id);
        return {success: true, data:res.data};
    }catch (error){
        return {success:false, data:"error"}
    }
}

