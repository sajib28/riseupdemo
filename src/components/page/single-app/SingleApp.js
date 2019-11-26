import React, { Component } from 'react'
import Nav from '../../commonTools/Nav';
import ScreenshootSlider from './ScreenshootSlider';
import Footer from '../../commonTools/Footer';
class SingleApp extends Component {

    render() {
        return (
            <div className="page single-app">
                {/* Main Menu */}
                <Nav className="navbar navbar-expand-lg" />
                {/* End Main Menu */}
                {/* Banner */}
                <section id="PressBanner" className="banner middle-content" style={{ backgroundImage: `url(${require('../../../assets/img/banner/treasure-wars-banner.png')})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inroText display-bottom">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banner */}
                <section className="short-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2 className="rawline-semibold">Game</h2>
                                <div className="description">
                                    <img src={require('../../../assets/img/treasure-wars.png')} alt="" />
                                    <div className="content">
                                        <h3>Treasure Wars</h3>
                                        <p>Realtime Multiplayer Game</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h2 className="rawline-semibold">Client</h2>
                                <div className="description">
                                    <img src={require('../../../assets/img/robi.png')} alt="" />
                                    <div className="content">
                                        <h3>Robi Axiata Limited</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-game">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="rawline-semibold">About </h2>
                                <p>Treasure Wars is the ultimate undergo of massive Battle Royale encounter with an experience of familiar battle locations. With a simple interface, you just jump down into the game, polished real-time multiplayer feature promises you to give the out of the world Battle Royale experience! Treasure Wars is an amazing game if you have a hungriness for winning! Jump right into the top down shooter experience and find the treasure. Keep it till to the last and the treasure is yours in real life. There will be bundle data pack, burger, pizza, mobile handsets etc. as the treasure. In Treasure Wars game, you have to collect some necessary Battle equipment right after you start the game. Perform your survival instinct to keep the Treasure with you till the end but don’t forget the monsters and enemies around you!</p>
                                <p>Treasure Wars is the ultimate undergo of massive Battle Royale encounter with an experience of familiar battle locations. With a simple interface, you just jump down into the game, polished real-time multiplayer feature promises you to give the out of the world Battle Royale experience! Treasure Wars is an amazing game if you have a hungriness for winning! Jump right into the top down shooter experience and find the treasure. Keep it till to the last and the treasure is yours in real life. There will be bundle data pack, burger, pizza, mobile handsets etc. as the treasure. In Treasure Wars game, you have to collect some necessary Battle equipment right after you start the game. Perform your survival instinct to keep the Treasure with you till the end but don’t forget the monsters and enemies around you!</p>
                                <div className="market-place">
                                    <h2 className="rawline-semibold">Available on:</h2>
                                    <ul className="list-unstyled">
                                        <li><a rel="noopener noreferrer" href="/"><img src={require('../../../assets/img/apple-app-store.png')} alt="/" /></a></li>
                                        <li><a rel="noopener noreferrer" href="/"><img src={require('../../../assets/img/google-play-store.png')} alt="" /></a></li>
                                        <li><a rel="noopener noreferrer" href="/"><img src={require('../../../assets/img/amazon-store.png')} alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feature">
                    <span className="hero-bg-left"></span>
                    <div className="container">
                        <div className="row">
                            <div className="vertical-middle">
                                <div className="col-lg-8">
                                    <div className="content-block">
                                        <h2 className="rawline-semibold">Game Features</h2>
                                        <ul className="list-unstyled">
                                            <li>Real-time fast-paced Battle Royale</li>
                                            <li>Hunting treasures and win rewards in real life</li>
                                            <li>Survival shooter</li>
                                            <li>Native locations</li>
                                            <li>Exciting feature unlock option</li>
                                            <li>Tons of weapons and items to loot</li>
                                            <li>Multiplayer experience</li>
                                            <li>Shrinking player area</li>
                                            <li>Sudden gift pack in-game</li>
                                            <li>Be fast and conscious as you always have to keep the treasure with you till the end!</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-lg-4">
                                    <div className="img-block">
                                        <img src={require('../../../assets/img/game-feature.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="screenshots">
                    <span className="hero-bg-right"></span>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content-block">
                                    <h2 className="rawline-semibold">Screenshots</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 pl-0 pr-0">
                                <div className="screenshot-slider">
                                    <ScreenshootSlider />
                                </div>
                            </div>
                        </div>

                        {/* <div className="row">
                            <div className="vertical-middle">
                                <div className="col-lg-4">
                                    <div className="content-block">
                                        <h2>Screenshots</h2>
                                    </div>

                                </div>
                                <div className="col-lg-8">
                                    <div className="screenshot-slider">
                                        
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
                <section className="youtube-channel">
                    <span className="hero-bg-left"></span>
                    <div className="container">
                        <div className="row">
                            <div className="vertical-middle">
                                <div className="col-lg-4">
                                    <div className="content-block">
                                        <div className="inner-title">
                                            <h2 className="rawline-semibold">Subscribe to our channel</h2>
                                            <p>Check out what's Rising. Fun videos of all Rise Up Labs games. Come and check out our Youtube channel</p>
                                        </div>
                                        <img src={require('../../../assets/img//youtube.png')} alt="" />
                                        <div className="social-media">
                                            <h5>Share: </h5>
                                            <ul className="list-unstyled list-inline">
                                                <li><a rel="noopener noreferrer" href="/"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a rel="noopener noreferrer" href="/"><i className="fab fa-twitter"></i></a></li>
                                                <li><a rel="noopener noreferrer" href="/"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a rel="noopener noreferrer" href="/"><i className="fas fa-meh-blank"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="video-block">
                                        <iframe title="Apps Video" width="100%" height="444" src="https://www.youtube.com/embed/lyKYkPECtjc"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="used-technology">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="text-center rawline-semibold">Technology Used</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="technology-wrap">
                                    <a rel="noopener noreferrer" href="/" className="border-shadow">
                                        <div className="img-inner">
                                            <img src={require('../../../assets/img/tools-technology/android.png')} alt="" />
                                        </div>
                                        <span>Android</span>
                                    </a>
                                    <a rel="noopener noreferrer" href="/" className="border-shadow">
                                        <div className="img-inner">
                                            <img src={require('../../../assets/img/tools-technology/unity.png')} alt="" />
                                        </div>
                                        <span>Unity 2D/3D</span>
                                    </a>
                                    <a rel="noopener noreferrer" href="/" className="border-shadow">
                                        <div className="img-inner">
                                            <img src={require('../../../assets/img/tools-technology/csharp.png')} alt="" />
                                        </div>
                                        <span>C#</span>
                                    </a>
                                    <a rel="noopener noreferrer" href="/" className="border-shadow">
                                        <div className="img-inner">
                                            <img src={require('../../../assets/img/tools-technology/asp-net.png')} alt="" />
                                        </div>
                                        <span>ASP.NET MVC</span>
                                    </a>
                                    <a rel="noopener noreferrer" href="/" className="border-shadow">
                                        <div className="img-inner">
                                            <img src={require('../../../assets/img/tools-technology/react.png')} alt="" />
                                        </div>
                                        <span>ReactJs</span>
                                    </a>
                                    <a rel="noopener noreferrer" href="/" className="border-shadow">
                                        <div className="img-inner">
                                            <img src={require('../../../assets/img/tools-technology/c-plus-plus.png')} alt="" />
                                        </div>
                                        <span>Android</span>
                                    </a>
                                    <a rel="noopener noreferrer" href="/" className="border-shadow">
                                        <div className="img-inner">
                                            <img src={require('../../../assets/img/tools-technology/laravel.png')} alt="" />
                                        </div>
                                        <span>Android</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="build-story">
                                    <h2 className="rawline-semibold">We can build your story</h2>
                                    <p>Through the years we have partnered with great companies and entrepreneurs all over the world.</p>
                                    <a rel="noopener noreferrer" href="/" className="cus-btn details">Get free to Contact<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
export default SingleApp;