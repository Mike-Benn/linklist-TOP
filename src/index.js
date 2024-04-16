import { LinkedList } from "./list.js";

let list = LinkedList();

list.append("circle");
list.append("triangle");
list.append("square");
list.prepend("diamond");

list.toString();
