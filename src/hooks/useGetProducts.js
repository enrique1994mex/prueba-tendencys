import { useState, useEffect } from 'react'

const useGetProducts = () => {
	const baseURL = 'https://eshop-deve.herokuapp.com/api/v2/orders'
	const token = import.meta.env.VITE_TOKEN
	const [isLoading, setIsLoading] = useState(false)
	const [products, setProducts] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		setIsLoading(true)
		fetch(baseURL, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				return setProducts(data.orders)
			})
			.catch((error) => {
				return setError(error)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [token])
	return {
		isLoading,
		products,
		error,
	}
}

export default useGetProducts
