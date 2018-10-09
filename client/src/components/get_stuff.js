import React, {Component} from 'react';
import axios from 'axios';

class GetStuff extends Component {
    componentDidMount(){
        axios.get('/api/get-stuff').then(response => {
            console.log(`Response from server:`, response)
        })

        axios.post('/api/get-user').then(resp =>{
            console.log('Resonse from get user: ', resp);
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