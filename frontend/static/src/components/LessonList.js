import React, {Component} from 'react';
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class LessonList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lessons: []
    };
  }

  componentDidMount() {
    axios.get('/api/v1/lessons/')
    .then(res => this.setState({lessons: res.data}))
    .catch(error => console.log(this.error));
  }

  render() {
    let lessons = this.state.lessons.map(lesson => (
      <React.Fragment key={lesson.id}>
        <h4>{lesson.title}</h4>
        <p>{lesson.description}</p>
        <p><a href={`/lessons/${lesson.id}/`}>Enroll</a></p>
      </React.Fragment>
    ));
    return  (
      <React.Fragment>
        {lessons}
      </React.Fragment>
    )
  }
}

export default LessonList;
