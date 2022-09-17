import classes from '../styles/Illustration.module.css';
import signupimage from '../assets/images/signup.svg';
import loginimage from '../assets/images/login.svg';
export default function Illustration({flag}) {
  const image = flag === "login" ? loginimage:signupimage;
  return (
    <div className={classes.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
}
