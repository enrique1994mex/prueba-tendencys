const Product = ({ product }) => {
	return (
		<tr>
			<th scope='row'>{product.sku}</th>
			<td>{product.name}</td>
			<td>{product.quantity}</td>
			<td>{product.price}</td>
		</tr>
	)
}

export default Product
