import { logger, showFeedback } from "../utils";

import logic from "../logic.mjs";

import { Component } from "react";

class Chats extends Component {
  constructor() {
    super();

    try {
      const user = logic.retrieveUser();
      const users = logic.retrieveUsersWithStatus();

      this.state = { users, view: null, stamp: null };

      this.user = user;
    } catch (error) {
      showFeedback(error);
    }
  }

  render() {
    return (
      <main className="main">
        <h1>Hello, {this.user.name}!</h1>
        <nav>
          <button
            onClick={(event) => {
              event.preventDefault();

              this.props.onHomeClick();
            }}
          >
            🏠
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();

              this.props.onLogout();
            }}
          >
            🚪
          </button>
        </nav>
        <section>
          <ul>
            {this.state.users.map((user) => (
              <li key={user.id}> {user.username} </li>
            ))}
          </ul>
          <h3>Han-solo</h3>
          <ul className="message-list">
            <li></li>
          </ul>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label>Text</label>
            <input id="text" type="text" />
            <button class="round-button submit-button" type="submit">
              Send
            </button>
          </form>
        </section>
      </main>
    );
  }
}

export default Chats;
