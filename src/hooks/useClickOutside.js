import { createRef, useEffect } from 'react'

export const useClickOutside = handler => {
	const searchRef = createRef()
	useEffect(() => {
		let outside = e => {
			if (!searchRef.current?.contains(e.target)) {
				handler()
			}
		}
		let escape = (e) => {
			if (e.key === 'Escape') handler()
		}
		document.addEventListener('mousedown', outside)
		document.addEventListener('keyup', escape)
		return () => {
			document.removeEventListener('mousedown', outside)
			document.removeEventListener('mousedown', escape)
		}
	})
	return searchRef
}