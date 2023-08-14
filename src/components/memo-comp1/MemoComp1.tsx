import { memo } from "react";

export default memo(() => {
    console.log('Rendered memo component 1');
    return (
        <div>Memo Comp1</div>
    );
});
