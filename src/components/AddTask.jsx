import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddTask = ({ getTask }) => {
  const [task, setTask] = useState(``);
  const [date, setDate] = useState(``);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(task, date);
    const newData = { task, date };
    postTask(newData);
  };

  const postTask = async (newData) => {
    try {
      await axios.post(process.env.REACT_APP_BASE_URL, newData);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 fw-bold fs-5">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 fw-bold fs-5">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <div className="text-center m-1">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
