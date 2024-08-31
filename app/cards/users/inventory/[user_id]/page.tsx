import React from 'react'
import AddCard from '@/app/cards/components/AddCard'

interface Props {
    params: { user_id: number }
}

const InventoryPage = ({ params: { user_id } }: Props) => {
  return (
    <div>
        <div className='text-2xl'>Inventory Page for {user_id}</div>
        <AddCard />
    </div>
  )
}

export default InventoryPage