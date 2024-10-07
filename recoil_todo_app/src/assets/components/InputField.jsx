import { useRecoilValue, useSetRecoilState } from "recoil"
import { filterAtom } from "../store/atoms/filterAtom"
import { filteredTodos, todosAtom } from "../store/atoms/todosAtom"
import { useEffect } from "react"

export function InputField(){
    const setFilter = useSetRecoilState(filterAtom)
    const setTodosAtom = useSetRecoilState(todosAtom)
    const filterSelector = useRecoilValue(filteredTodos)
    const handleSearchClick = () => {
        setTodosAtom(filterSelector);
    };
    return <div>
        <input type="text" onChange={(e)=>{
            setFilter(e.target.value)
        }} placeholder="Search something"></input>
        <hr/><br/>
    </div>
}   

