import axios from "axios";
import { HiArchiveBoxArrowDown } from "react-icons/hi2";

const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    // console.log(id);
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div>
      {task.map(({ id, task, date }) => (
        <div
          key={id}
          className="mt-2 d-flex justify-content-between bg-light rounded-2 p-2"
        >
          <div>
            <h4>{task}</h4>
            <p>{date}</p>
          </div>
          <div>
            <HiArchiveBoxArrowDown
              onClick={() => deleteTask(id)}
              style={{
                cursor: "pointer",
                marginRight: "30px",
                fontSize: "2rem",
                boxShadow: "2px 2px 2px #ECAB9E",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
