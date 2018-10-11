import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";

const styles={
  root:{
    fontSize:"2rem"
  }
}


class AddressForm extends Component {
  
  constructor(props)
  {
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      carName:'',
      comments:''
    }
  }
  handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    this.setState({[name]:value});  
  }
  resetData()
  {
    this.setState({firstName:'',lastName:'',email:'',carName:'',comments:''})
  }
  validate()
  {
    if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
    &&(this.state.firstName.trim().length!==0)
    &&(this.state.lastName.trim().length!==0)
    &&(this.state.carName.trim().length!==0)
    &&(this.state.comments.trim().length>=50))
    {
      return true
    }
    else
    {
      return false
    }
  }
  submit=()=>{
           const res=this.validate();
           console.log('res',res);
           if(res)
           { 
              fetch('http://172.18.3.90:3000/api/v1/enquiries', {
                method: 'post',
                headers: {
                  'Content-Type':'application/json',
                  'Authorization':'Bearer connectwithapi'
                   },
                body: JSON.stringify({
                  description: 'Fetch API Post example',
                  public: true,
                  abc: {
                  "first_name": this.state.firstName,
                  "second_name":this.state.second_name,
                  "car_name":this.state.carName,
                  "email":this.state.email,
                  "comment":this.state.comments,
                  }
                })
              }).then(res => res.json())
              .then(response => console.log('Success:', JSON.stringify(response)))
              .catch(error => console.error('Error:', error)); 
              this.resetData();
          }
          else
          {
            alert("Incorrect input");
          }   
  }
  render()
  {
    console.log('state',this.state);
    const {classes}=this.props; 

    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              style={{fontSize:"40"}}
              value={this.state.firstName}
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoFocus={true}
              autoComplete="fname"
              classes={{root:classes.root}}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.lastName}
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
              onChange={this.handleChange}
            />
          </Grid> 
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.email}
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              onChange={this.handleChange}
              margin="none"
            />
          </Grid>   
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={this.state.carName}
              id="carName"
              name="carName"
              label="Car Name"
              fullWidth
              autoComplete="carname"
              onChange={this.handleChange}
            />
          </Grid>     
          <Grid item xs={12}>
            <TextField
              required
              value={this.state.comments}
              id="comments"
              name="comments"
              label="Comments"
              fullWidth
              multiline={true}
              onChange={this.handleChange}
              rows="6"
              variant="outlined"
              placeholder="Write Min.(50 Words)"
            />
          </Grid>
          <Button variant="contained" fullWidth color="primary" onClick={this.submit}>
           Submit
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
  
}

export default withStyles(styles)(AddressForm);
