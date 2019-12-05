import React,{ Component} from 'react';
import axios from 'axios';
import MainLayout from '../components/layouts/mainLayout';
//import MyStyle from '../styles/main.css';
import Link from 'next/link';
import styled from 'styled-components';

// const Rocket = styled.div`
//     text-align: center;
//     img {
//     width: 630px;
//     }
//     `;
// function Index() {
//     return (
//         <Rocket>
//             <img src ='https://media.giphy.com/media/QbumCX9HFFDQA/giphy.gif' />
//         </Rocket>
//     );
// }

class Home extends Component {
    static async getInitialProps({pathname,query,asPath,req,res}){
        let userData;

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            userData = response.data;
        } catch {
            console.log('error')
        }

        // console.log(pathname)
        //  console.log(query)
        // console.log(req)

        return {
            user:{
                name:'Francis',
                lastname:'Jones'
            },
            userData
        }
    }

    constructor(props){
        super(props)
    }

    renderUserlist = (users) =>(
        users.map((user, i) => (
            <li className = "list-group-item" key = {i}>
                <Link
                    as={`/users/profile/${user.id}`}
                    href={{
                    pathname: '/users/profile',
                    query: {
                        userId: user.id
                    }
                }}>
                    <a>{user.name}</a>
                </Link>
            </li>
        ))
    )

    render(){
        //console.log(this.props);
        return(
            <>
                <h1>Pick a user</h1>
                <ul className="list-group">
                    {this.renderUserlist(this.props.userData)}
                </ul>
            </>
        )
    }
}

export default Home;
// export default (Home, Index);