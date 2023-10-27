import  "./Home.css"
const Home = () => {
	return (
		<div className="container_home">
			<h2>Bienvenidos a <strong><span>Happy CakePHP.</span></strong></h2>
			<p>Rápido. Sencillo. Delicioso.</p>
            <div className="container_imagen">
            <img src="https://ded9.com/wp-content/uploads/2021/04/cakePHP-tutorial.jpg" alt="imagen cake" />
            </div>
		</div>
	);
};

export default Home;