import { memo } from "react"

export const Todo = memo(function Todo({title, description}){
    return <div>
        <b>{title}</b>
        <p>{description}</p>
        <hr/>
    </div>
});
