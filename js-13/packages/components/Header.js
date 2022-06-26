import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
    return(
        <div className="header">
            <Link className="logo" to="/"><img className="logo" src="https://imgur.com/2OS8P8q.png" /></Link>

            <h1 className="title">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus ligula quis viverra pulvinar. Maecenas accumsan sed mi nec rutrum. <br />Ut consequat tincidunt magna, vitae egestas massa consequat in. Nam quis rhoncus odio. </p>
        </div>
    )
}

export default Index;