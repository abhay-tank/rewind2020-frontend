import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./ProfileCard.module.scss";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardContent, Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

class ProfileCard extends Component {
  render() {
    let { firstName, lastName, company, imageUrl, userId } = this.props;
    return (
      <div className={styles["container"]}>
        <Card className={styles["card"]}>
          <CardActionArea className={styles["row"]}>
            <CardContent className={styles["card-content"]}>
              <Typography gutterBottom variant="h5" component="h1">
                <Link
                  className={styles["link"]}
                  to={{
                    pathname: `/profile/${userId}`,
                    state: userId,
                  }}
                >
                  {firstName} {lastName}
                </Link>
              </Typography>
              <Typography variant="h5" color="secondary" component="h4">
                {company}
              </Typography>
            </CardContent>
            <CardMedia
              image={imageUrl}
              title={firstName + "-img"}
              className={styles["card-media"]}
            />
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default ProfileCard;
