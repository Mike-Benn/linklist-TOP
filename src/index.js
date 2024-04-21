import { LinkedList } from "./list.js";

let list = LinkedList();

list.append("circle" , "circle");
list.append("triangle" ,"triangle");
list.append("square" , "square");
list.prepend("diamond" , "diamond");

list.toString();
list.remove("square");
console.log(list.getSize());
list.toString();
console.log(list.at(1).getLast().getKey());
console.log(list.at(1).getNext().getKey());

