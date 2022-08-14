import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import './Imagecard.css'

const ImageCard = ({ post }) => {
  return (
    <div className="webinar__card">
      <div className="webinar__card__container">
          <div className="webinar__card__image">
            <CardMedia
              component="img"
              height="115"
              image={post.postLink}
              alt="org image"
              className="img"              
            />
          </div>
          <div className="webinar__card__webinar_info">
            <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
              <Typography gutterBottom variant="p" component="div">
                Media Id : {post.mediaId}
                <br />
                When : {post.date} <br />
                Likes : {post.likesCount} <br />
                Comment : {post.commentCount} <br />
              </Typography>
            </CardContent>
          </div>
      </div>
    </div>
  );
};

export default ImageCard;
