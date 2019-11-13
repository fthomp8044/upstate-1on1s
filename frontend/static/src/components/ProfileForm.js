import React, {Component} from 'react';
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class ProfileForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        // user: '', //new
        avatar: null,
        first_name:'',
        last_name:'',
        preview: '',
        location: '',
        bats: '',
        graduation_date:'',
        throws: '',
        weight: '',
        school: '',
        position: '',
        is_professional: '',
        draft_round: '',
        draft_pick: '',
        stat_link: '',
        isEditing: false,
        isDeleteting: false,
      };

      this.toggleEdit = this.toggleEdit.bind(this);
      // this.saveProfile = this.saveProfile.bind(this);
      this.deleteProfile = this.deleteProfile.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
    }

    toggleEdit() {
      this.setState(state => ({
        isEditing: !state.isEditing
      }));
    }

    deleteProfile() {
      this.setState(state => ({
        isDeleteting: !state.isDeleteting
      }));
    }


    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
      console.log({[e.target.name]: e.target.value})
    }

    handleImageChange(e) {
      // The selected files' are returned by the element's HTMLInputElement.files property — this returns a FileList object, which contains a list of File objects
      let file = e.target.files[0];
      // we'll use this value when we save the image (see _saveImage)
      this.setState({avatar: file});
      // The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
      let reader = new FileReader();
      // A handler for the loadend event. This event is triggered each time the reading operation is completed (either in success or failure).
      reader.onloadend = () => {
        this.setState({preview: reader.result});
      }
      // Starts reading the contents of the specified Blob, once finished, the result attribute contains a data: URL representing the file's data.
      reader.readAsDataURL(file);
    }

    handleSubmit(e) {
      e.preventDefault();

      let formData = new FormData()

      // formData.append('users', this.state.users)
      formData.append('is_professional', this.state.is_professional);
      formData.append('draft_round', this.state.draft_round);
      formData.append('draft_pick', this.state.draft_pick);
      formData.append('stat_link', this.state.stat_link);
      formData.append('location', this.state.location);
      formData.append('graduation_date', this.state.graduation_date);
      formData.append('bats', this.state.bats);
      formData.append('throws', this.state.throws);
      formData.append('weight', this.state.weight);
      formData.append('school', this.state.school);
      formData.append('position', this.state.position);
      // formData.append('first name', this.state.first_name);
      // formData.append('last name', this.state.last_name);
      formData.append('avatar', this.state.avatar);
      formData.append('bio', this.state.bio);

      axios.post('/api/v1/profile/', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': `Token ${JSON.parse(localStorage.getItem('my-app-user')).token}`
        }
      })
      .then(res => {
          // localStorage.setItem('my-app-user', JSON.stringify(res.data)
          // this.props.history.push('/home');
          this.props.history.push('/authorize/');
      })
      .catch(error => {
          console.log(error);
      });
  }

  render() {
  return (
<div className = "col-md-5" >
  <div className="form-area">
  <form onSubmit={this.handleSubmit}>
    <br styles="clear:both"/>
    <div className="form-group">
      <label htmlFor='avatar'>Profile Picture:</label>
      <input name='avatar' type="file" onChange={this.handleImageChange} className="form-control" placeholder="Image"/> {
        this.state.avatar
          ? (<img src={this.state.preview} alt='preview'/>)
          : (null)
      }
    </div>
    <div className="form-group">
      <label htmlFor='is_professional'>Professional Athlete</label>
      <select name='Professional' value={this.state.is_professional} onChange={this.handleChange} className="form-control" placeholder="professional">
        <option value='null'>Select an Option</option>
        <option value='true'>Professional Athlete</option>
        <option value='false'>Student Athlete</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor='first_name'>First name:</label>
      <input name='first_name' value={this.state.first_name} type="text" onChange={this.handleChange} className="form-control" placeholder="First Name"/>
    </div>
    <div className="form-group">
      <label htmlFor='last_name'>Last name:</label>
      <input name='last_name' value={this.state.last_name} type="text" onChange={this.handleChange} className="form-control" placeholder="Last Name" />
    </div>
    <div className="form-group">
      <label htmlFor='location'>Location:</label>
      <input name='location' value={this.state.location} type="text" onChange={this.handleChange} className="form-control" placeholder="location" />
    </div>
    <div className="form-group">
      <label htmlFor='bats'>Bats:</label>
      <input name='bats' value={this.state.bats} type="text" onChange={this.handleChange} className="form-control" placeholder="Bats" />
    </div>
    <div className="form-group">
      <label htmlFor='throws'>Throws:</label>
      <input name='throws' value={this.state.throws} type="text" onChange={this.handleChange} className="form-control" placeholder="Throws"/>
    </div>
    <div className="form-group">
      <label htmlFor='weight'>Weight:</label>
      <input name='weight' value={this.state.weight} type="number" onChange={this.handleChange} className="form-control" placeholder="Weight" />
    </div>
    <div className="form-group">
      <label htmlFor='graduation_date'>Graduation Year:</label>
      <input name='graduation_date' value={this.state.graduation_date} type="number" onChange={this.handleChange} className="form-control" placeholder="Year" />
    </div>
    <div className="form-group">
      <label htmlFor='school'>School:</label>
      <input name='school' value={this.state.school} type="text" onChange={this.handleChange} className="form-control" placeholder="School" />
    </div>
    <div className="form-group">
      <label htmlFor='position'>Position:</label>
      <input name='position' value={this.state.position} type="text" onChange={this.handleChange} className="form-control" placeholder="Position" />
    </div>
    <div className="form-group">
      <label htmlFor='draft_round'>draft_round:</label>
      <input name='draft_round' value={this.state.draft_round} type="number" onChange={this.handleChange} className="form-control" placeholder="draft_round" />
    </div>
    <div className="form-group">
      <label htmlFor='draft_round'>draft_pick:</label>
      <input name='draft_pick' value={this.state.draft_pick} type="number" onChange={this.handleChange} className="form-control" placeholder="draft_pick" />
    </div>
    <div className="form-group">
      <label htmlFor='stat_link'>stat link:</label>
      <input name='stat_link' value={this.state.stat_link} type="url" onChange={this.handleChange} className="form-control" placeholder="stat_link" />
    </div>
    <div className="form-group">
      <label htmlFor='bio'>Bio:</label>
      <input name='bio' value={this.state.bio} type="text" onChange={this.handleChange} className="form-control" placeholder="Bio" />
    </div>
    <button className="btn btn-primary pull-right" type='submit'>Save</button>
  </form>
</div>
</div>)
}
}

export default ProfileForm;
