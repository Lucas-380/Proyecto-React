import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="container-fluid">
		<div className="row">
			<div className="col-lg-2 text-center centrado">
                <h1 className="textFooter-lg">Contacto</h1>
			</div>
			<div className="col-lg-2 col-md col-sm textFooter redes">
                    <li className="svg-ig"></li>
                    <li className="svg-fc"></li>
                    <li className="svg-tw"></li>
			</div>
			<form id="formNewsletter" className="col-lg-4 col-md-6 footer__separador  text-center" action="#" method="#">
                <h2 className="textFooter-lg">Newsletter</h2>
			</form>
			<div className="col-lg-4 col-md textFooter redes">
                    <li className="svg-payPal"></li>
                    <li className="svg-masterCard"></li>
                    <li className="svg-visa"></li>
			</div>
		</div>
	</footer>
    )
}

export default Footer