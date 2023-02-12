import projectsBackend from "@/data/projectsBackend";


export default function handler(req, res) {
    const id=req.query.projects;

    let find = projectsBackend.find(value => value.id==id);

    res.status(200).json(find);
}