const Alert = ({ setBuy }) => {
	return (
		<div
			className='alert alert-success alert-dismissible fade show'
			role='alert'
		>
			¡Thanks for you buy!
			<button
				type='button'
				className='btn-close'
				data-bs-dismiss='alert'
				aria-label='Close'
				onClick={() => setBuy((prevState) => !prevState)}
			></button>
		</div>
	)
}

export default Alert
