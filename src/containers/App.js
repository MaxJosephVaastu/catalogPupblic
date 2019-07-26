import {connect} from 'react-redux'
import App from '../components/App'

import {initFakeApi} from '../store/page/actions'


export default connect(
    state => ({
    }),
    dispatch => ({
        initFakeApi: () => {
            dispatch(initFakeApi())
        },
    })
)(App)
