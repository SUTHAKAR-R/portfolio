import React from 'react'
import { Footer } from '../components'

const Post = () => {

	return (
		<main className="notion-page notion-page-no-cover notion-page-has-icon notion-page-has-image-icon notion-full-page not-notion-full-width">
			<div className="notion-page-icon-wrapper">
				<img
					src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd06885d0-95b1-47c3-9d36-cd9383f6404f%2Fsparkles_2728.png?table=block&id=2829988d-7f1e-4632-ae25-070c7f6278fe&cache=v2"
					className="notion-page-icon"
					alt="Customizing Notion with Fruition"
					loading="lazy"
				/>
			</div>
			<h1 className="notion-title">Customizing Notion with Fruition</h1>
			<div className="notion-collection-row">
				<div className="notion-collection-row-body" />
			</div>
			<div className="notion-page-content">
				<article className="notion-page-content-inner">
					<div className="notion-text notion-block-52153f6e856f451a880591ccada99c4e">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="notion-link"
							href="https://fruitionsite.com/"
						>
							Fruition
						</a>{" "}
						is great. It's an open-sourced tool for creating websites with Notion.
						It's what makes this site possible. Most people use it to enable custom
						domains for their Notion public pages{" "}
						<span className="notion-gray">
							(e.g. from notion.so → customdomain.com)
						</span>
						, yet there is so much more that you can do with it. Here are some
						things that I find possible with Fruition.
					</div>
					<div className="notion-blank notion-block-2e742d2de32e450db99d389d293d6cd4">
						&nbsp;
					</div>
					<div className="notion-callout notion-gray_background_co notion-block-7f1dffe9ad944c37ae29182a40e9bca7">
						<img
							src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F043be478-9335-4535-be68-240837e84daa%2Fgem-stone_1f48e.png?table=block&id=7f1dffe9-ad94-4c37-ae29-182a40e9bca7&cache=v2"
							className="notion-page-icon"
							alt="UPDATE
	I have migrated to Potion.so and I am no longer using Fruition. However, this post still applies if you are looking to customize your Notion websites with Fruition."
							loading="lazy"
						/>
						<div className="notion-callout-text">
							<b>UPDATE</b>
							<span className="notion-gray">I have migrated to </span>
							<span className="notion-gray">
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="notion-link"
									href="http://potion.so"
								>
									Potion.so
								</a>
							</span>
							<span className="notion-gray">
								{" "}
								and I am no longer using Fruition. However, this post still applies
								if you are looking to customize your Notion websites with Fruition.
							</span>
						</div>
					</div>
					<div className="notion-blank notion-block-2c1370e5f9604e1eb651c43ad1bb94d8">
						&nbsp;
					</div>
					<figure className="notion-asset-wrapper notion-asset-wrapper-image notion-block-153b7fb252cf473580eaef72602772a9">
						<div
							style={{
								position: "relative",
								display: "flex",
								justifyContent: "center",
								alignSelf: "center",
								width: "100%",
								maxWidth: "100%",
								flexDirection: "column"
							}}
						>
							<img
								src="https://www.notion.so/image/https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3o6MbqQloukLjKqSMo%2Fsource.gif?table=block&id=153b7fb2-52cf-4735-80ea-ef72602772a9&cache=v2"
								loading="lazy"
								alt="notion image"
								decoding="async"
								style={{ objectFit: "contain" }}
							/>
						</div>
					</figure>
					<div className="notion-blank notion-block-90c57aaa58334f9fab8d3d795872ed1c">
						&nbsp;
					</div>
					<hr className="notion-hr notion-block-d52a266dddf74594893f0aff7715f651" />
					<h2
						className="notion-h notion-h1 notion-h-indent-0 notion-block-35eb7600ca2d4398a716300174000ee7"
						data-id="35eb7600ca2d4398a716300174000ee7"
					>
						<span>
							<div
								id="35eb7600ca2d4398a716300174000ee7"
								className="notion-header-anchor"
							/>
							<a
								className="notion-hash-link"
								href="#35eb7600ca2d4398a716300174000ee7"
								title="Custom Script"
							>
								<svg viewBox="0 0 16 16" width={16} height={16}>
									<path
										fillRule="evenodd"
										d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
									/>
								</svg>
							</a>
							<span className="notion-h-title">Custom Script</span>
						</span>
					</h2>
					<div className="notion-text notion-block-4f8f69b65b9b4a4bb64392df35b15ce0">
						In short, the way Fruition works involves copy and pasting a generated
						script into Cloudflare. The script comes with certain variables that you
						can adjust to your needs.
					</div>
					<div className="notion-blank notion-block-b5c7b8ade2f54b438d17f4b30a890162">
						&nbsp;
					</div>
					<figure className="notion-asset-wrapper notion-asset-wrapper-image notion-block-6638edc9bfe1417085ff261381c37eed">
						<div
							style={{
								position: "relative",
								display: "flex",
								justifyContent: "center",
								alignSelf: "center",
								width: "100%",
								maxWidth: "100%",
								flexDirection: "column",
								height: "100%"
							}}
						>
							<img
								src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdcd0806f-7cbe-408e-b7e7-1f81bfb0c8d5%2Fcarbon_(6).png?table=block&id=6638edc9-bfe1-4170-85ff-261381c37eed&cache=v2"
								loading="lazy"
								alt="The script generated by Fruition"
								decoding="async"
								style={{ objectFit: "contain" }}
							/>
							<figcaption className="notion-asset-caption">
								The script generated by Fruition
							</figcaption>
						</div>
					</figure>
					<div className="notion-blank notion-block-7ecbf5a6e2904eebb63b18ce8713e5f9">
						&nbsp;
					</div>
					<div className="notion-text notion-block-296882884c294255a41832aa4f737253">
						And yes, you can add your own scripts inside the{" "}
						<code className="notion-inline-code">CUSTOM_SCRIPT</code> variable. I
						find that adding Google Analytics here is a must. You can add your own
						Javascript here but for me, this is also where I add my custom CSS using
						the tag{" "}
						<code className="notion-inline-code">&lt;style&gt;&lt;/style&gt;</code>,
						although I'm now considering linking a separate stylesheet file instead.
					</div>
					<div className="notion-blank notion-block-feac285797ab4d29aa01fb0e8ece8562">
						&nbsp;
					</div>
					<hr className="notion-hr notion-block-69a0b5138afb4326a41976e6e090439d" />
					<h2
						className="notion-h notion-h1 notion-h-indent-0 notion-block-d3df765bd0c44e928df3ded23bcbec03"
						data-id="d3df765bd0c44e928df3ded23bcbec03"
					>
						<span>
							<div
								id="d3df765bd0c44e928df3ded23bcbec03"
								className="notion-header-anchor"
							/>
							<a
								className="notion-hash-link"
								href="#d3df765bd0c44e928df3ded23bcbec03"
								title="Custom CSS"
							>
								<svg viewBox="0 0 16 16" width={16} height={16}>
									<path
										fillRule="evenodd"
										d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
									/>
								</svg>
							</a>
							<span className="notion-h-title">Custom CSS</span>
						</span>
					</h2>
					<div className="notion-text notion-block-33f3831b94be47bb94757b29867b3eb3">
						Yes, that's right. Override the default Notion look with your own CSS.
						This can be tricky as you will find that most of the HTML elements do
						not have classes and the ones that do are typically recurring common
						elements such as containers and backgrounds.
					</div>
					<div className="notion-blank notion-block-ce050699ea424f57a1776d4b2e847517">
						&nbsp;
					</div>
					<figure className="notion-asset-wrapper notion-asset-wrapper-image notion-block-ab81af81f6d342d9bb244682f0c15458">
						<div
							style={{
								position: "relative",
								display: "flex",
								justifyContent: "center",
								alignSelf: "center",
								width: 432,
								maxWidth: "100%",
								flexDirection: "column"
							}}
						>
							<img
								src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F25c11057-1e7a-466a-b2be-df2cea2b5914%2Fcarbon_(2).png?table=block&id=ab81af81-f6d3-42d9-bb24-4682f0c15458&cache=v2"
								loading="lazy"
								alt="Styling common elements"
								decoding="async"
								style={{ objectFit: "contain" }}
							/>
							<figcaption className="notion-asset-caption">
								Styling common elements
							</figcaption>
						</div>
					</figure>
					<div className="notion-blank notion-block-137da063934e43d992dd15d4c6e1ec09">
						&nbsp;
					</div>
					<div className="notion-text notion-block-2f7d5658197c4b5ea88f9b0e4fbbff27">
						Luckily, for every content that you add in Notion has its own unique id
						which take the form of the attribute{" "}
						<code className="notion-inline-code">'data-block-id'</code> . You can
						refer to this unique attribute in the CSS to style specific contents of
						your Notion page.
					</div>
					<div className="notion-blank notion-block-a80b8a6cb64c49f1a496c1400f50a4b0">
						&nbsp;
					</div>
					<figure className="notion-asset-wrapper notion-asset-wrapper-image notion-block-86922e1676124a13ab4063132d7a0c0f">
						<div
							style={{
								position: "relative",
								display: "flex",
								justifyContent: "center",
								alignSelf: "center",
								width: 576,
								maxWidth: "100%",
								flexDirection: "column"
							}}
						>
							<img
								src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F249f6823-8cb4-49e6-9c5f-5c6851c18381%2Fcarbon_(3).png?table=block&id=86922e16-7612-4a13-ab40-63132d7a0c0f&cache=v2"
								loading="lazy"
								alt="Styling unique elements"
								decoding="async"
								style={{ objectFit: "contain" }}
							/>
							<figcaption className="notion-asset-caption">
								Styling unique elements
							</figcaption>
						</div>
					</figure>
					<div className="notion-blank notion-block-5b75dad49f464cfa96ea03ae487f0e1c">
						&nbsp;
					</div>
					<div className="notion-text notion-block-ca7dffac4b3e42eb99029ea1a3f1a83d">
						If you're wondering how to find these unique id for each block, you can
						check out the{" "}
						<span className="notion-gray">
							<em>Link to content </em>
						</span>
						blocks section of the official documentation{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="notion-link"
							href="https://www.notion.so/Create-links-backlinks-cb3c406403c940b68af52de121e05474"
						>
							here
						</a>
						. Personally, I find it convenient to use the browser developer tools to
						inspect the elements directly and see the{" "}
						<code className="notion-inline-code">'data-block-id'</code> while
						tweaking with the CSS syntax to experiment on how it would look like.
					</div>
					<div className="notion-blank notion-block-ca6f1bfa33cf46079ae26ec559ea7eef">
						&nbsp;
					</div>
					<figure className="notion-asset-wrapper notion-asset-wrapper-image notion-block-7a36a1642cba4cffbdf7ec698f256aa2">
						<div
							style={{
								position: "relative",
								display: "flex",
								justifyContent: "center",
								alignSelf: "center",
								width: 576,
								maxWidth: "100%",
								flexDirection: "column"
							}}
						>
							<img
								src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe6536da0-d622-4141-9ac2-d7565d464830%2FScreen_Shot_2020-10-19_at_10.03.09.png?table=block&id=7a36a164-2cba-4cff-bdf7-ec698f256aa2&cache=v2"
								loading="lazy"
								alt="Using developer tools to inspect elements and find the data-block-id of each content"
								decoding="async"
								style={{ objectFit: "contain" }}
							/>
							<figcaption className="notion-asset-caption">
								Using developer tools to inspect elements and find the data-block-id
								of each content
							</figcaption>
						</div>
					</figure>
					<div className="notion-blank notion-block-fd8e26de42ef4af0917b3d86038b7676">
						&nbsp;
					</div>
					<hr className="notion-hr notion-block-423df6cc5f244913a93741f1820fd61b" />
					<h2
						className="notion-h notion-h1 notion-h-indent-0 notion-block-495a85fbb01842e6a86b602348e0fb55"
						data-id="495a85fbb01842e6a86b602348e0fb55"
					>
						<span>
							<div
								id="495a85fbb01842e6a86b602348e0fb55"
								className="notion-header-anchor"
							/>
							<a
								className="notion-hash-link"
								href="#495a85fbb01842e6a86b602348e0fb55"
								title="Adding Favicon and Meta Tags"
							>
								<svg viewBox="0 0 16 16" width={16} height={16}>
									<path
										fillRule="evenodd"
										d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
									/>
								</svg>
							</a>
							<span className="notion-h-title">Adding Favicon and Meta Tags</span>
						</span>
					</h2>
					<div className="notion-text notion-block-df0cc433a33244e186119762118ce4e2">
						You can take it further and edit the Fruition script to add your own
						favicon and meta tags. Adding your own favicon overrides the default
						Notion one while adding relevant meta tags can improve the way your site
						is previewed on social media.
					</div>
					<div className="notion-blank notion-block-be5e62acd7b2429aae90fa286debd8c9">
						&nbsp;
					</div>
					<figure className="notion-asset-wrapper notion-asset-wrapper-image notion-block-964c4000d62f4d069f35b78b92bf3427">
						<div
							style={{
								position: "relative",
								display: "flex",
								justifyContent: "center",
								alignSelf: "center",
								width: 384,
								maxWidth: "100%",
								flexDirection: "column"
							}}
						>
							<img
								src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3e573102-cb39-45ac-99e1-851b7451103b%2FScreen_Shot_2020-10-18_at_13.18.44.png?table=block&id=964c4000-d62f-4d06-9f35-b78b92bf3427&cache=v2"
								loading="lazy"
								alt="Facebook link preview"
								decoding="async"
								style={{ objectFit: "contain" }}
							/>
							<figcaption className="notion-asset-caption">
								Facebook link preview
							</figcaption>
						</div>
					</figure>
					<div className="notion-blank notion-block-059f4f368a41463c94ed317d0bc22c76">
						&nbsp;
					</div>
					<div className="notion-text notion-block-8c705b9579ea4fcd9aa453855c199446">
						I won't go into detail on how I achieved this, but I have linked my
						customized Fruition script below that you can simply use to enable your
						own favicon and meta tags.
					</div>
					<div className="notion-blank notion-block-a77549b45dee4a0497ea469a1c91ee46">
						&nbsp;
					</div>
					<hr className="notion-hr notion-block-6021b3e3d0ef46e8a0ef2949bd7207c0" />
					<h2
						className="notion-h notion-h1 notion-h-indent-0 notion-block-c976d4678bb74a5a8d18ab384e00ba34"
						data-id="c976d4678bb74a5a8d18ab384e00ba34"
					>
						<span>
							<div
								id="c976d4678bb74a5a8d18ab384e00ba34"
								className="notion-header-anchor"
							/>
							<a
								className="notion-hash-link"
								href="#c976d4678bb74a5a8d18ab384e00ba34"
								title="Custom Logic"
							>
								<svg viewBox="0 0 16 16" width={16} height={16}>
									<path
										fillRule="evenodd"
										d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
									/>
								</svg>
							</a>
							<span className="notion-h-title">Custom Logic</span>
						</span>
					</h2>
					<div className="notion-text notion-block-b8bee1647da54c6e8efc1c134acee7a1">
						But of course you can even take it to the next level by adding logic to
						the Fruition script. A simple example would be adding a logic to detect
						the time of day the user is visiting your website and display a
						different visual theme based on that. Something like automatic dark
						mode. I've made a personal proof of concept with this exact example and
						it works.
					</div>
					<div className="notion-blank notion-block-06264d4be16b477b8efd4d0e3603f26d">
						&nbsp;
					</div>
					<hr className="notion-hr notion-block-67ed9ad77c6d47c78ff289b6569ad0e8" />
					<h2
						className="notion-h notion-h1 notion-h-indent-0 notion-block-46d94945ad4b4d6dade51410b30aec14"
						data-id="46d94945ad4b4d6dade51410b30aec14"
					>
						<span>
							<div
								id="46d94945ad4b4d6dade51410b30aec14"
								className="notion-header-anchor"
							/>
							<a
								className="notion-hash-link"
								href="#46d94945ad4b4d6dade51410b30aec14"
								title="Got the Gist?"
							>
								<svg viewBox="0 0 16 16" width={16} height={16}>
									<path
										fillRule="evenodd"
										d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
									/>
								</svg>
							</a>
							<span className="notion-h-title">Got the Gist?</span>
						</span>
					</h2>
					<div className="notion-text notion-block-45b408d703fd408f8365d49ce08614c8">
						I do. Here's the Github Gist of my own tweaks to the Fruition script if
						you're interested.
					</div>
					<details className="notion-toggle notion-block-a8e64dd7950b40b09ba100371d14c2c7">
						<summary>
							Customized Fruition script{" "}
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="notion-link"
								href="https://gist.github.com/rezaarkan/71e2449faa75a69f660031f5668c22b5"
							>
								here
							</a>
						</summary>
						<div>
							<figure className="notion-asset-wrapper notion-asset-wrapper-gist notion-block-129268a384f54b779a83b86fdbdd4913">
								<div
									style={{
										position: "relative",
										display: "flex",
										justifyContent: "center",
										alignSelf: "center",
										width: "100%",
										maxWidth: "100%",
										flexDirection: "column",
										paddingBottom: "50%"
									}}
								>
									<iframe
										className="notion-asset-object-fit"
										src="https://gist.github.com/rezaarkan/71e2449faa75a69f660031f5668c22b5.pibb"
										title="GitHub Gist"
										frameBorder={0}
										loading="lazy"
										scrolling="auto"
										style={{ width: "100%" }}
									/>
								</div>
							</figure>
						</div>
					</details>
					<details className="notion-toggle notion-block-b6ccad5904594a20b5187212c2cb2ff4">
						<summary>
							Unminified custom CSS{" "}
							<a
								target="_blank"
								rel="noopener noreferrer"
								className="notion-link"
								href="https://gist.github.com/rezaarkan/4a500db8148e2df0fd3c5d4b63da5c2a"
							>
								here
							</a>
						</summary>
						<div>
							<figure className="notion-asset-wrapper notion-asset-wrapper-gist notion-block-220797f67cdc46c1b95c86a532fc09b8">
								<div
									style={{
										position: "relative",
										display: "flex",
										justifyContent: "center",
										alignSelf: "center",
										width: "100%",
										maxWidth: "100%",
										flexDirection: "column",
										paddingBottom: "50%"
									}}
								>
									<iframe
										className="notion-asset-object-fit"
										src="https://gist.github.com/rezaarkan/4a500db8148e2df0fd3c5d4b63da5c2a.pibb"
										title="GitHub Gist"
										frameBorder={0}
										loading="lazy"
										scrolling="auto"
										style={{ width: "100%" }}
									/>
								</div>
							</figure>
						</div>
					</details>
					<div className="notion-text notion-block-77923e6e4f15481b87eac0afd38c97a2">
						Ping me on{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="notion-link"
							href="https://twitter.com/rezaarkan"
						>
							Twitter
						</a>{" "}
						if you need help or just leave a message in my{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="notion-link"
							href="https://rezaarkan.com/contact"
						>
							Guestbook
						</a>
						. Or{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="notion-link"
							href="https://www.buymeacoffee.com/rezaarkan"
						>
							buy me a coffee
						</a>{" "}
						if you're feeling generous.
					</div>

					<div className="notion-blank notion-block-f49b6669e18848d08ca6e627a82dfc3a">
						&nbsp;
					</div>
					<hr className="notion-hr notion-block-9165bc0534604c7f898ccc86a69f0b21" />
					<div className="notion-blank notion-block-d4d6cb0c057c4994be9df519f94275db">
						&nbsp;
					</div>

					<Footer />
					
				</article>
			</div>
		</main>
	)
}

export default Post