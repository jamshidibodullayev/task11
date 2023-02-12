import teamsBacked from "@/data/teamsBacked";


export default function handler(req, res) {
    res.status(200).json(teamsBacked);
}