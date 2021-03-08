import React, { useState } from 'react';
import Tasks from './Tasks';

type TaskType = {
  id: number
  taskText: string
  complited: boolean
}

export type TasksType = Array<TaskType>

export type FilterType = 'all' | 'complite' | 'active'

function ToDoList () {

 const  initialState: TasksType = [
    {id: 1, taskText: 'react', complited: false},
    {id: 2, taskText: 'Html', complited: true},
    {id: 3, taskText: 'CSS', complited: false}
  ]

  const [inputValue, setInputValue] = useState<string>('')
  const [tasks, setTasks] = useState<TasksType>(initialState)
  const [filterValue, setFilterValue] = useState<FilterType>('all')

  const chengeInputValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const addNewTask = (value: string) =>{
    const newTask: TaskType = {
      id: Math.random(),
      taskText: value,
      complited: false
    }
    setTasks(prevState => [...prevState, newTask])
    setInputValue('')
  }

  const chengeFilter = (filter: FilterType) => {
    setFilterValue(filter)
  }




  return (
    <div>
     <input type='text' value={inputValue} onChange={(e)=>{chengeInputValue(e)}}/>
     <button onClick={()=>{addNewTask(inputValue)}}>Add</button>
     <Tasks tasks={tasks} filterValue={filterValue}/> 

     <div>
       <button onClick={()=> {chengeFilter('all')}}>All</button>
       <button onClick={()=> {chengeFilter('complite')}}>Complited</button>
       <button onClick={()=> {chengeFilter('active')}}>Active</button>
     </div>
    </div>
  );
}

export default ToDoList;
