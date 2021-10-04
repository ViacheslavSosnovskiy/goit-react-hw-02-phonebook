import React, { Component } from "react";
// import shortid from "shortid";

class ContactForm extends Component {}

export default ContactForm;

// =============================================== //

// import React, { Component } from "react";
// import shortid from "shortid";

// class Form extends Component {
//   state = {
//     name: "",
//     tel: "",
//     experience: "middle",
//     licence: false,
//   };

//   nameInputId = shortid.generate();
//   telInputId = shortid.generate();

//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//       // [e.currentTarget.name]: e.currentTarget.value,
//     });
//   };

//   reset = () => {
//     this.setState({ name: "", tel: "" });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     // console.log(this.state);
//     this.reset();
//   };

//   handleLicenceChange = (e) => {
//     this.setState({ licence: e.currentTarget.checked });
//     // console.log(e.currentTarget.checked);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             id={this.nameInputId}
//           />
//         </label>

//         <label htmlFor={this.telInputId}>
//           Phone
//           <input
//             type="tel"
//             name="tel"
//             value={this.state.tel}
//             onChange={this.handleChange}
//             id={this.telInputId}
//           />
//         </label>

//         <p>Ваш уровень</p>

//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="junior"
//             onChange={this.handleChange}
//             checked={this.state.experience === "junior"}
//           />
//           Junior
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="middle"
//             onChange={this.handleChange}
//             checked={this.state.experience === "middle"}
//           />
//           Middle
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="senior"
//             onChange={this.handleChange}
//             checked={this.state.experience === "senior"}
//           />
//           Senior
//         </label>

//         <label>
//           <input
//             type="checkbox"
//             name="licence"
//             chacked={this.state.licence}
//             onChange={this.handleLicenceChange}
//           />
//           Согласен с условиями!
//         </label>

//         <button type="submit" disabled={!this.state.licence}>
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

// export default Form;
