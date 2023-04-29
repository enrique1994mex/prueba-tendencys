import Product from './Product'
const Products = ({ products }) => {
	return (
		<table className='table'>
			<thead>
				<tr>
					<th scope='col'>Sku</th>
					<th scope='col'>Name</th>
					<th scope='col'>Quantity</th>
					<th scope='col'>Price</th>
				</tr>
			</thead>
			<tbody>
				{products.map((product, index) => (
					<Product key={index} product={product} />
				))}
			</tbody>
		</table>
	)
}

export default Products
