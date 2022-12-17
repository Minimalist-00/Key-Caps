import React from 'react';
import { Link } from "react-router-dom";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (
        <div>
            <div className="footer06">
                <div className="wrap">
                    <div className="box">
                        <h5>About KeyCaps</h5>
                        <ul>
                            <li><Link to={'/AboutKeyCaps'} >KeyCapsとは</Link></li>
                            <li><Link to={'/DesignProposal'} >プロジェクト案</Link></li>
                        </ul>
                    </div>
                    <div className="box">
                        <h5>Various</h5>
                        <ul>
                            <li><Link to={'/Review'} >ちょこっとレビュー</Link></li>
                        </ul>
                    </div>
                    <div className="box">
                        <h5>Follow us</h5>
                        <ul className="d-flex">
                            <li className="pe-2 ps-1"><Link to={'/Facebook'} ><FacebookIcon /></Link></li>
                            <li className="pe-2"><Link to={'/Twitter'} ><TwitterIcon /></Link></li>
                            <li className="pe-2"><Link to={'/Line'} ><InstagramIcon /></Link></li>
                            <li className="pe-2"><Link to={'/Youtube'} ><YouTubeIcon /></Link></li>
                        </ul>
                    </div>
                    <p className="copyright">
                        &copy; KeyCaps | This website is a test site created for a className project.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;