import { useRecoilValue } from "recoil"
import { useTodos } from "./assets/hooks/useTodos"
import { todosAtom } from "./assets/store/atoms/todosAtom"
import { Todo } from "./assets/components/Todo"
import { InputField } from "./assets/components/InputField"
import { useEffect } from "react"
import { filteredTodos } from "./assets/store/atoms/todosAtom"

export default function App(){
  useTodos()
  const filterSelector = useRecoilValue(filteredTodos)
  return <>
    <InputField />
    {filterSelector.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    
  </>
}