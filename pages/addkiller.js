import Layout from "../components/Layout";

import { Form, Field } from "react-final-form";
import axios from "axios";

class AddPage extends React.Component {
  state = {};

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onImageSelect = e => {
    console.log("image", e.target.files[0]);
    this.setState({ avatar: URL.createObjectURL(e.target.files[0]) });
  };

  handleOnSubmit = async form => {
    const { data } = await axios.post("http://localhost:3001/killers", form);
    console.log("Response:", data);
  };

  render() {
    console.log("state", this.state);
    return (
      <Layout>
        <Form
          onSubmit={this.handleOnSubmit}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <Field type="text" component="input" name="name" />
              </div>
              <div>
                <label htmlFor="sex">Sex:</label>
                <Field type="text" component="input" name="sex" />
              </div>
              <div>
                <label>Avatar:</label>
                <Field component="input" name="avatar" />
              </div>
              <div>
                <label htmlFor="classification">Classification:</label>
                <Field type="text" component="input" name="classification" />
              </div>
              <div>
                <label htmlFor="characteristics">Characteristics:</label>
                <Field type="text" component="input" name="characteristics" />
              </div>
              <div>
                <label htmlFor="number_of_victims">Number of victims:</label>
                <Field type="text" component="input" name="number_of_victims" />
              </div>
              <div>
                <label htmlFor="date_of_murders">Date of murders:</label>
                <Field type="text" component="input" name="date_of_murders" />
              </div>
              <div>
                <label htmlFor="date_of_arrest">Date of arrest:</label>
                <Field type="text" component="input" name="date_of_arrest" />
              </div>
              <div>
                <label htmlFor="date_of_birth">Date of birth:</label>
                <Field type="text" component="input" name="date_of_birth" />
              </div>
              <div>
                <label htmlFor="victims_profile">Victims profile:</label>
                <Field type="text" component="input" name="victims_profile" />
              </div>
              <div>
                <label htmlFor="method_of_muruder">Method of murder:</label>
                <Field type="text" component="input" name="method_of_muruder" />
              </div>
              <div>
                <label htmlFor="location">Location:</label>
                <Field type="text" component="input" name="location" />
              </div>
              <div>
                <label htmlFor="status">Status:</label>
                <Field type="text" component="input" name="status" />
              </div>
              <div>
                <label htmlFor="summary">Summary</label>
                <textarea id="summary" name="summary" />
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        />
        {/* <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.onInputChange}
          />
          {this.state.avatar && <img src={this.state.avatar} />}
          <label style={{ marginTop: "1rem" }} htmlFor="avatar">
            Upload avatar
          </label>
          <input
            style={{ marginBottom: "1rem" }}
            className="fileInput"
            type="file"
            accept="image/*"
            id="avatar"
            onChange={e => this.onImageSelect(e)}
          />
          <label htmlFor="classification">Classification:</label>
          <input
            type="text"
            name="classification"
            id="classification"
            value={this.state.classification}
            onChange={e => this.onInputChange(e)}
          />
          <label htmlFor="characteristics">Characteristics:</label>
          <input
            type="text"
            name="characteristics"
            id="characteristics"
            value={this.state.characteristics}
            onChange={e => this.onInputChange(e)}
          />
          <label htmlFor="number_of_victims">Number of victims:</label>
          <input
            type="text"
            name="number_of_victims"
            id="number_of_victims"
            value={this.state.number_of_victims}
            onChange={e => this.onInputChange(e)}
          />
          <label htmlFor="date_of_murders">Date of murders:</label>
          <input
            type="text"
            name="date_of_murders"
            id="date_of_murders"
            value={this.state.date_of_murders}
            onChange={e => this.onInputChange(e)}
          />
          <label htmlFor="date_of_arrest">Date of arrest:</label>
          <input
            type="text"
            name="date_of_arrest"
            id="date_of_arrest"
            value={this.state.date_of_arrest}
            onChange={e => this.onInputChange(e)}
          />
          <label htmlFor="date_of_birth">Date of birth:</label>
          <input
            type="text"
            name="date_of_birth"
            id="date_of_birth"
            value={this.state.date_of_birth}
            onChange={e => this.onInputChange(e)}
          />
          <label htmlFor="victims_profile">Victims profile:</label>
          <input
            type="text"
            name="victims_profile"
            id="victims_profile"
            value={this.state.victims_profile}
            onChange={e => this.onInputChange(e)}
          />
          <label htmlFor="method_of_muruder">Method of murder:</label>
          <input
            type="text"
            name="method_of_muruder"
            id="method_of_muruder"
            value={this.state.method_of_muruder}
            onChange={e => this.onInputChange(e)}
          />
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            value={this.state.location}
            onChange={e => this.onInputChange(e)}
          />
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            name="status"
            id="status"
            value={this.state.status}
            onChange={e => this.onInputChange(e)}
          />
          <label htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            name="summary"
            onChange={e => this.onInputChange(e)}
          />

          <style jsx>{`
            form {
              display: flex;
              flex-direction: column;
              width: 40%;
            }

            img {
              max-width: 400px;
              max-height: 400px;
              align-self: start;
            }
          `}</style>
        </form> */}
      </Layout>
    );
  }
}

export default AddPage;
