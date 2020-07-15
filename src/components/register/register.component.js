import React from 'react';
import  CustomButton    from '../custom-button/custom-button.component.jsx'
import TextField from '@material-ui/core/TextField';
import styles from './register.module.css'


class   RegisterForm extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          name:'',  
          email: '',
          password: '',
          confirmPassword:''


        };
      }
    
      handleSubmit = event => {
        event.preventDefault();
        
        if (this.state.email.includes('@')  && this.state.password !== "" && this.state.password=== this.state.confirmPassword ){
    
        console.log(this.state.email,this.state.password,this.state.name,this.state.confirmPassword,this.state.password)
    
        this.setState({name:'',  
        email: '',
        password: '',
        confirmPassword:''})
        }
        
    
      };
    
      handleChange = event => {
        event.preventDefault();
        console.log(event.target);
        
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

    render(){
        return(
            <div className={styles.Contaner} >
                <p>If not having account.Create account here</p>
                <form className={styles.from_container} >
                <div className= {styles.text_field} >
                <TextField className= {styles.text_field}  
                    required 
                    id="standard-required" 
                    label="Name" 
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}    
                    />    
                </div>
                <div className= {styles.text_field} >
                <TextField className= {styles.text_field}  
                    required 
                    id="standard-required" 
                    label="Email"  
                    type="email"
                    name="email"  
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                </div>
                <div className= {styles.text_field} >
                <TextField
                    className= {styles.text_field}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    autoComplete="current-password"
                    onChange={this.handleChange}
                />
                </div>
                <div className= {styles.text_field} >
                <TextField
                    className= {styles.text_field}
                    id="standard-password-input"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                />
                </div>
                
                    
                
            </form>
            <div className={styles.btn} >
            <CustomButton onClick={this.handleSubmit} >Register</CustomButton>
            </div>
            </div>
        )
    }
}

export default RegisterForm;