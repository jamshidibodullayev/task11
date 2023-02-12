import {createTheme} from "@mui/material";
import {orange} from "@mui/material/colors";

const theme=createTheme({
    palette:{
        primary: {main:"#fffff"}
    },
    status:{
        danger:orange[500]
    },
    // typography:{
    //     fontFamily: "'Rubik', 'sans-serif'", body1:{fontWeight:300}
    // }
});

export default theme;