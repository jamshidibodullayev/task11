import teamsBacked from "@/data/teamsBacked";


export default function handler(req, res) {
    const id=req.query.teams;

    console.log(id);

    let find = teamsBacked.find(value => value.id==id);
    res.status(200).json(find);
}