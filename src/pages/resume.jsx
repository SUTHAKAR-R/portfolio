import React from 'react'
import { Experience, Education, Strengths, Arsenal, Speaking, Publications, Footer } from '../components'

const Resume = () => {

	return (
		<main className="notion-page notion-page-no-cover notion-page-has-icon notion-page-has-image-icon notion-full-page not-notion-full-width">
			<div className="notion-page-icon-wrapper">
				<img src='/images/resume.png' className="notion-page-icon" alt="Resume" loading="lazy" />
			</div>
			<h1 className="notion-title">Resume</h1>
			<div className="notion-page-content">
				<article className="notion-page-content-inner">

					<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width:"100%" }}>
						<div>
							<div className="notion-text notion-block-2cd7d7e7c7c04475911fd46edb67538d"><b>Web Developer / Total Dickward</b></div>
							<div className="notion-text notion-block-277f7ac849384545953038c5451730e2">On the journey of curiosity with no experience at all</div>
						</div>
						<div>
							<div>
								<a className="notion-link" href='/files/Resume.pdf'>Download as PDF</a>
							</div>
						</div>
					</div>
					<div className="notion-blank notion-block-f3c20bed95764ca6aa64b963fe78158c">&nbsp;</div>

					<div className="notion-row notion-block-5fe6183e4def478bb16aaeb3d81aafc3">
						<div className="notion-column notion-block-5475b80b8f934f45ae2ad5dc90b7eb2b" style={{ width: "calc((100% - (2 * min(32px, 4vw))) * 0.33333333333333337)"}}>
							<div className="notion-callout notion-gray_background_co notion-block-359617cee27b49388d0041f90ad72348">
								<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5e3e22cb-da19-4257-b14b-176e5c6964a6%2Fpushpin_1f4cc.png?table=block&amp;id=359617ce-e27b-4938-8d00-41f90ad72348&amp;cache=v2" className="notion-page-icon" alt="Copenhagen, DK" loading="lazy" />
								<div className ="notion-callout-text"><a target="_blank" rel="noopener noreferrer" className ="notion-link" href="https://goo.gl/maps/ixf9AA8wKEMtQyi16">Chennai, IND</a></div>
							</div>
						</div>
						<div className="notion-spacer"></div>
						<div className="notion-column notion-block-db8fbfd088114ada9ae54280e4a1437b" style={{ width: "calc((100% - (2 * min(32px, 4vw))) * 0.33333333333333337)" }}>
							<div className="notion-callout notion-gray_background_co notion-block-f0867cafef0643eba15a7b6ca91b6387">
								<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F414b5b40-8197-4147-ab04-3cb3bbeafc04%2Fpostbox_1f4ee.png?table=block&amp;id=f0867caf-ef06-43eb-a15a-7b6ca91b6387&amp;cache=v2" className="notion-page-icon" alt="hey@rezaarkan.com" loading="lazy" />
								<div className ="notion-callout-text"><a target="_blank" rel="noopener noreferrer" className ="notion-link">hey@me.com</a></div>
							</div>
						</div>
						<div className="notion-spacer"></div>
						<div className="notion-column notion-block-5ee60b1676764da0a61231216670d63b" style={{ width: "calc((100% - (2 * min(32px, 4vw))) * 0.33333333333333337)" }}>
							<div className="notion-callout notion-gray_background_co notion-block-31bd497b0a9d4f67bca1bf7df39ca643">
								<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1613d41e-f067-4db8-9dc0-1ce232d7f3dd%2Ftelephone_260e-fe0f.png?table=block&amp;id=31bd497b-0a9d-4f67-bca1-bf7df39ca643&amp;cache=v2" className="notion-page-icon" alt="+45 XX XX XX XX" loading="lazy" /> 
								<div className ="notion-callout-text"><a target="_blank" rel="noopener noreferrer" className ="notion-link" href="mailto:hey@rezaarkan.com">753 888 7609</a></div>
							</div>
						</div>
						<div className="notion-spacer"></div>
					</div>

					<div className="notion-blank notion-block-4c33615d093148df888f42050910f553">&nbsp;</div>
					<hr className="notion-hr notion-block-6ac8000f96494e28900dfcefc00889bb" />
						
					{/* <Experience />
					<div className="notion-blank notion-block-8813b1e98b104e51befeb9e9db50ad12">&nbsp;</div>
					<hr className="notion-hr notion-block-e5e625c4963c4ebf969b5b9686b6ace9" /> */}
									
					<Education />
					<div className="notion-blank notion-block-0502cf02804949678f30705f4b5f8818">&nbsp;</div>
					<hr className="notion-hr notion-block-adc43f0d1b0c4955a41b3c98e7e0f1fc" />
					
					<Strengths />
					<div className="notion-blank notion-block-f251d64087644a9ea745b64705325837">&nbsp;</div>
					<hr className="notion-hr notion-block-45986ce12c6b4d24b912aea3562a1ebb" />

					<Arsenal />
					<div className="notion-blank notion-block-2170aa2e8bcc4bc9a52302aabea80728">&nbsp;</div>
					<hr className="notion-hr notion-block-12bce3ba8e104191bd7b354e4072a36e" />

					{/* <Speaking />
					<div className="notion-blank notion-block-79a4633c05e84e5295ba01115edcc1d7">&nbsp;</div>
					<hr className="notion-hr notion-block-d32e86c1b8524fc5ac2d30715b0c7a83" />

					<Publications />
					<div className="notion-blank notion-block-7cbc6f627597405b8b8afd656bd2c367">&nbsp;</div>
					<hr className="notion-hr notion-block-f0b6695c5af04ab0a7fb39c3b11d48e5" /> */}
					<div className="notion-blank notion-block-8c96992cb94a4dc29696c730a98616e4">&nbsp;</div>

					<Footer />
				</article>
			</div>
		</main>
	)
}

export default Resume