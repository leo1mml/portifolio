import React from 'react'

class AboutMe extends React.Component {

    state = {
        
    }

    render() {
        return(
            <div className="aboutme__container">
                <div className="aboutme__intro">
                    <div className="aboutme__intro__photo"></div>
                    <div className="aboutme__intro__description">
                        <p>Hi, I’m a computer scientist, I am 23 years old, and you are very welcome in here. You should feel free to take a look at my jobs, ask me anything, or hire me :D</p>
                        <p>I graduated at the Catholic University of Brasilia(UCB), and became a student of the Apple Developer Academy. So I’m capable of building apps and games for iOS, macOS and watchOS. 	At the same time I’m at the apple developer academy, I was able to study some crazy javascript stuff, so I’m also able to make some nodeJS and ReactJS apps.
	As for my hobbies, I like to play the guitar and sing, I also like to play video games and watch good movies!</p>
                    </div>
                </div>
                <div className="aboutme__skills">
                    <div className="aboutme__skills__title">
                        Skills
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe