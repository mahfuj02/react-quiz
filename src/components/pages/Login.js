import classes from '../../styles/Login.module.css';
import Illustration from "../Illustration";
import Form from "../Form";
import TextInput from '../TextInput'
import Button from '../Button';

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration flag="login"/>
        <Form className={`${classes.login}`}>
            <TextInput type="password" placeholder="Enter email" icon="alternate_email" />
            <TextInput type="text" placeholder="Enter password" icon="lock" />
            <Button> Submit now</Button>

            <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>

        </Form>
      </div>
    </>
  );
}
