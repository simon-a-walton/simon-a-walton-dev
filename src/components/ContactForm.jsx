import React from "react";
import { colors } from "./../constants/StyleConstants";
import { css } from 'glamor';
import Bounce from 'react-reveal/Bounce';

const submitButton = css({
  marginTop: '12px',
  backgroundColor: colors.babyPink,
  color: 'white',
  border: '2px solid white',
  borderRadius: '8px',
  ':hover': {
    color: 'black',
    border: '2px solid black',
  }
});

const inputBorder = css({
  border: '2px solid white',
  borderRadius: '8px'
});

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mrgopdgy"
        method="POST"
      >
        <div className="row text-white">
          <div className="col-lg-12 col-sm-12">
            <label>Email:</label>
            <input type="email" name="email" className={`w-100 ${inputBorder}`} required/>
          </div>
          <div className="col-12 pt-2">
            <label>Message:</label>
            <input type="text" name="message" className={`p-3 w-100 ${inputBorder}`} />
          </div>
        </div>
        {status === "SUCCESS" ? <p>Thanks!</p> : <Bounce top><button className={submitButton}>Submit</button></Bounce>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
