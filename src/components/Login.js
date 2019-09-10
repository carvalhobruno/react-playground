import React from 'react';
import useForm from "../helpers/useForm";
import loginIcon from "../assets/login-icon.svg"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      backgroundColor: '#fff',
      minHeight: 500,
      width: "90%",
      maxWidth: "500px",
      borderRadius: 6,
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      padding: theme.spacing(1, 0),
      color: "#1b589a",
      width: "80%",
    },
    button: {
        display: "block",
        marginTop: theme.spacing(2),
        width: "80%",
        padding: theme.spacing(1.5)
    },
    img: {
        width: 140,
        marginBottom: 20
    }
  }));

const Login = (props) => {
    const classes = useStyles();
    const formSchema = {
        email: { value: '', error: '' },
        password: { value: '', error: '' }
      };

    const validateSchema = {
        email: {
            required: true,
            validator: {
                regEx:  /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\)?$/i,
                error: "E-mail inválido"
            }
        },
        password: {
            required: true
        }
    }

    const { state, disable, handleOnChange, handleOnSubmit } = useForm(formSchema, validateSchema, login)

    function login() {
        props.history.push('/solicitacoes')
    }

    return (
        <form className={classes.container} onSubmit={handleOnSubmit} noValidate>
            <img className={classes.img} src={loginIcon}/>
            <TextField className={classes.textField} label="e-mail" type="email" name="email" onChange={handleOnChange} value={state.email.value} required />
            <TextField className={classes.textField} label="senha" type="password" name="password" onChange={handleOnChange} value={state.password.value} required />
            <Button className={classes.button} variant="contained" color="primary" type="submit" disabled={disable}>Entrar</Button>
        </form>
    );
};

export default Login;