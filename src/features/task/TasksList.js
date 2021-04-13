import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskExcerpt from './TaskExcerpt';
import { selectAllTasks, fetchTasks } from './tasksSlice';

const TasksList = () => {

    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);

    const taskStatus = useSelector( state => state.tasks.status );
    const error = useSelector( state => state.error);

    useEffect(() => {
      if (taskStatus === 'idle') {
        dispatch(fetchTasks());
      }
    }, [dispatch, taskStatus]);
    
    let content;

    if (taskStatus === 'loading') {
      content = <div className="loader">Loading...</div>;
    } else if (taskStatus === 'succeeded') {
      content = tasks.map(task => <TaskExcerpt key={task.id} task={task} />);
    } else if (taskStatus === 'failure') {
      content = <div>{error}</div>;
    }

    return (
      <>
        <h2>Tasks</h2>
        {content}
      </>
    )
};

export default TasksList;
