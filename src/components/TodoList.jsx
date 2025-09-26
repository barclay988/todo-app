import { TodoCard } from "./TodoCard.jsx";
export function TodoList(props){

    // const tab = 'All'
    const {selectedTab, todos} = props
    const filterTodoList = selectedTab === 'All' ?
        todos:
        selectedTab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    return (
        <>

            {/* <TodoCard /> */}
            {
                filterTodoList.map((todo,todoIndex)=>{
                    return(
                        <TodoCard 
                         key={todoIndex}
                         todoIndex={todos.findIndex(val => val.input === todo.input)}
                         {...props}
                         todo={todo}/>
                    )
                })
            }


        </>
    )
}