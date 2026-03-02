// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title){
    if(!title){
        return "title is required";
    } if(title.length<=3){
        return "title must be at least 3 characters";
    }
    return true;
}
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
return true;
}
//Validate due date (must be future date)
function validateDueDate(date) {
return true;
 }
 export{validateTitle, validatePriority, validateDueDate};