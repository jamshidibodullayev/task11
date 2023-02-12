import ListItem from '@mui/material/ListItem';
import {styled} from "@mui/system";



const MyListItem2=styled(ListItem)(({theme})=>({
    "& span":{
        fontWeight:"400 !important",
    },

    transaction: "0.3s",

    "&:hover, &.active": {
            color:"white",
            background:"#6956E5",
            "& svg":{
                color: "white"
            }
    },
}));


export default MyListItem2;