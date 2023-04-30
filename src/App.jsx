import Orders from './components/Orders'
function App() {
	return (
		<>
			<div className='container-fluid my-5 text-center'>
				<h1 className='mb-5'>Orders</h1>
				<div className='row justify-content-center'>
					<div className='col-12 col-md-8 col-lg-7'>
						<Orders />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
