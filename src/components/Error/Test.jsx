import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleLogin } from "redux/actions/auth";

const TestComp = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleLogin({
            name: "SAFFAN",
        }))
    }, [])
    return(
        <h1>PAGE FOUND</h1>
    )
}

export default TestComp;