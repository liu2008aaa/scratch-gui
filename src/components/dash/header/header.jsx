import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Menu, {SubMenu} from 'rc-menu';

import logoIcon from './logo.png';
import styles from './header.css';
import './menu.less';

const Header = function (props) {
    const {
        className,
        onClick,
        title,
        ...componentProps
    } = props;
    return (
        <div className={classNames(styles['backup'])}>
            <a href="#">
                <img
                    className={classNames(styles['logo'])}
                    src={logoIcon}/>
            </a>
            <a href="#">
                <Menu
                    className={classNames(styles['menu'])}
                    mode="horizontal"
                    openAnimation="slide-up">
                    <SubMenu title="首页" key="1"/>
                    <SubMenu title="发现" key="2"/>
                </Menu>
            </a>
            xxx
        </div>
    );
};
Header.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};
Header.defaultProps = {
    active: false,
    title: 'Go'
};
export default Header;
