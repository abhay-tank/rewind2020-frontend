import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { fetchData, ProfileUrl } from "../../services/FetchData";
import ProfileCard from "../../components/ProfileCard";
import styles from "./home.module.scss";
class Home extends Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    fetchData(ProfileUrl)
      .then((data) => {
        if (data.data) this.setState({ users: data.data });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  render() {
    return (
      <div>
        {this.state.users.length ? (
          this.state.users.map((user) => {
            return (
              <div className={styles["card-container"]}>
                <ProfileCard key={user.userId} {...user} />;
              </div>
            );
          })
        ) : (
          <div className={styles["content__loading"]}>
            <img
              src={"http://samherbert.net/svg-loaders/svg-loaders/rings.svg"}
              alt="Loading_icon"
            />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
