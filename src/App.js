import React from "react";
import SignIn from "./components/SignIn";
import axios from "axios";


function App() {
    const [sign, setSign] = React.useState("");

    const attemptTokenLogin = async () => {
        const token = window.localStorage.getItem('token')

        if (token) {
            const response = await axios.get('/api/auth', {
                    headers: {
                        authorization: token
                    }
                }
            )

            setSign({auth: response.data})
        }
    }

    React.useEffect(()=>{
        attemptTokenLogin();
    },[])

    return (
        <>
            {!sign.id ? <SignIn/> : <div>Welcome {sign.username}</div>}
        </>
    )
}

export default App;