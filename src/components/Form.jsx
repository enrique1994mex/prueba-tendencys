import { useRef, useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { actionTypes } from '../hooks/useInitialState'

const Form = ({ order, setForm }) => {
	const { dispatch } = useContext(AppContext)
	const form = useRef(null)

	const [formValidated, setFormValidated] = useState(null)

	useEffect(() => {
		const form1 = document.getElementById('form-product')
		setFormValidated(form1)
	}, [])

	const newOrder = (newProduct) => ({
		number: order.number,
		products: [...order.products, newProduct],
	})

	const handleSubmit = (event) => {
		event.preventDefault()
		const formData = new FormData(form.current)
		const data = {
			name: formData.get('name'),
			price: formData.get('price'),
			quantity: formData.get('quantity'),
			sku: formData.get('sku'),
		}
		formValidated.classList.add('was-validated')
		if (data.name && data.price && data.quantity && data.sku) {
			dispatch({
				type: actionTypes.addToProduct,
				payload: { number: order.number, order: newOrder(data) },
			})
			form.current.reset()
			setForm((prevState) => !prevState)
		} else {
			return
		}
	}

	return (
		<form
			className='row g-3 mt-4 mb-3 border border-secondary border-1 py-2 needs-validation'
			id='form-product'
			noValidate
			ref={form}
			onSubmit={handleSubmit}
		>
			<div className='col-md-6'>
				<label htmlFor='validationCustom01' className='form-label'>
					Sku
				</label>
				<input
					name='sku'
					type='text'
					className='form-control'
					id='validationCustom01'
					required
				/>
				<div className='invalid-feedback'>Please choose a sku.</div>
			</div>
			<div className='col-md-6'>
				<label htmlFor='validationCustom02' className='form-label'>
					Name
				</label>
				<input
					name='name'
					type='text'
					className='form-control'
					id='validationCustom02'
					required
				/>
				<div className='invalid-feedback'>Please choose a name.</div>
			</div>
			<div className='col-md-6'>
				<label htmlFor='validationCustomUsername' className='form-label'>
					Quantity
				</label>
				<input
					name='quantity'
					type='text'
					className='form-control'
					id='validationCustomUsername'
					aria-describedby='inputGroupPrepend'
					required
				/>
				<div className='invalid-feedback'>Please choose a quantity.</div>
			</div>
			<div className='col-md-6'>
				<label htmlFor='validationCustom03' className='form-label'>
					Price
				</label>
				<input
					name='price'
					type='text'
					className='form-control'
					id='validationCustom03'
					required
				/>
				<div className='invalid-feedback'>Please provide a price.</div>
			</div>
			<div className='col-12'>
				<button className='btn btn-primary' type='submit'>
					Submit form
				</button>
			</div>
		</form>
	)
}

export default Form
