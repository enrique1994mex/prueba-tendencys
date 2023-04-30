import { useReducer } from 'react'
import response from '../mocks/results.json'

const orders = response.orders.map((order) => {
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

const initialState = {
	orders,
}

export const actionTypes = {
	addToProduct: 'ADD_TO_PRODUCT',
}

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.addToProduct:
			return {
				...state,
				orders: state.orders.map((order) => {
					if (order.number === action.payload.number) {
						return action.payload.order
					} else {
						return order
					}
				}),
			}
		default:
			return state
	}
}

const useInitialState = () => {
	const [store, dispatch] = useReducer(reducer, initialState)

	return {
		store,
		dispatch,
	}
}

export default useInitialState
