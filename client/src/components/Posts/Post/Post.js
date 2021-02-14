import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const defaultPic = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>

		<div className={classes.overlay}>
        	<Typography variant="h6">{post.creator}</Typography>
        	<Typography variant="p" className="textSecondary">{moment(post.createdAt).fromNow()}</Typography>
      	</div>
      	
      	<CardMedia className={classes.media} image={post.title || defaultPic} />

		  	<div className={classes.overlay2}>
        		<Button size="small" color="primary" onClick={() => setCurrentId(post._id)}><EditIcon fontSize="small" /> Edit </Button>
      		</div>
      		
			<div className={classes.details}>
        		<Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      		</div>
      		
			<CardContent>
        		<Typography variant="body2" component="h5">{post.message}</Typography>
      		</CardContent>
      		
			<CardActions className={classes.cardActions}>
        		<Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        		<Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      		</CardActions>
    </Card>
  );
};

export default Post;
