import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard'
import { doc, setDoc, deleteField } from 'firebase/firestore'
import { db } from '../firebase'
import useFetchTodos from '../hooks/fetchTodos'
import DateAndTime from './DateAndTime'

export default function UserDashboard() {
    const { userInfo, currentUser } = useAuth()
    const [edit, setEdit] = useState(null)
    const [todo, setTodo] = useState('')
    const [edditedValue, setEdditedValue] = useState('')

    const { todos, setTodos, loading, error } = useFetchTodos()

    // useEffect(() => {
    //     if (!userInfo || Object.keys(userInfo).length === 0) {
    //         setAddTodo(true)
    //     }
    // }, [userInfo])

    const handleAddTodo = async () => {
        if (!todo) { return }
        const newKey = Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1
        const userRef = doc(db, 'users', currentUser.uid)
        setTodos({ ...todos, [newKey]: todo })
        await setDoc(userRef, {
            'todos': {
                [newKey]: todo
            }
        }, { merge: true })
        setTodo('')
    }

    const handleEditTodo = async () => {
        if (!edditedValue) { return }
        const newKey = edit
        setTodos({ ...todos, [newKey]: edditedValue })
        const userRef = doc(db, 'users', currentUser.uid)
        await setDoc(userRef, {
            'todos': {
                [newKey]: edditedValue
            }
        }, { merge: true })
        setEdit(null)
        setEdditedValue('')
    }

    const handleAddEdit = (todoKey) => {
        return () => {
            setEdit(todoKey)
            setEdditedValue(todos[todoKey])
        }
    }

    const handleDelete = (todoKey) => {
        return async () => {
            const tempObj = { ...todos }
            delete tempObj[todoKey]
            setTodos(tempObj)
            const userRef = doc(db, 'users', currentUser.uid)
            await setDoc(userRef, {
                'todos': {
                    [todoKey]: deleteField()
                }
            }, { merge: true })
        }
    }

    return (
        <div className='w-full max-w-[65ch] mx-auto flex flex-col flex-1 gap-3 sm:gap-5 text-xs sm:text-sm'>
            <DateAndTime />
            <div className='flex items-stretch'>
                <input type='text' placeholder='Enter Task' value={todo} onChange={(e) => setTodo(e.target.value)} className='outline-none p-3 text-base sm:text-lg text-slate-900 flex-1 rounded-l-lg' />
                <button onClick={handleAddTodo} className='w-dit px-4 sm:px-6 py-2 sm:py-3 bg-blue-800 text-white font-medium text-base duration-300 hover:opacity-40 rounded-r-lg'>ADD</button>
            </div>
            {(loading) && (<div className='flex-1 grid  place-items-center'>
                <i className="fa-solid fa-spinner animate-spin text-6xl"></i>
            </div>)}
            {(!loading) && (
                <>
                    {Object.keys(todos).map((todo, i) => {
                        return (
                            <TodoCard key={i} handleAddEdit={handleAddEdit} edit={edit} todoKey={todo} edditedValue={edditedValue} setEdditedValue={setEdditedValue} handleEditTodo={handleEditTodo} handleDelete={handleDelete}>
                                {todos[todo]}
                            </TodoCard>
                        )
                    })}
                </>
            )}
            {/* {!addTodo && <button onClick={() => setAddTodo(true)} className='text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase text-lg duration-300 hover:opacity-30'>Add Todo</button>} */}
            <div>Total Tasks: {}</div>
        </div>
    )
}
