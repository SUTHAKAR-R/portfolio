import React from 'react'
import { ConnectWithMe, Footer, Guestbook } from '../components'

const Contact = () => {
	return (
		<main className="notion-page notion-page-no-cover notion-page-has-icon notion-page-has-image-icon notion-full-page not-notion-full-width">
			<div className="notion-page-icon-wrapper">
				<img src='/images/contact.png' className="notion-page-icon" alt="Contact" />
			</div>
			<h1 className="notion-title">Contact</h1>
			<div className="notion-page-content">
				<article className="notion-page-content-inner">
					
					<div className="notion-row notion-block-558d48773eba4dcf83de6d15c50067a1">
						<div className="notion-column notion-block-08e2cc83193e4c49bff66a7919eb52db" style={{ width: "calc((100% - (2 * min(32px, 4vw))) * 0.333333)" }}>
							<div className="notion-callout notion-gray_background_co notion-block-f307c41249274a4797caea6c5b8595c1">
								<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffa277af4-5e36-451b-a7bb-0661a6c1a1b2%2Fpostbox_1f4ee.png?table=block&amp;id=f307c412-4927-4a47-97ca-ea6c5b8595c1&amp;cache=v2" className="notion-page-icon" alt="suthakar@rezaarkan.com" loading="lazy" />
								<div className="notion-callout-text"><a target="_blank" rel="noopener noreferrer" className="notion-link">hey@sutha.com</a></div>
							</div>
						</div>
						<div className="notion-spacer"></div>
						<div className="notion-column notion-block-7def3d259ac14dada107a336194aba86" style={{ width: "calc((100% - (2 * min(32px, 4vw))) * 0.333333)" }}>
							<div className="notion-callout notion-gray_background_co notion-block-ee5290b0056c49e08ad4d82246bbe58b">
								<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F62e11d3a-789d-4303-8d78-e315726b115c%2Ftelephone_260e-fe0f.png?table=block&amp;id=ee5290b0-056c-49e0-8ad4-d82246bbe58b&amp;cache=v2" className="notion-page-icon" alt="753 888 76 09" loading="lazy" />
								<div className="notion-callout-text"><a target="_blank" rel="noopener noreferrer" className="notion-link">753 888 76 09</a></div>
							</div>
						</div>
						<div className="notion-spacer"></div>
						<div className="notion-column notion-block-42bb6d92264a42139487689068157667" style={{ width: "calc((100% - (2 * min(32px, 4vw))) * 0.333333)" }}>
							<div className="notion-callout notion-gray_background_co notion-block-4130a3395a70489a9be3b32eb4d36548">
								<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5c9b03be-a579-45eb-b95d-925c279e0a26%2Fpushpin_1f4cc.png?table=block&amp;id=4130a339-5a70-489a-9be3-b32eb4d36548&amp;cache=v2" className="notion-page-icon" alt="Chennai, IND" loading="lazy" />
								<div className="notion-callout-text"><a target="_blank" rel="noopener noreferrer" className="notion-link">Chennai, IND</a></div>
							</div>
						</div>
						<div className="notion-spacer"></div>
					</div>

					<div className="notion-blank notion-block-123c49534f4247fa8a79c14219cc2cf0">&nbsp;</div>
					<hr className="notion-hr notion-block-0f890d5fc6d04dfb870bb4f09eeac909" />
					<div className="notion-blank notion-block-4552838ddec24a2b84dfdbfc796d2a63">&nbsp;</div>

					<div className="notion-text notion-block-283c393bca2d421cb59d1591c436fb14">
						<span className="notion-gray">
							<em>Leave thoughts, ask questions, or just sign my guestbook below and let's keep in touch!</em>
						</span>
					</div>
					<figure className="notion-asset-wrapper notion-asset-wrapper-typeform notion-block-0e5a904f53b944419e96ce9ae005a2e7">
						<div style={{position: "relative", display: "flex", justifyContent: "center", alignSelf: "center", width: "100%", maxWidth: "100%", height: "600px"}}>
							<iframe className="notion-asset-object-fit" src="https://rezaarkan.typeform.com/to/iy6K6ezU?typeform-embed=oembed&amp;format=json" title="iframe typeform" frameBorder="0" allowFullScreen="" loading="lazy"></iframe>
						</div>
					</figure>

					<div className="notion-blank notion-block-8504711b5c3546bbbaf8bd0a70e627cf">&nbsp;</div>
					<hr className="notion-hr notion-block-0bf9e597ddc14168a733d841ea90a58f" />

					<Guestbook />

					<div className="notion-blank notion-block-deca63ab931640619056d0e5a719189f">&nbsp;</div>
					<div className="notion-blank notion-block-3b00caa883524f81acda64664bb76b17">&nbsp;</div>
					<hr className="notion-hr notion-block-b323a820b1c84c5fa0dc8669aa7eb6de" />

					<ConnectWithMe />
				
					<div className="notion-blank notion-block-3ab02e420b694510acdf5e1c3cd8bf8c">&nbsp;</div>
					<hr className="notion-hr notion-block-84c3881a0fdb45eb8da12609921de0d7" />
					<div className="notion-blank notion-block-c7712db7143c42688db83e64a3594a24">&nbsp;</div>
					<Footer />

				</article>
			</div>
		</main>
	)
}

export default Contact