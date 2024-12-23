
import Marquee from "react-fast-marquee";
export default function LogoCloud1() {
	return (
		<>
			<div className="section-logo-cloud container-fluid mt-8 mt-lg-0 border-top border-bottom">
				<div className="container">
					<div className="row mask-image">
						{/* Carausel Scroll */}
						<div className="carouselTicker carouselTicker-right my-7 position-relative z-1">
							<ul className="carouselTicker__list">
								<Marquee>
									<li className="carouselTicker__item">
										<img src="/assets/imgs/logo-cloud/logo-2.png" alt="infinia" />
									</li>
									<li className="carouselTicker__item">
										<img src="/assets/imgs/logo-cloud/logo-3.png" alt="infinia" />
									</li>
									<li className="carouselTicker__item">
										<img src="/assets/imgs/logo-cloud/logo-4.png" alt="infinia" />
									</li>
									<li className="carouselTicker__item">
										<img src="/assets/imgs/logo-cloud/logo-6.png" alt="infinia" />
									</li>
									<li className="carouselTicker__item">
										<img src="/assets/imgs/logo-cloud/logo-7.png" alt="infinia" />
									</li>
									<li className="carouselTicker__item">
										<img src="/assets/imgs/logo-cloud/peepxen-digital.svg" alt="infinia" />
									</li>
								</Marquee>
							</ul>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
