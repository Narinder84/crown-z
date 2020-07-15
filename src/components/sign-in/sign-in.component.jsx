import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './sign-in.module.css'

// import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    
    if (this.state.email.includes('@')  && this.state.password !== "" ){

    console.log(this.state.email,this.state.password)

    this.setState({email:'',password:''})
    }
    

  };

  handleChange = event => {
    event.preventDefault();
    console.log(event.target);
    
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {  
    return (

      <div className={styles.Contaner} >
            <p>If having account.Sign in here</p>
            
        <form className={styles.from_container} >
            
            <div className= {styles.text_field} >
            <TextField className= {styles.text_field}  
              required 
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              id="standard-required" 
              label="Email"  
              type="email"  />
            </div>
            <div className= {styles.text_field} >
            <TextField
                className= {styles.text_field}
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            </div>
            
        </form>
        <div className={styles.btn} >
        <div className={styles.bt} ><CustomButton onClick ={this.handleSubmit} >Singn IN </CustomButton></div>
        <CustomButton  isGoogle onClick ={this.handleSubmit} >Sign With Google </CustomButton>
        </div>
        </div>
          );
  }
}

export default SignIn;
