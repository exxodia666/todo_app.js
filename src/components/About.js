import React from 'react';
//todo navigation
const About = () => {
    return(
    <div className='container'>
    <h1 class="display-2 m-2">About</h1>
<ul class="list-group list-group-flush">
    <li class="display-6 m-2 list-group-item"><span>GitHub: </span>
        <a href='https://github.com/exxodia666'>
            https://github.com/exxodia666
        </a>
    </li>

    <li class="display-6 m-2 list-group-item">
        Icons made by 
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            <span> Freepik </span>
        </a> 
        <span> from </span>
        <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
        </a>
    </li>
</ul>
    
    </div>
    )
};
export default About;