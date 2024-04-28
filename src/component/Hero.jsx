import './Style.css'
import analysis from '../assets/analysis.jpg'
import feedback from '../assets/feedback.jpg'
import loop from '../assets/loop.jpg'

function Hero() {
    return(
        <div className="hero bg-slate-800 italic">
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus excepturi soluta quo iusto hic! Amet, non modi laboriosam rerum, reiciendis dicta ratione sint soluta animi numquam dolore, pariatur consequuntur hic!</p>

            <div className="hero-container">

                <div className='hero-contain'>
                    <div className="show">
                        <img src={analysis} alt="" />
                    </div>
                    <div className="hide">
                        <h2>analysis</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium consequuntur.</p>
                    </div>
                </div>

                <div className='hero-contain'>
                    <div className="show">
                        <img src={feedback} alt="" />
                    </div>
                    <div className="hide">
                        <h2>feedback</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium consequuntur.</p>
                    </div>
                </div>

                <div className='hero-contain'>
                    <div className="show">
                        <img src={loop} alt="" />
                    </div>
                    <div className="hide">
                        <h2>loop</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, praesentium consequuntur.</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Hero