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
                // console.log(reponse); 

                const articles = reponse.data.slice(0,4);

                const postAuteur = articles.map(post => {
                    return {
                        ...post,
                        auteur: 'Jonas'
                    }
                });

                console.log(postAuteur); 

                this.setState({ posts : postAuteur});
            })
        ;  
    }

    render () {

        const post = this.state.posts.map(post => {
            return <Post key={post.id} auteur={post.auteur} titre={post.title} />
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