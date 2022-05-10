import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import { useEffect,useState } from "react"
import { Navigate, useNavigate } from "react-router"
import { Button, Typography } from "@mui/material"
import axios from "axios";
export const UserData = ()=>{
const [user,setUser] = useState([])
const [repo,setRepo] = useState([])
    const {userData,auth} = useSelector((store) => store)
    const navigate = useNavigate()
    if(!auth){
        return <Navigate to="/login" />
    }
  
    useEffect(() => {
        const userGit = async () => {
            // setLoading(true);
            const res = await axios.get("https://api.github.com/users/manu-2509");
            // setProduct(res.data.sandlasdata);
            // setLoading(false)
            console.log(res)
            setUser(res.data)
        }
        userGit()
    }, []);

    console.log("user;",user)
    return(
        <Box sx={{width:"fit-content",m:"auto",p:2,mt:"100px",borderRadius:2,bgcolor:"#ffffff",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}  >
        <h1>{user.name}</h1>
         <img src={user.avatar_url}></img>
         <p>Bio:{user.bio}</p>
         <p>Location:{user.location}</p>
         <p>Public Repos:{user.public_repos}</p>
         <p>Folowers:{user.followers}</p>
         <p>Following:{user.following}</p>
        </Box>
    )
}
