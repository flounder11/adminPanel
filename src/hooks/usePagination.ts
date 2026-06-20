import { useMemo, useState } from 'react'

interface IUsePaginationProps<T> {
	data: T[]
	itemsOnPage?: number
}

export function usePagination<T>({
	data,
	itemsOnPage = 15
}: IUsePaginationProps<T>) {
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = Math.ceil(data.length / itemsOnPage)

	const currentData = useMemo(() => {
		const start = (currentPage - 1) * itemsOnPage
		const end = start + itemsOnPage

		return data.slice(start, end)
	}, [data, currentPage, itemsOnPage])

	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(prev => prev + 1)
		}
	}

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(prev => prev - 1)
		}
	}

	return {
		currentPage,
		totalPages,
		currentData,
		setCurrentPage,
		nextPage,
		prevPage
	}
}
