import avatar from '../src/assets/avatar1.png';

const Home = () => {
    return (
        <section id="home" className="home-section" data-aos="fade-up">
            <img src={avatar} alt="Avatar" className="avatar" data-aos="zoom-in" />
            <h1 data-aos="fade-up" data-aos-delay="200">Hi, I’m Guillermo</h1>
            <p data-aos="fade-up" data-aos-delay="400">
                I build modern, responsive web interfaces using React.
            </p>
        </section>

    );
};

export default Home;
