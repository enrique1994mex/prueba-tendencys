import Orders from './components/Orders'
import response from './mocks/results.json'
function App() {
	const orders = response.orders.map((order) => {
		const number = order.number
		const products = order.items.map((product) => ({
			sku: product.sku,
			name: product.name,
			quantity: product.fulfillment.quantity,
			price: product.price,
		}))
		return { number, products }
	})
	console.log(orders)
	return (
		<>
			<div className='container-fluid my-5 text-center'>
				<h1>Orders</h1>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-7'>
						<Orders data={orders} />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
