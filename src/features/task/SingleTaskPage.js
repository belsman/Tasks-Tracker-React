import React from 'react';
import { useSelector } from 'react-redux';

import { selectTaskById } from './tasksSlice';

const SingleTaskPage = ({ match }) => {
  const { taskId } = match.params;
  const task = useSelector(state => selectTaskById(state, taskId));

  if (!task) {
      return (
          <section>
              <h2>Task not found!</h2>
          </section>
      );
  }

  return (
      <section>
          <article className="post">
              <h2>{task.name}</h2>
              <p className="task-content">{task.description}</p>
          </article>
      </section>
  );
};

export default SingleTaskPage;
