import React from 'react'
import Card from './Card'

export default function User({user}) {
  return (
    <Card>
        <h4>{user.username} ({user.age} years old)</h4>
    </Card>
  )
}
