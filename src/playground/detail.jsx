import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';

import Box from '../components/box/box.jsx';
import GUI from '../containers/gui.jsx';
import Header from '../components/dash/header/header.jsx';
import Footer from '../components/dash/footer/footer.jsx';

import HashParserHOC from '../lib/hash-parser-hoc.jsx';
import AppStateHOC from '../lib/app-state-hoc.jsx';

import {setPlayer} from '../reducers/mode';

if (process.env.NODE_ENV === 'production' && typeof window === 'object') {
    // Warn before navigating away
    window.onbeforeunload = () => true;
}

import styles from './detail.css';
import {STAGE_SIZE_MODES} from "../lib/layout-constants";


const Player = ({isPlayerOnly, onSeeInside, projectId}) => (
    <Box>
        <Header/>
        <div className={styles['stage-container']}>
            <div className={styles['stage-view']}>
                <div>作品名称</div>
                <div>作者</div>
                <div className={styles['box-view']}>
                    <Box className={classNames(styles['stage-box'])}>
                        <GUI stageDetailSize={STAGE_SIZE_MODES.detail} isPlayerOnly={isPlayerOnly}/>
                    </Box>
                    <div>xxx</div>
                </div>
                <div>xxx</div>
            </div>
        </div>
        <div className={styles['stage-container']}>xx</div>
        <Footer/>
    </Box>
);

Player.propTypes = {
    isPlayerOnly: PropTypes.bool,
    onSeeInside: PropTypes.func,
    projectId: PropTypes.string
};

const mapStateToProps = state => ({
    isPlayerOnly: state.scratchGui.mode.isPlayerOnly
});

const mapDispatchToProps = dispatch => ({
    onSeeInside: () => dispatch(setPlayer(false))
});

const ConnectedPlayer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);

// note that redux's 'compose' function is just being used as a general utility to make
// the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
// ability to compose reducers.
const WrappedPlayer = compose(
    AppStateHOC,
    HashParserHOC
)(ConnectedPlayer);

const appTarget = document.createElement('div');
document.body.appendChild(appTarget);

ReactDOM.render(<WrappedPlayer isPlayerOnly/>, appTarget);
