import { useDispatch, useSelector } from "react-redux";
import { loginThunk, logoutThunk, restoreUserThunk } from "../../store/user";
import { useEffect, useState } from "react";

function Test() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("no email")
    const [name, setName] = useState('no name')

    useEffect(() => {
        dispatch(restoreUserThunk())
        if (user) {
            setEmail(user.email)
            setName(user.firstName + " " + user.lastName)
        } else {
            setEmail('no email')
            setName('no name')
        }
    }, [dispatch])

    const user = useSelector(state => state.user.user)
    console.log('booba user', user)

    const logoutFunc = (e) => {
        e.preventDefault();
        dispatch(logoutThunk())
    }

    const demoLogin = (e) => {
        e.preventDefault();

        const demo = {
            email: "demo@aa.io",
            password: "password"
        }

        return dispatch(loginThunk(demo))
    }

    return (
        <div>
            <section>
                test

            </section>
            <section onClick={(e) => logoutFunc(e)}>
                log out
            </section>
            <section>
                {email}
            </section>
            <section>
                {name}
            </section>

            <section onClick={(e) => demoLogin(e)}>
                demo login
            </section>
        </div>
    )
}

export default Test;
