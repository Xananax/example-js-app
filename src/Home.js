import React from 'react';
import './Home.css';

const Section = ({ icon_name, title, body }) =>
  <section>
    <section className="content">
      <header>
        <a href="" className={`icon fa-${icon_name}-o`}><span className="label">Icon</span></a>
        <h3>{title}</h3>
      </header>
      <p>{body}</p>
    </section>
  </section>

class Home extends React.Component {
  constructor(){
    super()
    this.state = { services:[] }
  }
  componentDidMount(){
    setTimeout(() => {
      fetch('/list')
        .then( response => response.json() )
        .then( response => this.setState({services: response.data }) )
    }, 3000)  
  }
  render() {
    const services = this.state.services
    const has_loaded = services.length ? true : false
    return (
    <section>
			<header id="header">
				<a className="logo" href="index.html">Industrious</a>
				<nav>
					<a href="menu">Menu</a>
				</nav>
			</header>

			<nav id="menu">
				<ul className="links">
					<li><a href="index.html">Home</a></li>
					<li><a href="elements.html">Elements</a></li>
					<li><a href="generic.html">Generic</a></li>
				</ul>
			</nav>
			<section className="wrapper">
				<section className="inner">
					<header className="special">
						<h2>Sem turpis amet semper</h2>
						<p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.</p>
					</header>
					<section className="highlights">
            { has_loaded 
            ? services.map( 
                ( section, index ) => 
						    <Section icon_name={section.icon} title={section.title} body={section.body} key={index}/>
              )
            : <div> ...LOADING... </div>
            }
					</section>
				</section>
			</section>
			<section id="cta" className="wrapper">
				<section className="inner">
					<h2>Curabitur ullamcorper ultricies</h2>
					<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>
				</section>
			</section>
			<section className="wrapper">
				<section className="inner">
					<header className="special">
						<h2>Faucibus consequat lorem</h2>
						<p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.</p>
					</header>
					<section className="testimonials">
						<section>
							<section className="content">
								<blockquote>
									<p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
								</blockquote>
								<section className="author">
									<section className="image">
										<img src="images/pic01.jpg" alt="" />
									</section>
									<p className="credit">- <strong>Jane Doe</strong> <span>CEO - ABC Inc.</span></p>
								</section>
							</section>
						</section>
						<section>
							<section className="content">
								<blockquote>
									<p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
								</blockquote>
								<section className="author">
									<section className="image">
										<img src="images/pic03.jpg" alt="" />
									</section>
									<p className="credit">- <strong>John Doe</strong> <span>CEO - ABC Inc.</span></p>
								</section>
							</section>
						</section>
						<section>
							<section className="content">
								<blockquote>
									<p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
								</blockquote>
								<section className="author">
									<section className="image">
										<img src="images/pic02.jpg" alt="" />
									</section>
									<p className="credit">- <strong>Janet Smith</strong> <span>CEO - ABC Inc.</span></p>
								</section>
							</section>
						</section>
					</section>
				</section>
			</section>
			<footer id="footer">
				<section className="inner">
					<section className="content">
						<section>
							<h3>Accumsan montes viverra</h3>
							<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>
						</section>
						<section>
							<h4>Sem turpis amet semper</h4>
							<ul className="alt">
								<li><a href="">Dolor pulvinar sed etiam.</a></li>
								<li><a href="">Etiam vel lorem sed amet.</a></li>
								<li><a href="">Felis enim feugiat viverra.</a></li>
								<li><a href="">Dolor pulvinar magna etiam.</a></li>
							</ul>
						</section>
						<section>
							<h4>Magna sed ipsum</h4>
							<ul className="plain">
								<li><a href=""><i className="icon fa-twitter">&nbsp;</i>Twitter</a></li>
								<li><a href=""><i className="icon fa-facebook">&nbsp;</i>Facebook</a></li>
								<li><a href=""><i className="icon fa-instagram">&nbsp;</i>Instagram</a></li>
								<li><a href=""><i className="icon fa-github">&nbsp;</i>Github</a></li>
							</ul>
						</section>
					</section>
					<section className="copyright">
						&copy; Untitled. Photos <a href="https://unsplash.co">Unsplash</a>, Video <a href="https://coverr.co">Coverr</a>.
					</section>
				</section>
			</footer>
    </section>
    );
  }
}

export default Home;
