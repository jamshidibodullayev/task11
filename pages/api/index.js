import projectsBackend from "@/data/projectsBackend";
import {teamsData} from "@/components/Data";
import teamsBackend from "@/data/teamsBacked";


export default function handler(req, res) {
    res.status(200).json({teams:teamsBackend, projects:projectsBackend});
}