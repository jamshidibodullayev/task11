import {Dashboard} from "@mui/icons-material";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookOpenReader, faClipboard,
    faGraduationCap,
    faPeopleGroup,
    faPersonBurst,
    faPersonChalkboard, faRectangleTimes, faTicket
} from "@fortawesome/free-solid-svg-icons";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ResultIcon from '@mui/icons-material/SnowmobileSharp';



const menu=[
    {title:"Dashboard", icon:<Dashboard/>, path:"/"},
    {title:"Overview", icon:<AccountBalanceIcon/>, path:"/overview"},
    {title:"Courses", icon:<FontAwesomeIcon icon={faBookOpenReader}/>, path:"/course"},
    {title:"Students", icon:<FontAwesomeIcon icon={faGraduationCap}/>, path:"/students"},
    {title:"Teachers", icon:<FontAwesomeIcon icon={faPersonChalkboard}/>, path:"/teachres"},
    {title:"Exam", icon:<FontAwesomeIcon icon={faClipboard}/>, path:"/exam"},
    {title:"Result", icon:<ResultIcon/>, path:"/result"},
    {title:"Videos", icon:<OndemandVideoIcon/>, path:"/videos"},
    {title:"Teams", icon:<FontAwesomeIcon icon={faPeopleGroup}/>, path:"/teams"},
    {title:"Employees", icon:<FontAwesomeIcon icon={faPersonBurst}/>, path:"/employees"},
    {title:"Projects", icon:<FontAwesomeIcon icon={faTicket}/>, path:"/projects"},
];

export default menu;