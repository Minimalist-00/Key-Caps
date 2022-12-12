import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <div class="footer06">
                <div class="wrap">
                    <div class="box">
                        <h5>About KeyCaps</h5>
                        <ul>
                            <li><Link to={'/'} >KeyCapsとは</Link></li>
                            <li><Link to={'/'} >プロジェクト案</Link></li>
                        </ul>
                    </div>
                    <div class="box">
                        <h5>Various</h5>
                        <ul>
                            <li><Link to={'/'} >ちょこっとレビュー</Link></li>
                            <li><Link to={'/'} >XXXXXXX</Link></li>
                        </ul>
                    </div>
                    <div class="box">
                        <h5>Follow us</h5>
                        <ul>
                            <li><Link to={'/'} >Facebook</Link></li>
                            <li><Link to={'/'} >Instagram</Link></li>
                            <li><Link to={'/'} >Twitter</Link></li>
                            <li><Link to={'/'} >Discord</Link></li>
                            <li><Link to={'/'} >YouTube</Link></li>
                        </ul>
                    </div>
                    <p class="copyright">
                        &copy; KeyCaps | This website is a test site created for a class project.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;