import React from "react";
import {User} from "../../server/db/user";

function SignIn(){
    const [form, setForm]=React.useState({
        username:'',
        password:''
    })

    const onChange =prop=> event=>{
        setForm({
            ...form,
            [prop]: event.target.value
        })
    }

    const onSubmit = (ev)=>{
        ev.preventDefault();
        const obj ={
            ...form
        }
        User.authenticate(obj)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={()=>onChange("username")} name={"username"}/>
            <input type="password" onChange={()=>onChange("password")} name={"password"}/>
            <input type="submit" value={"Submit"}/>
        </form>
    )
}

export default SignIn