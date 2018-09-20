import React, { Component } from "react";
import FileBrowser from "react-keyed-file-browser";
import Moment from "moment";

class Manager extends Component {
  render() {
    return (
      <div>
        <h3> Record Heist </h3>
        <FileBrowser
          files={[
            {
              key: "cat.png",
              modified: +Moment().subtract(1, "hours"),
              size: 1.5 * 1024 * 1024
            },
            {
              key: "kitten.png",
              modified: +Moment().subtract(3, "days"),
              size: 545 * 1024
            },
            {
              key: "elephant.png",
              modified: +Moment().subtract(3, "days"),
              size: 52 * 1024
            }
          ]}
        />
      </div>
    );
  }
}
export default Manager;
