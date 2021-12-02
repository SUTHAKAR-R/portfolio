import React from 'react'
import { AllPosts, Footer, SeriousPosts } from '../components'

const Blog = () => {
	return (
		<main className="notion-page notion-page-no-cover notion-page-has-icon notion-page-has-image-icon notion-full-page not-notion-full-width">
			<div className="notion-page-icon-wrapper">
				<img src='/images/blog.png' className="notion-page-icon" alt="Blog" />
			</div>
			<h1 className="notion-title">Blog</h1>
			<div className="notion-page-content">
				<article className="notion-page-content-inner">
					<SeriousPosts />
					<div className="notion-blank notion-block-05bcc7efdc924a09abe3be6c350caf4b">&nbsp;</div>
					<AllPosts />
					<div className="notion-blank notion-block-9eb34e57d1144482b9a6f8bdcad95bda">&nbsp;</div>
					<hr className="notion-hr notion-block-95086d0ce94f4c57a3a216cde5c0994e" />
					<div className ="notion-blank notion-block-9eb34e57d1144482b9a6f8bdcad95bda">&nbsp;</div>
					<Footer />
				</article>
			</div>
		</main>
	)
}

export default Blog