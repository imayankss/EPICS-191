import { onSnapshot, doc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../../firebase'
import { useState } from 'react'
import Boxes from './Boxes'

const Main = ({ session }) => {
    const [data, setData] = useState(null)
    useEffect(() =>
        onSnapshot(doc(db, 'users', session?.email), (doc) => setData(doc.data()))
        , [])
    return (
        <div className="bg-white/95 rounded-xl gap-2 w-full p-1 h-full md:rounded-[20px]">
            <Boxes />
        </div>
            
    )
}

export default Main