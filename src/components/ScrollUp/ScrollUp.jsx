import React from 'react';
import "./scrollUp.css";


function ScrollUp() {

    window.addEventListener("scroll", function(){

        const scrrollUp = this.document.querySelector(".scrollup");

        if(this.scrollY>= 560) scrrollUp.classList.add('show-scroll');
        else scrrollUp.classList.remove('show-scroll');
    })

    return (
        <a href="#" className='scrollup'>
            <i className='uil uil-arrow-up scroll_icon'></i>
        </a>
    )

}

export { ScrollUp }