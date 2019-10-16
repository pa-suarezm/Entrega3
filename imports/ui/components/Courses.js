import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../../../client/main.css";

//import Courses from "../../api/courses.js";

import Course from "./Course";
import CourseDetail from "./CourseDetail";

class Courses extends Component {

  state = {
    initialItems: [],
    items: []
  };

  handleInputChange = (event) => {

  };  

  render() {
    return (
      <div className="wrap-background">
        <div className="course-wrap">
          <h1>Cursos</h1>
          <div className="search-wrap">
            <i className="material-icons violet search">search</i>
            <form>
              <input
                className="search-bar"
                placeholder="Buscar cursos..."
                type="text"
                value=""
                onChange={this.handleInputChange}
              />
            </form>
          </div>
          <div className="course-list">
            <Course />
          </div>
        </div>
        <div className="course-detail">
          <CourseDetail />
        </div>
      </div>
    );
  }

}  
  

export default Courses;
