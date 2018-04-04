import React, {Component} from 'react';
import axios from 'axios';

class GetStuff extends Component {
    componentDidMount(){
        axios.get('http://localhost:42069/api/get-stuff').then(response => {
            console.log(`Response from server:`, response)
        })
    }
    render(){
        return(
            <div>
                <h1>Get Stuff</h1>
            </div>
        )
    }
}

export default GetStuff;