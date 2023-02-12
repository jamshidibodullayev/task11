import Layout from "@/components/Layout";
import Typography from "@mui/material/Typography";
import {useRouter} from "next/router";


export default function Course() {
    const router=useRouter();


    return (
        <Layout>
            <Typography>
                Course:{router.query.course}
            </Typography>
        </Layout>
    );
}