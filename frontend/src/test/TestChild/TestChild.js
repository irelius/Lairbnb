function TestChild({ setCounter }) {
    return (
        <div>
            <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>booba</button>
        </div>
    );
}

export default TestChild
