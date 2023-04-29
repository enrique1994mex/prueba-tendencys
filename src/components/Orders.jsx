import Order from './Order'
const Orders = ({ data }) => {
	return (
		<div className='accordion' id='accordionExample'>
			{data.map((order) => (
				<Order key={order.number} order={order} />
			))}
		</div>
	)
}

export default Orders
