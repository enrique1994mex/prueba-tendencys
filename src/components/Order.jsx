import Products from './Products'
const Order = ({ order }) => {
	return (
		<div className='accordion-item'>
			<h2 className='accordion-header'>
				<button
					className='accordion-button collapsed'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target={`#${order.products[0].sku}${order.number}`}
					aria-expanded='false'
					aria-controls={`${order.products[0].sku}${order.number}`}
				>
					{`Order #${order.number}`}
				</button>
			</h2>
			<div
				id={`${order.products[0].sku}${order.number}`}
				className='accordion-collapse collapse'
				data-bs-parent='#accordionExample'
			>
				<div className='accordion-body text-start'>
					<button className='btn btn-primary'>Add product</button>
					<Products products={order.products} />
				</div>
			</div>
		</div>
	)
}

export default Order
