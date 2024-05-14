import { useContext, useState } from "react";
import { todocontext } from "../Context/Context";

const Create = () => {
    const [tasks, settasks] = useContext(todocontext);

    const [title, settitle] = useState("");

    const TaskSubmitHandler = (e) => {
        e.preventDefault();
        settasks([...tasks, { title: title, completed: false }]);
        settitle("");
    };

    return (
        <form onSubmit={TaskSubmitHandler} className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] flex justify-between px-5 my-4">
    <input
        onChange={(e) => settitle(e.target.value)}
        value={title}
        placeholder="write your next task..."
        className="px-5 py-2 text-yellow-100 outline-none w-full sm:w-[80%] bg-zinc-700 rounded-xl"
        type="text"
    />
    <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[50px] h-[50px] sm:w-[10vmax] sm:h-[10vmax] rounded-full bg-orange-600">
        <i className="ri-add-fill"></i>
    </button>
</form>

    );
};

export default Create;
