import { useReducer } from 'react'
//import response from '../mocks/results.json'

export const actionTypes = {
	downloadProducts: 'DOWNLOAD_PRODUCTS',
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
		case actionTypes.downloadProducts:
			return {
				...state,
				orders: action.payload,
			}
		default:
			return state
	}
}

const initialState = {
	orders: [],
}

const useInitialState = () => {
	const [store, dispatch] = useReducer(reducer, initialState)

	return {
		store,
		dispatch,
	}
}

export default useInitialState
