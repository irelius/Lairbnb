import { useDispatch, useSelector } from "react-redux";
import { loginThunk, logoutThunk, restoreUserThunk } from "../../store/user";
import { useEffect, useState } from "react";

function Test() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("no email")
    const [name, setName] = useState('no name')
    const [testId, setTestId] = useState('no test id')

    const user = useSelector(state => state.user.user)
    useEffect(() => {
        dispatch(restoreUserThunk())
        if (user) {
            setEmail(user.email)
            setName(user.firstName + " " + user.lastName)
            setTestId(user.testId)
        } else {
            setEmail('no email')
            setName('no name')
            setTestId('no test id')
        }
    }, [dispatch])

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
            <section>
                {testId}
            </section>

            <section onClick={(e) => demoLogin(e)}>
                demo login
            </section>
        </div>
    )
}

export default Test;
