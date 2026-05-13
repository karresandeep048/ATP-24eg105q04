import {validateTitle,validatePriority,validateDueDate} from './validator.js';
let tasks=[]
function addTask(title,priority,dueDate)
{
    if(validateTitle(title)===true && validatePriority(priority)===true && validateDueDate(dueDate)===true)
    {
        tasks.push({title,priority,dueDate})
    }
}
function getAllTasks()
{
    console.log(tasks)
}
export {addTask, getAllTasks}