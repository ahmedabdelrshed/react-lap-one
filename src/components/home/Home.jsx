import React from 'react'
import './home.css'
const Home = () => {
    const article = 'first'
    // const article = 'second'
  return (
    <div class="home" id="s2">
        <div class="home-content">
            <h1 class="title">we are creative agency</h1>
            {/* First solution by using logic operator */}
            {article === 'first' && <>  <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aut perferendis ipsum dicta. Accusamus inventore, atque optio laudantium facilis enim dolores, autem, consequuntur minima repellendus voluptatibus corporis architecto necessitatibus quam.</article>
            <button class="btn btn-start">Get Started!</button>
           <a href="https:" class="btn btn-learn">Learn More</a></>
           }
            {article === 'second' && <p>Welcome Home: Your Gateway to Comfort and Connection</p>}
{/* Second Solution by using ternary operator */}
{/* {article === 'first' ? <>  <article>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aut perferendis ipsum dicta. Accusamus inventore, atque optio laudantium facilis enim dolores, autem, consequuntur minima repellendus voluptatibus corporis architecto necessitatibus quam.</article>
            <button class="btn btn-start">Get Started!</button>
           <a href="https:" class="btn btn-learn">Learn More</a></> :<p>Welcome Home: Your Gateway to Comfort and Connection</p>}
           */}
        </div>
    </div>
  )
}

export default Home