import React from 'react'

export default function Body(props) {
    console.log(props)

  return (
    <div>
        {props.list.map((item, index) => {
            return (
                <div key={index}>
                    <h3>{item.title}</h3>
                </div>
            )
        })}
    </div>
  )
}
