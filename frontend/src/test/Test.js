import TestChild from "./TestChild"
import { useState } from "react"

function Test() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            {counter}
            <TestChild setCounter={setCounter} />
        </div>
    );
}

export default Test
