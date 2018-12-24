import React, { Component } from 'react'
import $ from 'jquery/dist/jquery.slim';
import axios from 'axios';
class Applogin extends Component {
    state = { 
        error_txt: '',
        users_name: '',
        users_password: ''

    }
    constructor(props){
        super(props);
        $(document).ready(function(){
            $('.alert').hide();
    
        });
    }
        users_name_Change = (event) => {
        this.setState({ users_name: event.target.value});
    }
    users_password_Change = (event) => {
    this.setState({ users_password: event.target.value});
        
    }
    submitLoing = (event) => {
        event.preventDefault();
        let username = this.state.users_name;
        let password = this.state.users_password;
        if (username != '' && password != ''){
            $('.alert').hide();
            let result = await axios.post
            ('http://localhost/netlogapi/users.php',{
                ApiKey: 'NetLogApi',
                fn: 'Login',
                users_name: username,
                users_password: password
            });
    //       if(this.users != false){
    //   ///ตัวแปรsessionStorage
    //         sessionStorage.setItem('loginuser',JSON.stringify(this.users));
    //       if(this.users.users_status == 'admin')
    //         this.router.navigate(['admin']);
    //       else if(this.users.users_status == 'user')
    //         this.router.navigate(['user']);
    //       else{
    //         this.error_txt = 'Invalid Username or Password';
    //         $('.alert').show();
      
    //       }
          
         // }else{
          //    this.setState({ error_txt: 'Please enter Username and Password'});
         //   $('.alert').show();
        //  }
          }else{
            this.setState({error_txt : 'Please enter Username and Password'});
            $('.alert').show();
          }
          

    }

    render(){
            return ( 
                <div id="login" className="container mt-5">
                    <div className="card shadow mx-auto px-0 p-md-3 col-12 col-md-6">
                        <div className="card-body">
                        <h3 className="card-title">login...</h3>
                        <div className="card-text">
                            <form onSubmit={ this.submitLoing }>
                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <input type="text" id="users_name" name="users_name" placeholder="Username"  
                            value={ this.state.users_name}
                            onChange={ this.users_name_Change}
                            className="form-control" />
                            </div>

                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                <i className="fas fa-key"></i>
                                </div>
                            </div>
                            <input type="text" id="password" name="password" placeholder="password"
                             value={ this.state.users_password}
                             onChange={ this.users_password_Change}
                             className="form-control" />
                            </div>

                            <input type="submit" id="login_bt" name="login_bt" value="Login" className="btn btn-primary btn-block" />
                        </form>
                        </div>
                        </div>
                    </div>
                    <div className="alert alert-danger col-12 col-md-6 col-3 mx-auto text-center" role="alert">
                        { this.state.error_txt}
                    </div>
                    </div>

                                );
                        }
                    }

export default Applogin;