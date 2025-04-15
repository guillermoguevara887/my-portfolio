import avatar from '../src/assets/avatar1.png';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <img src={avatar} alt="Avatar" className="avatar" />
            <h1>Hi, I’m Guillermo</h1>
            <p>I build modern, responsive web interfaces using React.</p>
        </section>
    );
};

export default Home;
