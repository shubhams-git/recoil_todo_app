import axios from "axios";
import { todosAtom } from "../store/atoms/todosAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
export function useTodos(){
    const setTodos = useSetRecoilState(todosAtom)
    useEffect(()=>{
        try{
            async function fetch(){
                const res = await axios.get("http://localhost:3000/todos")
                setTodos(await res.data)
            }
            fetch()
        }catch(e){
        }
    },[])
    return null
}