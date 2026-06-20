import arrowImg from '../../assets/arrow.png'

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
			{/* стрелка с параметрами их хука */}
			<button
				onClick={onPrev}
				disabled={currentPage === 1}
				className="px-3 py-2 border rounded"
			>
				<img
					src={arrowImg}
					alt="Prev"
					className="w-6"
				/>
			</button>

			{/* нумерация страниц, создали массив передали параметры */}
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

			{/* стрелка с параметрами их хука */}
			<button
				onClick={onNext}
				disabled={currentPage === totalPages}
				className="px-3 py-2 border rounded"
			>
				<img
					src={arrowImg}
					alt="Next"
					className="w-6 rotate-180"
				/>
			</button>
		</div>
	)
}
