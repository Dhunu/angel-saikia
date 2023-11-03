import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode,
    className?: string,
    id?: string
}

const Container: React.FC<ContainerProps> = ({
    children,
    className,
    id
}) => {
    return ( 
        <div  className={cn(
            "mx-auto max-w-7xl",
            className,
        )} id={id}>
            {children}
        </div>
     );
}
 
export default Container;