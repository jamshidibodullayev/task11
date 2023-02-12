import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Avatar, Grid} from "@mui/material";
import Chart from "@/components/Chart";


const dataFaceInfo=[
    {img:"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", title:"Ellie joined team developers", date:"04 April, 2021 | 04:00 PM"},
    {img:"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", title:"Jenny joined team HR", date:"04 April, 2021 | 04:00 PM"},
    {img:"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", title:"Adam got employee of the month", date:"03 April, 2021 | 02:00 PM"},
    {img:"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", title:"Robert joined team design", date:"02 April, 2021 | 02:00 PM"},
    {img:"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", title:"Jack joined team design", date:"01 April, 2021 | 03:00 PM"},
];

const data1=[
    {title:"Marketing", color:"#FABE7A", height:"15px", total:1, code:"a"},
    {title:"HR", color:"#F6866A", height:"50px", total:5, code:"b"},
    {title:"Developers", color:"#59E6F6", height:"35px", total:3, code:"c"},
    {title:"Design", color:"#7661E2", height:"80px", total:10, code:"d"},
];


const data2=[
    {title:"Inactive", color:"#6956E5", total:154},
    {title:"Active", color:"#FB896B", total:3000},
    {title:"Total", color:"#F8C07F", total:3254},

];

export default function Main() {
    return (
        <Box display={"flex"} gap={"20px"} flexDirection={"column"}>
            <Box display={"flex"} gap={"15px"}>
                <Box width={"75%"} display={"flex"} gap={"15px"}>
                    <Box width={"50%"} sx={{border: "1px solid #E6E8EC",borderRadius: "10px"}} padding={"20px"} display={"flex"} justifyContent={"center"} flexDirection={"column"} gap={1}>
                        <Typography fontWeight={"bold"}>
                            Teams Strength
                        </Typography>
                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"flex-end"}>
                            {data1.map(value => {
                                return (
                                    <Box key={value.title} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                                        <Typography>{value.total}</Typography>
                                        <div style={{background: value.color, borderRadius: "8px 8px 0px 0px", width: "88px", height: value.height}}></div>
                                        <Typography>{value.code}</Typography>
                                    </Box>
                                )
                                }

                            )}
                        </Box>

                        <Box>
                            <Grid container spacing={2}>
                                {data1.map(value => {
                                    return (
                                        <Grid key={value.title} item sx={{display:"flex", gap:"10px"}} xs={6}>
                                            <div style={{width:"25px", height:"25px", background:value.color, textAlign:"center"}}>{value.code}</div>
                                            <Typography>{value.title}</Typography>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                        </Box>

                    </Box>
                    <Box width={"50%"} sx={{border: "1px solid #E6E8EC",borderRadius: "20px", padding:"20px"}}>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Typography fontWeight={"bold"}>Employees</Typography>
                            <Typography>Aug 25-Sept 25</Typography>
                        </Box>

                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Box>
                                {data2.map(value=>{
                                    return (
                                        <Box key={value.title}>
                                            <Box display={"flex"} alignItems={"center"} gap={1} >
                                                <div style={{background:value.color, width:"10px", height:"10px", borderRadius:"100px"}}>
                                                </div>
                                                <Typography>{value.title}</Typography>
                                            </Box>
                                            <Typography fontWeight={"bold"} fontSize={"28px"}>{value.total}</Typography>
                                        </Box>
                                    );
                                })}
                            </Box>
                            <Box>
                                <svg width="215" height="215" viewBox="0 0 215 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="107.5" cy="107.5" r="29.5" fill="#FABE7A"/>
                                    <g clip-path="url(#clip0_2_132)">
                                        <rect width="59" height="59" rx="29.5" transform="matrix(-1 0 0 1 137 78)" fill="#FABE7A"/>
                                        <path d="M111.545 122.963C110.078 120.524 106.71 115.849 98.6907 109.279C86.5897 99.3659 98.0106 90.2985 110.28 95.1277C111.592 95.6444 115.23 93.5761 118.599 95.7551C120.772 97.1607 119.926 98.2623 120.772 99.3639C121.619 100.466 124.881 100.401 125.596 103.261C126.019 104.956 124.848 106.731 125.004 108.006C125.161 109.282 126.398 110.432 126.457 112.116C126.482 112.827 126.367 113.536 126.119 114.203C125.87 114.87 125.493 115.481 125.008 116.002C124.523 116.523 123.94 116.943 123.293 117.239C122.645 117.534 121.946 117.7 121.235 117.725C121.229 119.131 120.68 120.48 119.703 121.491C118.725 122.502 117.395 123.095 115.99 123.148C115.089 123.181 114.194 122.987 113.388 122.585C112.587 123.322 111.9 123.554 111.545 122.963Z" fill="url(#paint0_linear_2_132)"/>
                                        <path d="M108.545 94.5277C110.632 95.8658 113.212 100.255 112.08 106.146C111.832 107.432 112.605 107.816 113.265 106.231C115.258 101.447 115.49 97.133 112.08 95.0694C111.487 94.7125 111.148 95.0016 110.725 94.9666C109.919 94.8998 108.835 94.3292 108.545 94.5277Z" fill="url(#paint1_linear_2_132)"/>
                                        <path d="M111.256 120.444C111.256 118.919 111.307 111.4 111.305 111.273C115.49 111.89 115.406 103.929 111.171 105.877C110.239 106.469 107.614 105.877 107.868 100.964C103.294 105.877 97.9846 100.147 97.5293 104.816C96.9075 111.191 97.5331 117.862 101.495 117.863C101.928 117.857 102.36 117.814 102.786 117.734V120.444C102.786 122.138 99.7373 122.985 99.7373 122.985C99.7373 122.985 105.004 127.948 107.19 127.92C109.377 127.893 114.305 122.985 114.305 122.985C114.305 122.985 111.256 122.138 111.256 120.444Z" fill="url(#paint2_linear_2_132)"/>
                                        <g>
                                            <path d="M102.786 117.733C104.888 117.267 106.879 116.398 108.65 115.175C108.65 115.175 107.189 118.748 102.792 119.426L102.786 117.733Z" fill="#FFDBC9"/>
                                        </g>
                                        <path d="M91.4377 128.066C90.2088 130.797 89.5745 139.076 89.5745 139.076H124.468C124.468 139.076 123.834 130.797 122.605 128.066C121.528 125.674 114.434 122.927 112.355 122.138C111.154 123.481 109.434 124.34 107.021 124.34C104.609 124.34 102.888 123.481 101.688 122.138C99.6088 122.927 92.5144 125.674 91.4377 128.066Z" fill="url(#paint3_linear_2_132)"/>
                                    </g>
                                    <circle cx="107.5" cy="107.5" r="54" stroke="url(#paint4_linear_2_132)" stroke-width="3"/>
                                    <circle cx="107.308" cy="107.782" r="80" transform="rotate(85.3939 107.308 107.782)" stroke="url(#paint5_linear_2_132)" stroke-width="3"/>
                                    <circle cx="107.5" cy="107.5" r="106" stroke="url(#paint6_linear_2_132)" stroke-width="3"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_2_132" x1="110.586" y1="123.351" x2="109.542" y2="93.5691" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#E6864E"/>
                                            <stop offset="1" stop-color="#E67240"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_2_132" x1="111.63" y1="94.486" x2="111.63" y2="107.272" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#1D0024"/>
                                            <stop offset="1" stop-color="#100014"/>
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_2_132" x1="105.859" y1="100.964" x2="105.859" y2="127.92" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FFE0CC"/>
                                            <stop offset="1" stop-color="#FFEADB"/>
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_2_132" x1="107.021" y1="122.138" x2="107.021" y2="139.076" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#130027"/>
                                            <stop offset="1" stop-color="#130017"/>
                                        </linearGradient>
                                        <linearGradient id="paint4_linear_2_132" x1="95.5" y1="107" x2="85" y2="56.5" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#6956E5" stop-opacity="0"/>
                                            <stop offset="0.976403" stop-color="#6956E5"/>
                                        </linearGradient>
                                        <linearGradient id="paint5_linear_2_132" x1="83.0833" y1="146.963" x2="74.2675" y2="32.8897" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FB896B" stop-opacity="0"/>
                                            <stop offset="1" stop-color="#FB896B"/>
                                        </linearGradient>
                                        <linearGradient id="paint6_linear_2_132" x1="41" y1="47" x2="56.5" y2="203" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F8C07F" stop-opacity="0"/>
                                            <stop offset="1" stop-color="#F8C07F"/>
                                        </linearGradient>
                                        <clipPath id="clip0_2_132">
                                            <rect width="59" height="59" rx="29.5" transform="matrix(-1 0 0 1 137 78)" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box width={"25%"} display={"flex"} flexDirection={"column"} textAlign={"center"} gap={"20px"}>
                    <Box sx={{background:"#FFF0E6", padding:"4px", borderRadius:"10px"}} >
                        <Typography>Top 10</Typography>
                        <Typography>Position in dribbble</Typography>
                        <Typography>20% Increase from Last Week</Typography>
                    </Box>
                    <Box sx={{background:"#ECEAFE", padding:"4px", borderRadius:"20px"}}>
                        <Typography>26</Typography>
                        <Typography>New employees onboarded</Typography>
                        <Typography>15% Increase from Last Month</Typography>
                    </Box>
                    <Box sx={{background:"#E5F7FF", padding:"4px", borderRadius:"10px"}}>
                        <Typography>500</Typography>
                        <Typography>New Clients Approached</Typography>
                        <Typography>5% Increase from Last Week</Typography>
                    </Box>
                </Box>
            </Box>
            <Box display={"flex"} gap={"20px"}>
                <Box width={"75%"} sx={{boxShadow: "0px 4px 39px 9px rgba(81, 69, 159, 0.09)",
                    borderRadius: "10px", height:'290px'}} display={"flex"} justifyContent={"center"}>
                    <Box display={"flex"} justifyContent={"center"}>
                        <Chart></Chart>
                    </Box>
                </Box>
                <Box width={"25%"}>
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography>Notification</Typography>
                        <a>View All</a>
                    </Box>

                    <Box display={"flex"} flexDirection={"column"} gap={2}>
                        {dataFaceInfo.map(value => {
                            return (
                                <Box key={value.title} sx={{background:"#F9F9F9"}} display={"flex"} gap={3} alignItems={"center"}>
                                    <img src={value.img} width={"36px"}/>
                                    <Box>
                                        <Typography sx={{fontWeight:"400"}} fontSize={"14px"}>{value.title}</Typography>
                                        <Typography fontSize={"10px"}>{value.date}</Typography>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}