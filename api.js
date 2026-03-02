fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(postData=> console.log(postData))
.catch(err=>console.log( "err is",err))