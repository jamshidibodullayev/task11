import projectsBackend from "@/data/projectsBackend";
import {employeesData} from "@/components/Data";


export default function handler(req, res) {
    const id=req.query.employees;
    console.log(req);


    let find = employeesData.find(value =>  value.id == id);

    res.status(200).json(find);
}