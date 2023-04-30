import { useContext } from 'react'
import Order from './Order'
import { AppContext } from '../context/AppContext'

const Orders = () => {
	const { store } = useContext(AppContext)

	return (
		<div className='accordion' id='accordionExample'>
			{store.orders?.map((order) => (
				<Order key={order.number} order={order} />
			))}
		</div>
	)
}

export default Orders
