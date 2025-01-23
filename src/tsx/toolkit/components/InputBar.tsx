import React, { useCallback, useEffect, useState } from "react"
import { fetchMovies } from "../redux/movieSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../redux/store"

export function InputBar() {
    const [value, setValue] = useState<string>('')
    const [isHovered, setHovered] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        if (value.trim() !== '') {
        const timeOut = setTimeout(() => {
            const params = new URLSearchParams({apikey: import.meta.env.VITE_API_KEY, s: value})
            dispatch(fetchMovies(params.toString()))
        }, 1000)
        return () => {
            clearTimeout(timeOut)
        }
    }
    }, [value, dispatch])

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }, [])

    const onMouseEnter = () => setHovered(true)

    const onMouseLeave = () => {
        if (value.trim() == '') {
            setHovered(false)
        }
    }
    useEffect(() => {
        if (value.trim() == '') {
            setHovered(false)
        }
    }, [value])
    return (
        <div className={`input-bar ${isHovered ? 'input-bar-hovered' : ''}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <input type="text" value={value} onChange={(e) => onChange(e)} placeholder="Введите названия фильма"/>
                <button className="input__value-del"></button>
        </div>
    )
}