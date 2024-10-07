import { useRecoilValue } from "recoil"
import { useTodos } from "./assets/hooks/useTodos"
import { todosAtom } from "./assets/store/atoms/todosAtom"
import { Todo } from "./assets/components/Todo"
import { InputField } from "./assets/components/InputField"

export default function App(){
  useTodos()
  const todosAtoms = useRecoilValue(todosAtom) 
  return <>
    <InputField />
    {todosAtoms.map(todo=><Todo key={todo.id} title = {todo.title} description= {todo.description}/>)}
    
  </>
}