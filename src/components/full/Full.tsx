import { useState } from "react";
import Comp1 from "../comp1/Comp1";
import Comp2 from "../comp2/Comp2";
import "./Full.css";

export default () => {
    console.log('Full rendered');
    const [count, setCount] = useState(0);

    const clickHandled = () => {
        setCount(count + 1);
    };

    return (
        <div className="full">
            <div>Full</div>
            <Comp1 />
            <Comp2 />
            <div>
                Count: {count}
            </div>
            <button onClick={clickHandled}>Increment</button>
        </div>
    );
};
