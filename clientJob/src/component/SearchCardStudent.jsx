import { Card, Container, InputAdornment, List, ListItem, TextField } from "@mui/material";
import { Box, Typography, makeStyles } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from '../component/AuthProvider';
import { StarRating } from "./startRating";


const useStyle = makeStyles((theme) => ({ 
    root:{

        borderRadius: "16px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        padding: "16px",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
        boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
        },
        marginTop: "2rem",
        width: '50%' , 
        paddingLeft: '2%' , 
        marginLeft: '10%' ,
        height:'90vh'

    }, 
    
    searchBar:{
        // marginLeft: '20px',
        // // paddingLeft:'20%'
        // marginRight: '10%'
        textAlign: 'center'
    },
    searchBarTitle:{
        // marginLeft: '20px',
        // // paddingLeft:'20%'
        // marginRight: '10%'
        color: '#CDCDCD'

    },
    searchBarHeading:{
        marginTop: '2%' , 
        marginBottom: '2%',
        color: '#017143', 
        fontWeight: 500,
        fontFamily: 'Helvetica'
    }



 }));

export function StudentCard(props){
    const classes = useStyle();
    const token = useContext(AuthContext);
    const { enqueueSnackbar } = useSnackbar();
    const [userData , setUserData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        try {
          const currentUser = async () => {
            try {
              const response = await fetch("http://localhost:3000/getallusers", {
                headers: {
                  Authorization: "Bearer " + token.token,
                },
              });
      
              if (response.ok) {
                const data = await response.json();
                // setUserName(data.email);
                // console.log(data);
                // data.map((item) => (

                // ));
                var majorData = [];
                data.map(item => {
                    // console.log(item);
                    if(item?.major) {
                        majorData.push(item);
                    } 
                });
                console.log(majorData);
                setUserData(majorData);
                enqueueSnackbar("Data Got Success", { variant: "success" });
  
              } else {
                throw new Error("Request failed with status: " + response.status);
              }
            } catch (error) {
              // Handle error
              console.error(error);
              enqueueSnackbar(error.message, { variant: "error" });
            }
          };
      
          if (token) {
            currentUser();
          }
        } catch (err) {
          // enqueueSnackbar(err, { variant: "error" });
        }
      }, [token]);

    /// props.select = true - admin
    //  props.select = false - job Recruiter
    return(<>
        <Card className={classes.root}>
            <Typography variant="h6" className={classes.searchBarHeading}>Bring forth the employee who excels above all others.</Typography>
            <Container className={classes.searchBar}>
                <Typography className={classes.searchBarTitle} >Ex : "Software Engineering"</Typography>
                <TextField
                    // id="input-with-icon-textfield"
                    label=""
                    // value=""
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    variant="standard"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                        
                    ),
                    }}
                />
            </Container>
            
            <List>
            {userData.filter((val) => {
                if (searchTerm === "" || searchTerm === " " ) {
                    return null;
                } else if (
                    //need to change due to registration change of User
                    val.major.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                    return val;
                }
                }).map(item=>(
                    <ListItem key = {item}><Typography sx={{marginRight: '5%'}}>{item.fname}{item.lname}</Typography>  <StarRating star={3}/> </ListItem> 
                ))}
            </List>
            
        {/* <h1>Test Card</h1> */}
        
        
        </Card>    
    </>);


}