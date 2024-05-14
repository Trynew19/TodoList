import { useContext } from "react";
import { todocontext } from "../Context/Context";

const Header = () => {
    const [tasks] = useContext(todocontext);

    return (
        <div className="mt-12 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] h-[30vh] border rounded-3xl flex justify-around items-center">
        <div className="text-yellow-100">
            <h1 className="text-3xl font-bold">LETS TODO</h1>
            <p>Keeps doing things</p>
        </div>
        <div className="text-3xl font-extrabold flex justify-center items-center w-[50px] h-[50px] sm:w-[10vmax] sm:h-[10vmax] rounded-full bg-orange-600">
            {tasks.filter((t) => t.completed === true).length}/{tasks.length}
        </div>
    </div>
    
    );
};

export default Header;
