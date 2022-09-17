import classes from '../styles/Form.module.css';

export default function Form({children, className, ...rest}){
    console.log(children,"sdfsd ", className)
    return(
        <from className={`${className} ${classes.form}`} >
            {children}
        </from>
    )
}