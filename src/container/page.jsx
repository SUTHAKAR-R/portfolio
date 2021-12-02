import React, { useEffect } from 'react'
import { useLocation } from 'react-router'

const Page = ({ children }) => {

	const { pathname } = useLocation()
	const home = pathname === '/' 

	useEffect(() => {
		window.scrollTo(0, 0)
		const paths = pathname.split('/')
		document.title = home ? 'Suthakar Ram' : paths[1].charAt(0).toUpperCase() + paths[1].substring(1)
	}, [pathname])

	return (
		<div className={`notion notion-app light-mode ${home ? 'notion-block-882cd6dd6e1e482d823b464f326213e5' : 'notion-block-29bb193c1a104ba2b832788b57d58cd6'}`}>
			<div className="notion-frame">
				{children}
			</div>
		</div>
	)
}

export default Page