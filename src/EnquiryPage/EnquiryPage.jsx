import React,{ Component } from "react";
import AddressForm from "./AddressForm";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles=theme=>({
    
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(800 + theme.spacing.unit * 2 * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper:{
        marginTop: theme.spacing.unit * 10,
        marginBottom: theme.spacing.unit * 10,
        padding: theme.spacing.unit * 5,
        [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 15,
            marginBottom: theme.spacing.unit * 15,
            padding: theme.spacing.unit * 3,
        },
    }
})


class EnquiryPage extends Component
{
    render(){
        const{classes}=this.props;
        return (
            <div className={classes.layout}>
            <Paper className={classes.paper} elevation={2}>
            <Typography variant="display1">
             Enquiry Form
            </Typography>
            <AddressForm />
            </Paper>
            </div>)
        }
    }
    EnquiryPage.propTypes={
        classes:PropTypes.object.isRequired,
    }
    export default withStyles(styles)(EnquiryPage);