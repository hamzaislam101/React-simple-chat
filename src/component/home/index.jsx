import React, { Component } from "react";
import "./style.scss";
import Chat from "../chat";
import Option from "../option";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOption: false,
      users: [
        {
          _id: "1",
          name: "Hams Ahmed Ansari",
          image: "/assets/images/4.jpeg",
          color: "#03A9F4",
          fontColor: "#fff",
          active: false,
          isFocus: false
        },
        {
          _id: "2",
          name: "Wahaj Ahmed Iqbal",
          image: "/assets/images/1.jpeg",
          color: "#C2185B",
          fontColor: "#fff",
          active: false,
          isFocus: false
        },
        {
          _id: "3",
          name: "Fasial Hanif",
          image: "/assets/images/3.jpeg",
          color: "#7B1FA2",
          fontColor: "#fff",
          active: false,
          isFocus: false
        }
      ],
      messages: [
        {
          _id: "1",
          userId: "1",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas voluptatibus, autem dolorem quidem in exercitationem, harum illo atque aperiam earum molestias quos doloribus consequuntur asperiores possimus rerum sed ad?",
          date: "Tue Mar 26 2019"
        },
        {
          _id: "2",
          userId: "2",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas voluptatibus,?",
          date: "Tue Mar 26 2019"
        },
        {
          _id: "3",
          userId: "3",
          reaction: "fas fa-frown",
          date: "Tue Mar 26 2019"
        },
        {
          _id: "4",
          userId: "2",
          message: " voluptas voluptatibus,?",
          date: "Tue Mar 26 2019"
        }
      ]
    };
  }

  changeStateOfUserFocus = userID => {
    const { users } = this.state;
    const updateUser = users.map(user => {
      if (user._id === userID) {
        user.active = !user.active;
        user.isFocus = !user.isFocus;
      } else {
        user.isFocus = false;
      }
      return user;
    });
    this.setState(preState => ({
      ...preState,
      users: updateUser
    }));
  };

  toggleIsOptionInState = () => {
    const { isOption } = this.state;

    this.setState(preState => ({
      ...preState,
      isOption: !isOption
    }));
  };

  pushMessageToState = message => {
    const { messages } = { ...this.state };
    messages.push(message);
    console.log(messages);

    this.setState(preState => ({
      ...preState,
      messages
    }));
  };

  pushUserToState = user => {
    const { users } = { ...this.state };
    users.push(user);
    this.setState(preState => ({
      ...preState,
      users
    }));
  };

  render() {
    const { isOption } = this.state;
    return (
      <React.Fragment>
        <div className={`home ${isOption ? "inactive" : ""}`}>
          <div className="container">
            <div className="row ">
              {this.state.users.map(user => (
                <div
                  className="col-12 col-xl-4 col-lg-4 col-sm-6 col-xs-12 mb-5"
                  key={user._id}
                >
                  <Chat
                    user={user}
                    active={user.active}
                    messages={this.state.messages}
                    allUsers={this.state.users}
                    changeStateOfUserFocus={this.changeStateOfUserFocus}
                    pushMessageToState={this.pushMessageToState}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {isOption && (
          <Option
            toggleIsOptionInState={this.toggleIsOptionInState}
            pushUserToState={this.pushUserToState}
          />
        )}
        {!isOption && (
          <button
            className="btn float-btn btn-danger"
            onClick={this.toggleIsOptionInState}
          >
            <i className="fas fa-plus" />
          </button>
        )}
      </React.Fragment>
    );
  }
}

export default Home;
