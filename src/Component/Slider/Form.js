import { useState } from 'react';
import './Form.css'
export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>User {name} successfully registered!!</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
<div className="form">
<div>
<h1>FeedBack Form</h1>
</div>

{/* Calling to the methods */}
<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}
<label className="label">Name</label>
<input onChange={handleName} className="input"
value={name} type="text" />

<label className="label">Date</label>
<input onChange={handleEmail} className="input"
value={email} type="text" />

<label className="label">Message</label>
<input onChange={handlePassword} className="input"
value={password} type="text" />

<input type="checkbox"className="input1" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> Term And Condition</label><br></br>
  <p>Please select your Gender</p>
  <input type="radio" id="age1" name="age" value="30"/>
  <label for="age1">Male</label><br/>
  <input type="radio" id="age2" name="age" value="60"/>
  <label for="age2">Femal</label><br/>  
  <input type="radio" id="age3" name="age" value="100"/>
  <label for="age3">Transgender</label>


<button onClick={handleSubmit} className="btn" type="submit">
Submit
</button>
</form>
</div>
);
}