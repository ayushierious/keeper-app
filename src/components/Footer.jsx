import React from 'react';

function Footer(props) {
    return (
        <div>
        <footer>
            <p>Copyright © {new Date().getFullYear()}</p>
        </footer>
        </div>
        
    );
}

export default Footer;