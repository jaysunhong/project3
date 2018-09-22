import React, { Component } from 'react';
import './EventDescription.css';
import EDAddress from "../EDAddress/EDAddress";
import EDDescription from "../EDDescription/EDDescription";


class EventDescription extends Component {
  render() {
    return (
      <div id="eventDescription" className="container">
          <div className="container-fluid">
            <h2 className="eventDescriptionHeader">Event Description</h2>
          </div>
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <EDAddress/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <EDDescription/>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDescription;