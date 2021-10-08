
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from "firebase/auth";

import initalizeAuthnentiction from './FireBase/firebase.init';
import { useState } from 'react';

initalizeAuthnentiction();
const googleProvider = new GoogleAuthProvider();

function App() {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [error, setError] = useState()

  const auth = getAuth();


  const handleOne = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        console.log(user);
      })

  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };


  const handleReg = e => {
    e.preventDefault()
    console.log(email, password);
    // condition 
    if(password.length < 6){
      setError('please add more character')
      return;
    }

    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
      setError('password must content 2 upperCase')
      return
    }
    createUserWithEmailAndPassword(auth , email, password)
    .then(result => {
       const user = result.user;
       console.log(user);
    })
  
  };

  return (
    <div className="container ">
     
      <div className="row my-5">
        <div className="col-6 mx-auto">
        <div className="py-3">
        <h1 className="bg-info p-3  border fw-bold text-center"> Please Register Here </h1>
        </div>
          <form onSubmit={handleReg}>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label> <br/>
              <div className="col-sm-10">
                <input onBlur ={handleEmail} type="email" required className="form-control" id="inputEmail3" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input onBlur ={handlePassword} type="password" required className="form-control" id="inputPassword3" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck1" />
                  <label className="form-check-label" htmlFor="gridCheck1">
                   Have Account
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-3 text-danger">
              <small className="fw-bolder">
                {error}
              </small>
            </div>
            <button  type="submit" className="btn btn-primary">Registration Here</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
