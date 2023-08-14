import { ReactNode } from "react";
import "./Body.css";

type Props = {
    children: ReactNode
};

export default ({ children }: Props) => 
    <div className="body">
        {children}
    </div>;
