import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, Highlights, Tweets } from '../components'

const Home = () => {

	return (
		<main className="notion-page notion-page-no-cover notion-page-has-icon notion-page-has-image-icon notion-full-page not-notion-full-width index-page">
			<div className="notion-page-icon-wrapper">
				<img className="notion-page-icon" src='images/home.png' alt="Suthakar Ram" />
			</div>
			<h1 className="notion-title">Suthakar Ram</h1>
			<div className="notion-page-content">
				<article className="notion-page-content-inner">
					<figure className="notion-asset-wrapper notion-asset-wrapper-image notion-block-e4c9313b9b5e456b96913fd13854a0a6">
						<div style={{ position: "relative", display: "flex", justifyContent: "center", alignSelf: "center", width: '36px', maxWidth: "100%" }}>
							<img style={{ objectFit: "contain" }} src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb78aa672-0c93-4ec8-8bc5-4deb11f57cfc%2FAsset_-_Finger_Eyes.png?table=block&amp;id=e4c9313b-9b5e-456b-9691-3fd13854a0a6&amp;cache=v2" alt="notion image" />
						</div>
					</figure>
					<div className="notion-row notion-block-3fd0739f84d34fa6a97ff46746be105c">
						<div className="notion-column notion-block-2ea5e164f3ff4b5bad7c82cd9401d18c" style={{ width: "calc((100% - (1 * min(32px, 4vw))) * 0.375)" }}>
							<div className="notion-text notion-block-3937f7a54cc347cbbc5af0339349fe48">
								<span className="notion-gray">■</span>
								{' '}
								<b>Web Developer</b>
							</div>
							<div className="notion-text notion-block-4048a203243e48f8b306e143e2839988">
								<span className="notion-gray">■</span>
								{' '}
								<b>Freak Show</b>
							</div>
							<div className="notion-text notion-block-319f90a7ae42478fb1c3b4eec71d1915">
								<span className="notion-gray">■</span>
								{' '}
								<b>Dick Head</b>
							</div>
						</div>
						<div className="notion-spacer"></div>
						<div className="notion-column notion-block-19f3ab063d84432186d65661b4bde637" style={{ width: "calc((100% - (1 * min(32px, 4vw))) * 0.625)" }}>
							<div className="notion-text notion-block-c45499a1e7db4c85a882da5170d6fc95">
								Currently doing a thesis on Designing AI for the <a target="_blank" rel="noopener noreferrer" className="notion-link" href="http://dclead.eu/">Erasmus DCLead program</a>
								at Aalborg University. Previously a designer at tech company <a target="_blank" rel="noopener noreferrer" className="notion-link" href="https://www.traveloka.com/en-id/">Traveloka</a>
								. More on what I &#x27;m up to <Link className="notion-link" to="/now">now here</Link>
								.
							</div>
						</div>
						<div className="notion-spacer"></div>
					</div>
					<div className="notion-blank notion-block-232dfb35fb944372a7a61993b848a254"></div>
					<hr className="notion-hr notion-block-3403ed51fb774754ab511b25bd31cc8f" />
					<div className="notion-row notion-block-c7ef4bd94069480ba4813533903733e8">
						<div className="notion-column notion-block-d4ffabf00b06468186e07547c4567f46" style={{ width: "calc((100% - (3 * min(32px, 4vw))) * 0.25)" }}>
							<Link className="notion-page-link notion-block-25b7df64071d420d8f609bf76d9f4114" to="/now">
								<span className="notion-page-title">
									<img className="notion-page-title-icon notion-page-icon" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe78b0f88-9c40-487d-9e64-a59e9e207b75%2Fleaf-fluttering-in-wind_1f343.png?table=block&amp;id=25b7df64-071d-420d-8f60-9bf76d9f4114&amp;cache=v2" alt="Now" loading="lazy" />
									<span className="notion-page-title-text">Now</span>
								</span>
							</Link>
						</div>
						<div className="notion-spacer"></div>
						<div className="notion-column notion-block-c687638b24734ba3ab550ea8b1a953dd" style={{ width: "calc((100% - (3 * min(32px, 4vw))) * 0.25)" }}>
							<Link className="notion-page-link notion-block-6000547bed0d441793bfba1498c063e2" to="/portfolio">
								<span className="notion-page-title">
									<img className="notion-page-title-icon notion-page-icon" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fec5194d2-359b-42c9-91a4-50081f8ef74d%2Fcrescent-moon_1f319.png?table=block&amp;id=6000547b-ed0d-4417-93bf-ba1498c063e2&amp;cache=v2" alt="Portfolio" loading="lazy" />
									<span className="notion-page-title-text">Portfolio</span>
								</span>
							</Link>
						</div>
						<div className="notion-spacer"></div>
						<div className="notion-column notion-block-93d945b6d5db4151989b36bf43eff4c7" style={{ width: "calc((100% - (3 * min(32px, 4vw))) * 0.25)" }}>
							<Link className="notion-page-link notion-block-0934b80d2d1544f99dedadb00be9d146" to="/resume">
								<span className="notion-page-title">
									<img className="notion-page-title-icon notion-page-icon" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F069e620f-80e3-4408-8293-eeb356cd4caa%2Frocket_1f680.png?table=block&amp;id=0934b80d-2d15-44f9-9ded-adb00be9d146&amp;cache=v2" alt="Resume" loading="lazy" />
									<span className="notion-page-title-text">Resume</span>
								</span>
							</Link>
						</div>
						<div className="notion-spacer"></div>
						<div className="notion-column notion-block-f13c21c34c1542db8dc02501d56a33b8" style={{ width: "calc((100% - (3 * min(32px, 4vw))) * 0.25)" }}>
							<Link className="notion-page-link notion-block-29115129efa44f1a870f390dd2c0a6c0" to="/remarks">
								<span className="notion-page-title">
									<img className="notion-page-title-icon notion-page-icon" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7d7e0326-7fc7-483a-8ea5-a55d75265ddf%2Fok-hand_1f44c.png?table=block&amp;id=29115129-efa4-4f1a-870f-390dd2c0a6c0&amp;cache=v2" alt="Remarks" loading="lazy" />
									<span className="notion-page-title-text">Remarks</span>
								</span>
							</Link>
						</div>
						<div className="notion-spacer"></div>
					</div>
					<div className="notion-row notion-block-f34cdbc98cd042aa81893aa368fd0f37">
						<div className="notion-column notion-block-8c638398c5d74942b0ea4d59cca2ddb1" style={{ width: "calc((100% - (3 * min(32px, 4vw))) * 0.25)" }}>
							<Link className="notion-page-link notion-block-e78c0492a5ec486aa51f4cdb2c6f4603" to="/photos">
								<span className="notion-page-title">
									<img className="notion-page-title-icon notion-page-icon" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F543d83fd-f979-4da1-b06c-bb8f480c7b46%2Fmountain_26f0-fe0f.png?table=block&amp;id=e78c0492-a5ec-486a-a51f-4cdb2c6f4603&amp;cache=v2" alt="Photos" loading="lazy" />
									<span className="notion-page-title-text">Photos</span>
								</span>
							</Link>
						</div>
						<div className="notion-spacer"></div>
						<div className="notion-column notion-block-1379ad29f5224cfdb6d9a7a66189e0a0" style={{ width: "calc((100% - (3 * min(32px, 4vw))) * 0.25)" }}>
							<Link className="notion-page-link notion-block-29bb193c1a104ba2b832788b57d58cd6" to="/blog">
								<span className="notion-page-title">
									<img className="notion-page-title-icon notion-page-icon" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5ccd9fed-b24a-4225-8a4e-facb5578485d%2Fpencil_270f-fe0f.png?table=block&amp;id=29bb193c-1a10-4ba2-b832-788b57d58cd6&amp;cache=v2" alt="Blog" loading="lazy" />
									<span className="notion-page-title-text">Blog</span>
								</span>
							</Link>
						</div>
						<div className="notion-spacer"></div>
						<div className="notion-column notion-block-1a2bab1e09bd4168bd998528a8c00b16" style={{ width: "calc((100% - (3 * min(32px, 4vw))) * 0.25)" }}>
							<Link className="notion-page-link notion-block-e31f043461cd4739b9ec967cb36c0cba" to="/links">
								<span className="notion-page-title">
									<img className="notion-page-title-icon notion-page-icon" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0df7ef04-97cb-4e3e-9911-a4b45e73a4cf%2Flink_1f517.png?table=block&amp;id=e31f0434-61cd-4739-b9ec-967cb36c0cba&amp;cache=v2" alt="Links" loading="lazy" />
									<span className="notion-page-title-text">Links</span>
								</span>
							</Link>
						</div>
						<div className="notion-spacer"></div>
						<div className="notion-column notion-block-75b04687b96141c19d70edb610e61ae5" style={{ width: "calc((100% - (3 * min(32px, 4vw))) * 0.25)" }}>
							<Link className="notion-page-link notion-block-15364eee2c8b41188a069184f9e108be" to="/contact">
								<span className="notion-page-title">
									<img className="notion-page-title-icon notion-page-icon" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4ec0f13f-aff5-4498-8626-c8412b452a7b%2Fcall-me-hand_1f919.png?table=block&amp;id=15364eee-2c8b-4118-8a06-9184f9e108be&amp;cache=v2" alt="Contact" loading="lazy" />
									<span className="notion-page-title-text">Contact</span>
								</span>
							</Link>
						</div>
						<div className="notion-spacer"></div>
					</div>
					<hr className="notion-hr notion-block-52d117ce8fdf4c778e26009eba4cb506" />
					<div className="notion-blank notion-block-b7cd6baeb753490495f5ae5ffc800632"></div>
					<div className="notion-callout notion-gray_background_co notion-block-fcce5ac209014e52a2474684ece3df01">
						<span className="notion-page-icon" role="img" aria-label="❓">❓</span>
						<div className="notion-callout-text">
							First time around?
							<b>
								<Link className="notion-link" to="/contact">Sign my guestbook and get in touch!</Link>
							</b>
						</div>
					</div>
				</article>
				<Highlights />
				<Tweets />
				<Footer />
			</div>
		</main>
	)
}

export default Home