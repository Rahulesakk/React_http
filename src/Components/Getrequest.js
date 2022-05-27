import React, { Component } from 'react'
import axios from 'axios'

class Getrequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             error:""  
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response);
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error);
            this.setState({error:"THis is invalid url"})
        })
    }
    
    render() {
        const{posts,error} = this.state
        return (
            <div>
                List of get request
                {
                    posts.length?
                    posts.map(post=><div key={post.id}>{post.title}</div>) : null               
                }
                {
                    error ? <div>{error}</div> : null
                }
            </div>
        )
    }
}

export default Getrequest
