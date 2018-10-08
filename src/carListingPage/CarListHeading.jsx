import React,{Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from "@material-ui/core/Typography";

const styles= theme=>{
    return {
      heroUnit:{
        backgroundColor:theme.palette.background.paper
             },
      heroContent:{
      maxWidth:600,
      margin:'0 auto',
      padding:`${theme.spacing.unit * 12}px 0 ${theme.spacing.unit * 6}px`
    },
    }         
}

class CarListHeading extends Component
{
  render()
  {
    const { classes } = this.props;
      return <React.Fragment>
            <CssBaseline/>
              <main>
                <div className={classes.heroContent}>
              <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                  Listed Cars 
              </Typography>
            <Typography variant="display1" align="center" color="textSecondary" gutterBottom>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            </div>
              </main>   
          </React.Fragment>
  }
}
export default withStyles(styles)(CarListHeading);