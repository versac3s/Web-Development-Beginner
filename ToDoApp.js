let todo= [];
let msg = prompt("Enter request");

while(true){
    if(msg =="quit"){
        break;
    }
    if(msg =="list"){
        for(let i = 0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
    }else if(msg =="add"){
        let task = prompt("Add your task");
        todo.push(task);
        console.log("task added"); 
    }else if(msg =="delete"){
        let index = prompt("Please enter task index");
        todo.splice(index, 1);
        console.log("task deleted");
    }else{
        console.log("Invalid request");
    }
    msg = prompt("Enter request");
}
