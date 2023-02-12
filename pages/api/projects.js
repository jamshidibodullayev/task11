import teamsBacked from "@/data/teamsBacked";
import projectsBackend from "@/data/projectsBackend";


export default function handler(req, res) {
    res.status(200).json(projectsBackend);
}