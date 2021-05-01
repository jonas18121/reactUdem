import React, { Component } from 'react'
import NvPost from './NvPost/NvPost'
import PostModale from './PostModale/PostModale'
import './Blog.css'
import axios from 'axios'

class Blog extends Component {

    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(reponse => {
                console.log(reponse);
            })
        ;  
    }

    render () {

        return (
            <div>
                <section>
                <NvPost />
                </section>
                <h2 className="text-center my-5">Choisissez un post ...</h2>
                <PostModale />
                <section className="Posts">
                </section>

            </div>
        );
    }
}

export default Blog;