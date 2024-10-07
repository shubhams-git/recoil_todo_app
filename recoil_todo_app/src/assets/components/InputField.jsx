import { useSetRecoilState } from "recoil"
import { filterAtom } from "../store/atoms/filterAtom"

export function InputField(){
    const setFilter = useSetRecoilState(filterAtom)
    return <div>
        <input type="text" onChange={(e)=>{
            setFilter(e.target.value)
        }} placeholder="Enter something"></input>
        <button>Search</button>
        <hr/><br/>
    </div>
}
