import React from 'react'
import Link from 'next/link'

const Card = ({id, title, body}) => {
  return (
    <Link href={`/cards/${id}`}>
        <div className='m-5 bg-pink-500'>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    </Link>
  )
}

export default Card