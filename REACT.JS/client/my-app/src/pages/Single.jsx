import React from 'react'
import Edit from '../image/edit.png'
import Delete from '../image/delete.png'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'
const Single=()=>{
    return(
        <div className="single">
        <div className="content">
            <img src="https://www.swarashtraseva.org/uploads/20201231061436Human-Right_bg-1.jpg"/>
       
        <div className="user">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
        
        <div className="info">
            <span>Human Rights Foundation</span>
            <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt=""/>
            </Link>
           
            <img src={Delete} alt=""/>
        </div>
        </div>
     <h2>More than half of the world lives under tyranny.</h2>  
     <p>The Human Rights Foundation is a nonpartisan, nonprofit organization that promotes and protects human rights globally, with a focus on closed societies.
</p>
<p>What differentiates HRF from other human rights organizations is our singular focus on authoritarian regimes.
We consider our mission essential given that today more than 4 billion people live under tyranny. That’s 54% of the world’s population in 95 countries from Cuba to Russia to Saudi Arabia to North Korea.</p>
    <p>With our community of activists, policy experts, philanthropists, we create innovative solutions to the world’s most pressing problem, and inspire millions of supporters. We amplify the impact of dissidents in our network by inspiring people around the world to participate in their initiatives.We defend, support, and give a platform to human rights activists who are boldly changing their communities and countries.Every single day, our partners are at the front lines fighting for human rights. Help them change the world.</p>
   
        </div>
        <Menu/>
        </div>
    )
}

export default Single