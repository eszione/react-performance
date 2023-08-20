import { memo, useState } from "react";
import Comp1 from "../comp1/Comp1";
import Comp2 from "../comp2/Comp2";
import "./Memo.css";

const MemoComp1 = memo(Comp1);

export default () => {
    console.log('Memo rendered');
    const [count, setCount] = useState(0);

    const clickHandled = () => {
        setCount(count + 1);
    };

    return (
        <div className="full">
            <div>Memo</div>
            <MemoComp1 />
            <Comp2 />
            <div>
                Count: {count}
            </div>
            <button onClick={clickHandled}>Increment</button>
        </div>
    );
};
