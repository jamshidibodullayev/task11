import teamsBacked from "@/data/teamsBacked";
import employeesBackend from "@/data/employeesBackend";


export default function handler(req, res) {
    res.status(200).json(employeesBackend);
}