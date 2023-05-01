import { useEffect, useContext } from 'react'
import Orders from './components/Orders'
import useGetProducts from './hooks/useGetProducts'
import { actionTypes } from './hooks/useInitialState'
import { AppContext } from './context/AppContext'
function App() {
	const { dispatch } = useContext(AppContext)
	const { isLoading, products } = useGetProducts()
	useEffect(() => {
		const orders = products?.map((order) => {
			const number = order.number
			const products = order.items.map((product) => {
				return {
					sku: product.sku,
					name: product.name,
					quantity: product.fulfillment.quantity,
					price: product.price,
				}
			})
			return { number, products }
		})
		dispatch({ type: actionTypes.downloadProducts, payload: orders })
	}, [dispatch, products])
	return (
		<>
			<div className='container-fluid my-5 text-center'>
				<h1 className='mb-5'>Orders</h1>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-7'>
						{isLoading && (
							<div className='spinner-border' role='status'>
								<span className='visually-hidden'>Loading...</span>
							</div>
						)}
						<Orders />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
