import ListItem from '@mui/material/ListItem';
import {styled} from "@mui/system";



const MyListItem=styled(ListItem)(({theme})=>({
    "& span":{
        fontWeight:"400 !important",
    },

    transaction: "0.3s",

    "&:hover, &.active": {
            color:"white",
            background:`linear-gradient(to right top, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
            "& svg":{
                color: "white"
            }
    },
}));


export default MyListItem;