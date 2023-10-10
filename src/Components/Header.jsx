import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <div className="header-container">
            <h2 className="header-title">Git Finder</h2>
            <div>
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                >
                    Go GitHub <FontAwesomeIcon icon={faGithub} size='xl' />
                </a>
            </div>
        </div>
    );
};

export default Header;
