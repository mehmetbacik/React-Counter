import { useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        setCount(count - 1);
    };
    return (
        <div id="counter">
            <div className="content">
                <h1>Counter</h1>
                <p>{count}</p>
            </div>
            <div className="buttons">
                <button className="btn" onClick={decrease}>Decrease</button>
                <button className="btn" onClick={increase}>Increase</button>
            </div>
        </div>
    );
}

export default Counter;