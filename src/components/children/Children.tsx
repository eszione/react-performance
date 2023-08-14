import { ReactNode, useState } from "react";
import Comp2 from "../comp2/Comp2";
import "./Children.css";

type Props = {
    children: ReactNode
};

export default ({ children } : Props) => {
    console.log('Children renderered');
    const [count, setCount] = useState(0);

    const clickHandled = () => {
        setCount(count + 1);
    };

    return (
        <div className="full">
            <div>Children</div>
            {children}
            <Comp2 />
            <div>
                Count: {count}
            </div>
            <button onClick={clickHandled}>Increment</button>
        </div>
    );
};
