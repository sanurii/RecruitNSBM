import { Box, makeStyles } from "@material-ui/core";
import {
  Button,
  Card,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Field, Formik } from "formik";
import { useState } from "react";
import { useSnackbar } from 'notistack';
const useStyles = makeStyles((theme) => ({
  card: {
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
  },
  titleContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  company: {
    color: "#017143",
    fontWeight: "600",
    marginRight: "8px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  uploadCVTitle: {
    color: "#017143",
    fontWeight: "600",
    marginRight: "8px",
    marginBottom:'3%',
    textDecoration: "none",
    "&:hover": {
      color: 'black',
    },

  },
  jobTitle: {
    fontWeight: "600",
  },
  description: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "14px",
    marginBottom: "16px",
  },
  skills: {
    marginBottom: "8px",
    fontStyle: "italic",
  },
  skill: {
    color: "#28a745",
    fontWeight: "600",
    marginRight: "8px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  detail: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "14px",
  },
  bullet: {
    display: "inline-block",
    marginRight: "8px",
    "&::before": {
      content: '""',
      display: "inline-block",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#017143",
    },
  },

  applyBtn:{
    color: "#fff",
    fontWeight: "600",
    marginRight: "30%",
    marginLeft: '30%', 
    marginBottom:'1%',
    backgroundColor: '#017143',
    // "&:hover": {
    //   backgroundColor: '#61876E',
    //   color: 'black'
    // },

  }
}));

export function JobCard(props) {
  const classes = useStyles();
  const [applyBtn , setApplyBtn] = useState(true);
  const{enqueueSnackbar} = useSnackbar();

  const sendFile = async (fromData) => {
   
    // const dataInForm = formData;
    console.log(fromData);
    setApplyBtn(!applyBtn);
   
      enqueueSnackbar("Uploaded Successfully", { variant: 'success' });
    
    // setApplyBtn(!)
    try {
      
    } catch (err) {
      const error = err?.response?.data?.err || err?.message;
      console.log(error);
      enqueueSnackbar(error, { variant: 'error' });
    }

  }

  return (
    <Card className={classes.card}>
      {applyBtn == true ? (
      <>
         <Container className={classes.titleContainer}>
        <a href={props.companyUrl} className={classes.company}>
          {props.company}
        </a>
        <Typography variant="body2" className={classes.jobTitle}>
          {props.jobTitle}
        </Typography>
      </Container>
      <Typography variant="body1" className={classes.description}>
        {props.description}
      </Typography>
      <Container className={classes.skills}>
        <Typography variant="body2">Skills :</Typography>
        <List dense>
          {props.skill.map((item) => (
            <ListItem key={item} className={classes.detail}>
              <span className={classes.bullet}></span>
              {item}
            </ListItem>
          ))}
        </List>
      </Container>
      <Typography variant="body2" className={classes.detail}>
        Job Time: {props.jobStatus}
      </Typography>
      <Typography variant="body2" className={classes.detail}>
        Job Type: {props.jobType}
      </Typography>
      <Typography variant="body2" className={classes.detail}>
        Job Field: {props.feild}
      </Typography>
      <Typography variant="body2" className={classes.detail}>
        Position: {props.position}
      </Typography>
      {props.typeStat === true ? (
        <Button
          onClick={()=>{setApplyBtn(!applyBtn)}}
          className={classes.applyBtn}
          variant="contained"
        >Apply To Job</Button>
      ) : (
        <Container>
                {/* <Button color='error' variant='contained' sx={{marginRight: '5%' , marginTop: '3%'}}>Delete Job</Button> */}
                
                <Button  color='success' variant='contained' sx={{marginRight: '5%' , marginTop: '3%'}} >View Applicants</Button>
        </Container>
   
      )}
      
      </>
      ):(<>
        
        <Formik
        initialValues={{file:null}}
        onSubmit={sendFile}
        >
          {({values, handleChange, handleSubmit}) => {

            return(
              <>
               <Typography variant="h5" className={classes.uploadCVTitle}>Upload Your CV</Typography>
              <Field name="file" type="file" />


              <Button
                  onClick={() => handleSubmit()}
                  type="submit"
                  variant="contained"
                  style={{marginTop: '20px' , marginLeft:'20%' , marginRight: '20%'}}
                >
                  Submit
                </Button>
              </>
            );
          }}


        </Formik>

      </>)}
     
    </Card>
  );
}
