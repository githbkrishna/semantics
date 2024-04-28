import React from 'react'
import "./Style.css"
import office from '../assets/office.jpg'

const Header = () => {
  return (
    <header>
        <div className="headleft">
            <h1>first react</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae omnis adipisci eligendi, enim optio aliquam quibusdam nam sapiente porro sint. Recusandae eius quam ad maiores illum nostrum dignissimos nihil consequatur!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex animi, consequuntur ad rerum doloremque odio facere modi dolores. Exercitationem, repellat esse!</p>
            <button>know more</button>
        </div>
        <div className="headright">
            <img src={office} alt="" />
        </div>
    </header>
  )
}

export default Header