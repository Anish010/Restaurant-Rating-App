import React, { Component } from 'react';
import NavBarMenu from "./NavBarMenu"
import { Container } from 'react-bootstrap'
class Home extends Component {
    render() {
        return (
            <>

                <NavBarMenu />
                <div className="main">
                    <Container >
                        <section className="section-intro">
                            <header><br /><br />
                                <h1> Welcome To Reto Rating </h1>
                            </header>
                            <br /><br />
                        </section>

                        <section className="about-section" >
                            <article>
                                <h3>
                                    We are here to provide you the details of the restaurant and their ratings so that it will help you to choose a better place to spend time with your loved ones.
                                </h3><br /><br />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, eaque perferendis? Accusantium, labore et alias reiciendis non cumque maxime quis magni! Hic, molestiae eum. Possimus modi harum doloribus tempora quos mollitia consectetur corporis. Eveniet dicta ducimus enim sunt, odio est harum. Rem aliquid, quibusdam aspernatur neque sequi optio ipsam, ducimus consequatur quidem exercitationem debitis voluptates hic quos ullam! Neque atque soluta perferendis deleniti, dolorem maxime repellat praesentium, suscipit explicabo corrupti assumenda nostrum enim animi illo exercitationem cupiditate! Dolore id deserunt eveniet aliquid fuga nulla consectetur recusandae, saepe distinctio omnis sequi tempore consequatur ut nam fugiat quasi, pariatur optio modi veniam harum dicta corrupti iste obcaecati! Voluptatum sed veniam, hic dignissimos porro ipsum ex ipsam autem nam quas exercitationem minus corrupti in corporis sunt facilis fuga maiores iure! Veritatis deserunt perspiciatis reprehenderit molestias iusto earum, voluptatum facere rem expedita, ut tenetur deleniti tempora, eos vitae quisquam repellat minima! Eius recusandae dolorum, corporis repellat optio laborum ipsam dolor reprehenderit cupiditate alias vitae adipisci assumenda atque quaerat soluta impedit corrupti repudiandae deleniti nisi consequatur fugiat. Reiciendis optio, consectetur tenetur quaerat porro vero quam eaque iure placeat nihil eum voluptatem laborum itaque repudiandae laboriosam, maxime animi! Saepe mollitia atque, ipsam officia nisi asperiores impedit!
                                </p>

                            </article>
                        </section>
                    </Container>
                </div>
            </>
        );
    }
}

export default Home;