import React from 'react';
import { FilterType, TasksType } from './ToDoList';


type TasksPropsType = {
  tasks: TasksType
  filterValue: FilterType
}

function Tasks (props:TasksPropsType) {


 const filteredTask = (filter: FilterType) => {
   switch(filter) {
     case 'active': 
        return props.tasks.filter(task => task.complited === false);
     case 'complite': 
        return props.tasks.filter(task => task.complited === true);
     default:
       return props.tasks   
   }
 }

  return (
    <ul style={{maxWidth:'200px', margin:'0 auto'}}>
      {filteredTask(props.filterValue).map(task=> {
        return (
          <li key={task.id} style={{listStyleType: 'none'}}>
            <input type='checkbox' checked={task.complited}/>
            <span>{task.taskText}</span>
            <button>del</button>
          </li>
        )
      })}
      
    </ul>
  );
}

export default Tasks;
