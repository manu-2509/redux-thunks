import { Button, Typography ,TextField} from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { AUTHBUTTON } from "./logicbutton"
import { LogoutBUTTON } from "./Logout"

export const Nav = ()=>{
    const {userData,auth} = useSelector((store) => store)

    const navigate = useNavigate()
    return (
        <Box sx={{display: 'flex',justifyContent:"space-evenly",bgcolor:"#161b22",alignItems: 'center'}} position="sticky">
            <Button sx={{bgcolor: "#000000", m: 1, color: "#f2f2ff"}} onClick={() =>navigate("/Dashboard")}>Home</Button>
            <span><TextField  sx={{bgcolor:"white" , width:"300px"}} /><Button sx={{bgcolor:"black",color:"white",borderRadius:"10%",marginTop:"10px"}}>Search</Button></span>
            <div>
               {!auth?<AUTHBUTTON/>:<LogoutBUTTON/>}
             
            </div>
           <Typography sx={{color:"white"}}>Hi  {userData.name?userData.name:""}</Typography> 
        </Box>
    )
}