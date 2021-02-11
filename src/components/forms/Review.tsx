import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

import {
  Grid,
 Checkbox,
  FormControlLabel,
 
  makeStyles,
  createStyles,
  Theme,
  Typography
} from '@material-ui/core'


const sleep = (ms:any) => new Promise((r) => setTimeout(r, ms));


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: '450px',
            display: 'block',
            margin: '0 auto',
        
        },
      
        title: { textAlign: 'center',display:'flexBox' },
   
    })
)
const Review = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event:any) => {
    setChecked(event.target.checked);
  };
  const classes = useStyles()
    return (
        <div>
         
            <Grid container className={classes.root}> 
            <div>
            <Grid item className={classes.title}>
                <Typography variant='body1'>
                    Your order is accepted, you will get delivery in seven days
                </Typography>
                </Grid>
                </div>
                <Formik
      initialValues={{
        
        checked: false,
      }}
      onSubmit={async (values) => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
    
        <Grid item className={classes.title}>
        <Form>
        <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange}  />}
        label="Subscribe email" />
        </Form>
        </Grid>
      )}
    </Formik>

            </Grid>
        </div>
    )
}

export default Review

