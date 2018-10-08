import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const styles = {
  root:{
    '&:focus': {
      outline:"none",
      border:"none"
   },
  },
  card: {
    width: 345, 
    display:"inline-block",
    margin:20,
    height:400
  },
  media: {
    width:345,
    height:200,
    backgroundSize:"contain",
    backgroundColor:"white"
  },
  text:{
    width:300,
    textAlign:"left",
    whiteSpace:"nowrap",
     overflow:"hidden",
     textOverflow:"ellipsis"
  },
  description:{
    textAlign:"justify",
  }
};


class MediaCard extends Component {

  render(){
  const { classes,data } = this.props;
  const BASE_URL="http://172.18.3.90:3001"
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={BASE_URL+data.image.url}
          title={data.name}
        />
        <CardContent className={classes.root}>
          <Typography className={classes.text} gutterBottom variant="display2">
           {data.name}
          </Typography>
          <Typography component="h1" className={classes.description} variant="title">
            {data.description.length<=180?data.description:data.description.substr(0,180)+' ...'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" variant="contained" color="secondary" onClick={()=>{
          this.props.changeId(data.id);
        }} component={Link} to={{pathname:'/carDetail',state:data.id}} >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
