function TestChild({ setCounter }) {
    return (
        <div>
            <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>test</button>
        </div>
    );
}

export default TestChild
