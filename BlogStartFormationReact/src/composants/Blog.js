import React, { Component } from 'react'
import NvPost from './NvPost/NvPost'
import PostModale from './PostModale/PostModale'
import './Blog.css'
import axios from 'axios'
import Post from './Post/Post'

class Blog extends Component {

    state = {
        posts : []
    }

    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(reponse => {
                console.log(reponse);

                this.setState({ posts : reponse.data});
            })
        ;  
    }

    render () {

        const post = this.state.posts.map(post => {
            return <Post key={post.id} titre={post.title} />
        })

        return (
            <div>
                <section>
                <NvPost />
                </section>
                <h2 className="text-center my-5">Choisissez un post ...</h2>
                <PostModale />
                <section className="Posts">
                    {post}
                </section>

            </div>
        );
    }
}

export default Blog;