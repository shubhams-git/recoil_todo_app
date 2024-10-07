import {atom, selector} from "recoil"
import { filterAtom } from "./filterAtom";
import { useTodos } from "../../hooks/useTodos";

export const todosAtom = atom({
    key: "todosAtom",
    default: []
})

export const filteredTodos = selector({
    key: "filteredTodos",
    get:({get})=>{
        let todos = get(todosAtom);
        
        const text = get(filterAtom);
        console.log(`todos ${todos.map(todo=>todo.id)} filter: ${text}`)
        if(!text){
            todos = get(todosAtom);
            console.log(`FROM !text: todos ${todos.map(todo=>todo.id)}, filter: ${text}`)
            return todos
        }

        const lowerCaseSearchString = text.toLowerCase();
        

        const resultant = todos.filter(todo => todo.title.toLowerCase().includes(lowerCaseSearchString) || todo.description.toLowerCase().includes(lowerCaseSearchString));
        console.log(`Resultant: ${resultant.map(todo=> todo.id)}`)
        return resultant
    }
})
