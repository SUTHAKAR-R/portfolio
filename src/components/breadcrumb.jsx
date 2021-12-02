import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumbs = () => {

	const { pathname } = useLocation()

	const BreadCrumb = ({ crumb }) => {

		console.log(crumb)

		if (!crumb) return ''

		return (
			<>
				<span className="spacer">/</span>
				<Link to={pathname} style={{ textDecoration: 'none' }}>
					<div className="breadcrumb active">
						<img src={`images/${crumb}.png`} className="notion-page-icon" alt={crumb} />
						<span className="title">{crumb.charAt(0).toUpperCase() + crumb.substring(1)}</span>
					</div>
				</Link>
			</>
		)
	}

	const pathnames = pathname.split('/')

	return (

		<div className="breadcrumbs">
			<Link to='/' className={`breadcrumb${pathname === '/' ? ' active' : ''}`}>
				<img className="icon notion-page-icon" src={'images/home.png'} alt="Suthakar" loading="lazy" />
				<span className="title">Suthakar Ram</span>
			</Link>
			{pathnames[1] && (<>
				<span className="spacer">/</span>
				<Link to={`/${pathnames[1]}`} style={{ textDecoration: 'none' }}>
					<div className={`breadcrumb${pathnames[2] ? '': ' active'}`}>
						<img src={`images/${pathnames[1]}.png`} className="icon notion-page-icon" alt={pathnames[1]} />
						<span className="title">{pathnames[1].charAt(0).toUpperCase() + pathnames[1].substring(1)}</span>
					</div>
				</Link>
			</>)}
			{pathnames[2] && (<>
				<span className="spacer">/</span>
				<Link to={pathname} style={{ textDecoration: 'none' }}>
					<div className="breadcrumb active">
						<img src={`images/${pathnames[2]}.png`} className="icon notion-page-icon" alt={pathnames[2]} />
						<span className="title">{pathnames[2].charAt(0).toUpperCase() + pathnames[2].substring(1)}</span>
					</div>
				</Link>
			</>)}
		</div>
	)
}

export default BreadCrumbs