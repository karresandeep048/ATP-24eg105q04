function validateTitle(title)
{
   if(!title)
   {
    return "Required Title"
   }
   if(title.length<=3)
   {
    return "Title should be more than 3 characters"
   }
   return true
}
function validatePriority(priority)
{
    if(priority!="low" && priority!="medium" && priority!="high")
    {
        return "Priority should be low, medium or high"
    }
    return true
}
function validateDueDate(duedate)
{
    let today=new Date()
    if(duedate<today)
        return "Invalid duedate"
    return true
}
export {validateTitle, validatePriority, validateDueDate}