import React from 'react'

export default function TodoCard(props) {
    const { children, edit, handleAddEdit, edittedValue, setEdditedValue, todoKey, handleEditTodo, handleDelete } = props

    return (
        <div className='p-2 sm:p-3 border border-white border-solid flex items-stretch relative'>
            <div className='flex-1 flex'>
                {!(edit === todoKey) ? <>{children}</> : (
                    <input className='bg-inherit text-white outline-none flex-1' value={edittedValue} onChange={(e) => setEdditedValue(e.target.value)} />
                )}
                {/* {children} */}
            </div>
            <div className='flex items-center'>
                {(edit === todoKey) ? <i onClick={handleEditTodo} className="fa-solid fa-check px-2 duration-300 hover:scale-125 cursor-pointer"></i> : <i className="fa-solid fa-pencil px-2 duration-300 hover:rotate-45 cursor-pointer" onClick={handleAddEdit(todoKey)}></i>}
                <i onClick={handleDelete(todoKey)} className="fa-solid fa-trash-can px-2 duration-300 hover:scale-125 cursor-pointer"></i>
            </div>
        </div>
    )
}
