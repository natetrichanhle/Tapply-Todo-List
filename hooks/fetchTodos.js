import React, { useState, useEffect, useRef } from 'react'
import { collection, doc, getDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase'


export default function fetchTodos() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [todos, setTodos] = useState(null)
    const { currentUser } = useAuth()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, 'users', currentUser.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setTodos(docSnap.data().todos)
                    // console.log(docSnap.data())
                } else {
                    setTodos({})
                }
            } catch (err) {
                setError('Failed to load todos')
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])


    return { loading, error, todos, setTodos }
}
