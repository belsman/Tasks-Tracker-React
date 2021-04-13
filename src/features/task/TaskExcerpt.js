import React from 'react'
import { Link } from 'react-router-dom';

const TaskExcerpt = ({ task }) => (
  <article className="task-excerpt" key={task.id}>
    <h3>{task.name}</h3>
    <Link to={`/tasks/${task.id}`}>
    View Post
    </Link>
  </article>
);

export default TaskExcerpt;
