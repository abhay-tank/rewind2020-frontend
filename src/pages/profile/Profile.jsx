import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { fetchData, ProfileUrlId } from "../../services/FetchData";
import WorkIcon from "@material-ui/icons/Work";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import styles from "./Profile.module.scss";
import Chart from "../../components/Chart";
class Profile extends Component {
  state = {
    user: {},
    chartData: {},
  };
  getChartData() {
    console.log(this.state);
    console.log(this.state.user.skills[0].skillName);
    this.state.user.skills &&
      // this.state.user.skills.map((skill) => {
      //   console.log(skill);

      this.state.user.skills.forEach((skill) => {
        console.log(skill);

        this.setState({
          chartData: {
            labels: [
              this.state.user.skills[0].skillName,
              this.state.user.skills[1].skillName,
              this.state.user.skills[2].skillName,
              this.state.user.skills[3].skillName,
              this.state.user.skills[4].skillName,
            ],
            datasets: [
              {
                // barPercentage: 0.5,
                hoverBackgroundColor: "#124258",

                label: "Skills",

                data: [
                  this.state.user.skills[0].skillLevel,
                  this.state.user.skills[1].skillLevel,
                  this.state.user.skills[2].skillLevel,
                  this.state.user.skills[3].skillLevel,
                  this.state.user.skills[4].skillLevel,
                  0,

                  10,
                ],
                backgroundColor: ["red", "lime", "yellow", "chocolate", "blue"],
              },
            ],
          },
        });
      });
  }

  componentDidMount = async () => {
    console.log(this.props);
    let id = this.props.match.params.id;
    console.log(id);

    try {
      let data = await fetchData(`${ProfileUrlId}/${id}`);
      this.setState({ user: data.data });
      this.getChartData();
    } catch (err) {
      console.log("error not found", err);
    }
  };
  render() {
    let { user } = this.state;

    console.log(this.state.user);
    if (user) {
      return (
        <div>
          <div className={styles["main__div"]}>
            <div className={styles["backgroundDiv"]}>
              <img
                className={styles["profilePic"]}
                src={user.imageUrl}
                alt={user.firstName + " Profile Picture"}
              />
              <h1 className={styles["Name"]}>
                <span className={styles["firstName"]}>{user.firstName}</span>
                <span className={styles["lastName"]}>{user.lastName}</span>
              </h1>
            </div>

            <div className={styles["userInfo"]}>
              <div className={styles["userInfo__company"]}>
                <WorkIcon />
                <h1>Works at</h1>
                <h2> {user.company}</h2>
              </div>
              <div className={styles["userInfo__email"]}>
                <EmailRoundedIcon />
                <h1>Email</h1>
                <h2>{user.email}</h2>
              </div>

              <div className={styles["userInfo__hobbies"]}>
                <AllInclusiveIcon />
                <h1>Hobbies</h1>

                {this.state.user.hobbies &&
                  this.state.user.hobbies.map((data) => {
                    return <h2 key={data._id}>{data.hobby}</h2>;
                  })}
              </div>
              <div className={styles["userInfo__hobbies"]}>
                <HomeIcon />
                <h1>Address</h1>
                <h2>{user.address}</h2>
              </div>
              <div className={styles["userInfo__hobbies"]}>
                <InfoIcon />
                <h1>About {user.firstName}</h1>
                <h2>{user.aboutMe}</h2>
              </div>
            </div>
            <Chart
              className={styles["userInfo__chart"]}
              chartData={this.state.chartData}
            />
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Profile;
