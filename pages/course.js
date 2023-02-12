import Layout from "@/components/Layout";
import Typography from "@mui/material/Typography";
import {Card, Grid} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPersonChalkboard} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";


let courses=[
    {title:"JavaScript", icon:<FontAwesomeIcon icon={faPersonChalkboard}></FontAwesomeIcon>, path:"/javascript" },
    {title:"Python", icon:<FontAwesomeIcon icon={faPersonChalkboard}></FontAwesomeIcon>, path:"/python" },
    {title:"C#", icon:<FontAwesomeIcon icon={faPersonChalkboard}></FontAwesomeIcon>, path:"/csharp" },
    {title:"Java", icon:<FontAwesomeIcon icon={faPersonChalkboard}></FontAwesomeIcon>, path:"/java" }
]

export default function Course(callbackfn, thisArg) {
  const router=useRouter();

    return (
    <>
      <Layout>
          <Typography>Course</Typography>
          <Grid container sx={{mt:3}} spacing={2}>
              {courses.map((value, index) => {
                  return (
                      <Grid key={value.title} item xs={12} sm={6} md={3} >
                          <Card
                              onClick={()=>router.push("/course/"+value.path)}

                              sx={{
                              p: 3,
                              background: "#eb36d955",
                              textAlign: "center"
                          }}>
                              <Box sx={{
                                  mb: 2,
                                  width: 50,
                                  height: 50,
                                  borderRadius: "50%",
                                  background: "blue",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  marginInline: "auto",
                                  '& svg':{
                                      color:"white"
                                  }
                              }}>
                                  {value.icon}
                              </Box>
                              <Typography variant={"h6"}>{value.title}</Typography>
                          </Card>
                      </Grid>
                  )})}
          </Grid>
      </Layout>

    </>
  )
}
