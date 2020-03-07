import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';

import Button from '../components/button/button.jsx';
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
import headImg from './head-img.jpg';
import zanImg from './zan.png';


const Player = ({isPlayerOnly, onSeeInside, projectId}) => (
    <Box>
        <Header/>
        <div className={styles['stage-container']}>
            <div className={styles['stage-view']}>
                <span className={styles['prod-title']}>作品名称</span>
                <div className={styles['prod-author-view']}>
                    {/*<img className={styles['head-img']} src={headImg}/>*/}
                    {/*<span className={styles['prod-author-name']}>作者</span>*/}
                    <Button iconSrc={headImg} iconClassName={styles['head-img']} className={styles['prod-author-name']}>作者</Button>
                    <span className={styles['prod-update-time']}>更新于: 2020-03-03</span>
                </div>
                <div className={styles['box-view']}>
                    <Box className={classNames(styles['stage-box'])}>
                        <GUI stageDetailSize={STAGE_SIZE_MODES.detail} isPlayerOnly={isPlayerOnly}/>
                    </Box>
                    <div className={styles['prod-right-view']}>
                        <div className={styles['prod-intro-view']}>
                            <span>作品介绍：</span>
                            <span className={styles['prod-intro-txt']}>本作品为改编版。不喜勿喷。记得素质三连（点赞收藏五星）
                                加载好之后点击play即可开始游戏

                                今天看到一款特别好玩的持续更新游戏，这是游戏网址
                                https://kada.163.com/project/3894255-3465292.htm

                                今天看到一款特别好玩的持续更新游戏，这是游戏网址
                                https://kada.163.com/project/3894255-3465292.htm

                                一款休闲娱乐的持续更新游戏https://kada.163.com/project/3894255-3465292.htm

                                https://kada.163.com/project/3872598-3467255.htm
                                各位想打广告的朋友，打开上面的网址点赞 收藏 五星，我就可以不删你广告

                            </span>
                            <span>操作说明：</span>
                            <span className={styles['prod-intro-txt']}>鼠标操作，也可以方向键操作。玩法简单。</span>
                        </div>
                        <div className={styles['prod-btns-view']}>
                            <Button className={styles.btn1}>改编</Button>
                            <Button className={styles.btn2}>查看创作页</Button>
                        </div>
                    </div>
                </div>
                <div className={styles['prod-bottom-view']}>
                    <Button iconSrc={zanImg} iconClassName={styles['prod-bottom-img']} className={styles['zan-num-txt']}>123</Button>
                </div>
            </div>
        </div>
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
