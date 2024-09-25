import Button from "react-bootstrap/Button";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([]);

  const getTask = async () => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_BASE_URL);
      setTask(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  const handleClick = () => {
    setShow(!show);
    setText(show ? "Show Task Bar" : "Hide Task Bar");
  };

  return (
    <div>
      <div className="text-center">
        <Button onClick={handleClick}>{text}</Button>
      </div>

      {show && <AddTask getTask={getTask} />}
      <TaskList task={task} getTask={getTask} />
    </div>
  );
};

export default Home;
