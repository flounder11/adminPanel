interface IPaginationItemsProps {
	currentPage: number
	totalPages: number
	onNext: () => void
	onPrev: () => void
	onPageChange: (page: number) => void
}

export default function PaginationItems({
	currentPage,
	totalPages,
	onNext,
	onPrev,
	onPageChange
}: IPaginationItemsProps) {
	return (
		<div className="py-4 flex justify-end">
			<button
				onClick={onPrev}
				disabled={currentPage === 1}
				className="px-3 py-2 border rounded"
			>
				Prev
			</button>

			{Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
				<button
					key={page}
					onClick={() => onPageChange(page)}
					className={`px-3 py-2 border rounded ${
						page === currentPage ? 'bg-blue-500 text-white' : ''
					}`}
				>
					{page}
				</button>
			))}

			<button
				onClick={onNext}
				disabled={currentPage === totalPages}
				className="px-3 py-2 border rounded"
			>
				Next
			</button>
		</div>
	)
}
