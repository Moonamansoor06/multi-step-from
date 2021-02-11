import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

import {
  Grid,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  Button,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: '450px',
            display: 'block',
            margin: '0 auto',
        
        },
        textField: {
            '& > *': {
                width: '100%',
            },
        },
        submitButton: {
          marginTop: '24px',
          alignSelf:'center'
      },
        title: { textAlign: 'center' },
        successMessage: { color: 'green' },
        errorMessage: { color: 'red' },
    })
)
const PaymentForm: React.FunctionComponent =   () => {
  const [value, setValue] = React.useState('Cash');


  const handleChange = (event:any) => {
    setValue(event.target.value);
    
  };

  
  const classes = useStyles()


  return (
    <div className={classes.root}>
    <h1 className={classes.title}>Payment Form</h1>
    <Formik
      initialValues={{
        picked: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <React.Fragment >
          <Grid container style={{   justifyContent:'center', alignItems:'center'}}>
        <Form >
        <Grid item className={classes.textField}>

        <FormControl component="fieldset">
        <RadioGroup value={value} onChange={handleChange}>
        <FormControlLabel  control={<Radio  value="Cash" onClick={()=>{values.picked='Cash'}}/>} label="Cash" />
        <FormControlLabel   control={<Radio value="Card"/>} label="Card" onClick={()=>{values.picked='Card'}} />
    </RadioGroup>
    <div>Picked: {values.picked}</div>
    </FormControl>
    </Grid>
            
            
        
          
           
          
          
                                    
                                
        </Form> </Grid></React.Fragment>
      )}
    </Formik>
    </div>

);
      

}
export default PaymentForm






