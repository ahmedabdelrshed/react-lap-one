import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer class="footer">
    <div class="mg-boxs">
        <div class="container">
            <div class="links list">
                <h4>Follow Us</h4>
                <div class="box-links">
                    <a href="https://www.linkedin.com/in/ahmed-abdelrashed-581607254" >Linked In</a>
                    <a href="https://www.facebook.com/profile.php?id=100024575770751&amp;mibextid=ZbWKwL" >Facebook</a>
                    <a href="https://github.com/ahmedabdelrshed" >Github</a>

                </div>
            </div>
            <div class="text list">
                <h2>Restaurant</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eaque qui veritatis fugiat
                    explicabo pariatur adipisci sit enim porro! Quae, esse. Numquam doloremque temporibus
                    reprehenderit molestiae eaque cum, consequatur hic?</p>
            </div>
            <div class="news list">
                <h4>Neswletter</h4>
                <div class="input">
                    <input type="email" placeholder="Subscribe Our Neswletter"/>
                    <i class="fa-sharp fa-solid fa-arrow-right">→</i>
                </div>
            </div>

        </div>
        <div class="copy-rigth">
            <p>© 2024 Restaurant , <span>Ahmed Abdelrashed</span></p>
        </div>
    </div>
</footer>
  )
}

export default Footer