import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoaderGif from './images/charmander-loading.gif'

class FullPageLoader extends Component {
    state = {}
    
    render(){
        const {loading} = this.props;
        if(!loading) return null;
        return (
            <div className='loader-container'>
                <div className='loader'>
                    <img src={LoaderGif} alt='Loader'/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({loading: state.loading})
export default connect(mapStateToProps)(FullPageLoader);