import { useState } from 'react'
import Products from './Products'
import Form from './Form'
import Alert from './Alert'
import Bag from '../assets/bag.svg'
import Plus from '../assets/plus.svg'
import BoxArrow from '../assets/box-arrow-right.svg'

const Order = ({ order }) => {
	const [form, setForm] = useState(false)
	const [buy, setBuy] = useState(false)

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
					<img src={Bag} height='20' width='20' className='mx-3' />
					{`Order #${order.number}`}
				</button>
			</h2>
			<div
				id={`${order.products[0].sku}${order.number}`}
				className='accordion-collapse collapse'
				data-bs-parent='#accordionExample'
			>
				<div className='accordion-body text-start'>
					<button
						className='btn btn-primary my-3'
						onClick={() => setForm((prevState) => !prevState)}
					>
						<img
							src={Plus}
							height='25'
							width='25'
							className='mx-1 bg-primary'
						/>
						Add product
					</button>
					<Products products={order.products} />
					{form && <Form order={order} setForm={setForm} />}
					<button
						className='btn btn-success my-3 btn-lg'
						onClick={() => setBuy((prevState) => !prevState)}
					>
						Buy
						<img
							src={BoxArrow}
							height='30'
							width='30'
							className='mx-3 bg-success'
						/>
					</button>
					{buy && <Alert setBuy={setBuy} />}
				</div>
			</div>
		</div>
	)
}

export default Order
