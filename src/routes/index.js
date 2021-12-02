import { Home, Now, Resume, Contact, Blog, Links, Remarks, Portfolio, Photos, Post, NotFound, Folio } from '../pages'

export default [
	{
		path: '/',
		exact: true,
		main: Home
	},
	{
		path: '/resume',
		main: Resume
	},
	{
		path: '/now',
		main: Now
	},
	{
		path: '/contact',
		main: Contact
	},
	{
		path: '/blog',
		exact: true,
		main: Blog
	},
	{
		path: '/blog/:slug',
		main: Post
	},
	{
		path: '/links',
		main: Links
	},
	{
		path: '/remarks',
		main: Remarks
	},
	{
		path: '/portfolio',
		exact: true,
		main: Portfolio
	},
	{
		path: '/portfolio/:slug',
		main: Folio
	},
	{
		path: '/photos',
		main: Photos
	},
	{
		path: '/404',
		main: NotFound
	}
]