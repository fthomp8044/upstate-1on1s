// import axios from "axios";
//
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';
//
//
//
//
// class ProfileDetail extends Component {
//
//
//   componentDidMount() {
//     const {
//       match: { params }
//     } = this.props;
//
//
//     axios.get(`/api/v1/profile/${params.myuserId}`)
//       .then(res => {
//         this.setState({ topic: res.data });
//         return axios.get(`/api/v1/profile/${res.data.user_id}`);
//       })
//       .then(response => {
//         this.setState({ user: response.data });
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
// }
// }
//
// export default ProfileDetail;
