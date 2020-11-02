// JavaScript Document
const homePath = '/',
	photoPath = '/photoHome.html',
	articlePath = '/articles',
	introPath = '/intro.html';
const emailAddr = 'rpie06@eclipsedadge.xyz',
	phoneNum = '+1 613-8698859',
	wechatId = 'xhl15001082796',
	qqId = '1055144931';
const emailIconPath = '/assets/icon/005-email.svg',
	phoneIconPath = '/assets/icon/003-phone-call.svg',
	wechatIconPath = '/assets/icon/007-wechat.svg',
	qqIconPath = '/assets/icon/008-qq-penguin-shape.svg',
	facebookIconPath = '/assets/icon/001-facebook.svg',
	insIconPath = '/assets/icon/002-instagram.svg',
	linkedinIconPath = '/assets/icon/004-linkedin.svg',
	five00IconPath = '/assets/icon/006-500px-logo.svg',
	bilibiliIconPath = '/assets/icon/bilibili.svg',
	psnIconPath = '/assets/icon/PlayStation_logo.svg';
const facebookLink = 'https://www.facebook.com/bobXia06/',
	insLink = 'https://www.instagram.com/hx.rpie/',
	linkedinLink = 'https://www.linkedin.com/in/haolin-bob-xia/',
	five00pxLink = 'https://500px.com/p/HaolinX/',
	bilibiliLink = 'https://space.bilibili.com/6598227/',
	psnLink = 'https://psnprofiles.com/piepie-06/';
var year = new Date().getFullYear();
//<a href={linkedinLink} target="_blank"><img className="footer-socialIcon" src={linkedinIconPath} alt="..."></img></a>

class Navbar extends React.Component {
	render() {
		return (
				<nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark fixed-top scrolling-navbar" role="navigation">
					<a className="navbar-brand" href={homePath}>
						<img className="navbar-logo rounded" alt="logo" src={logoPath}></img></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span></button>
					<div className="collapse navbar-collapse" id="navbarContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item"><a className="nav-link" href={homePath}>Home</a></li>
							<li className="nav-item"><a className="nav-link" href={photoPath}>Photo</a></li>
							<li className="nav-item"><a className="nav-link" href={articlePath}>Article</a></li>
							<li className="nav-item"><a className="nav-link" href={introPath}>About</a></li>
						</ul>
					</div>
				</nav>
		);}}
class Footer extends React.Component {
	render() {
		return (
			<footer className="my-footer">
				<div className="container-fluid text-center text-md-left">
					<div className="row">
						<div className="col-auto text-left footer-contact">
							<div className="row container">
								<p>Contact me</p>
							</div>
							<div className="row">
								<div className="col-lg-6 col-sm-12">
									<p><img className="footer-contactIcon" src={emailIconPath} alt="..."></img>{emailAddr}</p>
								</div>
								<div className="col-lg-6 col-sm-12">
									<p><img className="footer-contactIcon" src={phoneIconPath} alt="..."></img>{phoneNum}</p>
								</div>
								<div className="col-lg-6 col-sm-12">
									<p><img className="footer-contactIcon" src={wechatIconPath} alt="..."></img>{wechatId}</p>
								</div>
								<div className="col-lg-6 col-sm-12">
									<p><img className="footer-contactIcon" src={qqIconPath} alt="..."></img>{qqId}</p>
								</div>
							</div>
						</div>
						<div className="col-auto mx-auto footer-socialIconStyle">
							<a href={facebookLink} target="_blank">
								<img className="footer-socialIcon" src={facebookIconPath} alt="..."></img></a>
							<a href={insLink} target="_blank">
								<img className="footer-socialIcon" src={insIconPath} alt="..."></img></a>
							<a href={five00pxLink} target="_blank">
								<img className="footer-socialIcon" src={five00IconPath} alt="..."></img></a>
							<a href={bilibiliLink} target="_blank">
								<img className="footer-socialIcon" src={bilibiliIconPath} alt="..."></img></a>
							<a href={psnLink} target="_blank">
								<img className="footer-socialIcon" src={psnIconPath} alt="..."></img></a>
						</div>
					</div>
					<div className="row"><p className="footer-copyright">&copy;{year} Eclipsed ADGE</p></div>
				</div>
			</footer>
		);}}
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Footer />, document.getElementById('footer'));