import React,{ Component} from 'react';
import Message from "../components/includes/message";
import Router from 'next/router';

class About extends Component {
    static getInitialProps() {
        let headerStyle = 'skyblue';

        return {headerStyle};
    }

    render(){

        return(
            <>
            <h1>About</h1>
                <Message />
                <br />
                <span onClick={() => Router.push('/contact')}>
                    Click Me Now!
                </span>
            </>
        )
    }
}

export default About;