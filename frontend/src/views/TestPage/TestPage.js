import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginThunk } from "../../store/user"

function TestPage () {
    const dispatch = useDispatch()
    useEffect(() => {

    }, [dispatch])
    const user = useSelector(state => state.user)
    console.log('booba', user)

    const demoLogin = () => {
        const demoUser = {
            email: "demo@aa.io",
            password: "password"
        }

        dispatch(loginThunk(demoUser))
    }


    return (
        <div>
            <section onClick={demoLogin}>
                Demo login
            </section>

        </div>
    )
}

export default TestPage
