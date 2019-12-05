import React,{ Component} from 'react';
import AuthRoute from '../../hoc/authRoute';
import axios from 'axios';
import Cookies from 'js-cookie';

import { getCooksFromReq } from '../../lib/utils';

class Users extends Component {
    static async getInitialProps({req}) {
        let user ='Francis';
        let pageConfigs = 'Admin';
        let usersList;

        let reqCook = getCooksFromReq(req, 'x-jwt');

        // console.log(reqCook);

        try {
            const response = await axios.get('http://localhost:3000/api/users', {
                headers:{
                    'authorization': `Bearer ${reqCook}`
                }
            });
            usersList = response.data;

        } catch(error) {
            console.error(error);
        }

        return {user, pageConfigs, usersList}
    }

    render(){
        // console.log(this.props);
        return(
            <>
                <h1>Users</h1>
            </>
        )
    }
}

export default AuthRoute(Users);