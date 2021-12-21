import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";



export default function Login({ bus }) {
    // const [login, setlogin] = useState("Desde el hijo ");


    let login = "";
    let navigate = useNavigate();


    const fnLogout = (e) => {

        login = { token: undefined}
        bus(login, navigate);
    }

    useEffect(() => {

        fnLogout();

    });

    return (

        <div>


        </div>


    )

}
