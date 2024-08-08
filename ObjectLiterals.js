//OBJECT LITERALS
const post={
    username:"Eva",
    content:"Good Morning",
    likes: 150,
    reposts: 5
};

//accessing values in object
console.log(post.username);
let name = post["username"]; // we can store value in another variable using [] syntax only
console.log(name); 

//Update exisitng value
post.username="Darla";

//Add new value
post.age="20";
console.log(post);

//Delete a value
delete post.likes;
console.log(post);

//OBJECT OF OBJECTS
const classA={
    aman:{
        grade:"A",
        city:"Pune"
    },
    sharr:{
        grade:"A",
        city:"Pune"
    }
}
classA.sharr.city="Delhi";
console.log(classA);

//ARRAY OF OBJECTS
const classB = [
    {
        name:"Danny",
        city:"Pune"
    },
    {
        name:"Zara",
        city:"Pune"
    }
]
classB[1].city="Delhi"
console.log(classB);

//GENERATE RANDOM INTEGER BW 1 AND 10
let no = Math.random();
no = no*10;
no = Math.floor(no);
no=no+1; //random() does not produce 10, so we add 1 to make sure 10 se produced. 
//if asked to print bw 5 and 10, instead of 1 add 5.
//Math.floor(Math.random()*10)+1; single step for above code
console.log(no);

