import React from 'react'
import data from './data'
import Navbar from './components/Navbar'
import Card from './components/Card'

export default function App() {
    const lastItem = data[data.length - 1]
    const cardElement = data.map(item => {
        return (
            <>
                <Card 
                key={item.id}
                {...item}
                />
                {item !== lastItem && <hr />}
            </>
        )
    })

    return (
        <div>
            <Navbar />
            <section className='card'>
                {cardElement}
            </section>
        </div>
    )
}