import React from 'react';
import { Link } from "react-router-dom";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';



function Footer() {
    return (
        <div>
            <div class="footer06">
                <div class="wrap">
                    <div class="box">
                        <h5>About KeyCaps</h5>
                        <ul>
                            <li><Link to={'/AboutKeyCaps'} >KeyCapsとは</Link></li>
                            <li><Link to={'/DesignProposal'} >プロジェクト案</Link></li>
                        </ul>
                    </div>
                    <div class="box">
                        <h5>Various</h5>
                        <ul>
                            <li><Link to={'/Review'} >ちょこっとレビュー</Link></li>
                        </ul>
                    </div>
                    <div class="box">
                        <h5>Follow us</h5>
                        <ul class="d-flex">
                            <li class="pe-2 ps-1"><Link to={'/Facebook'} ><FacebookIcon/></Link></li>
                            <li class="pe-2"><Link to={'/Twitter'} ><TwitterIcon/></Link></li>
                            <li class="pe-2"><Link to={'/Line'} ><InstagramIcon/></Link></li>
                            <li class="pe-2"><Link to={'/Youtube'} ><YouTubeIcon/></Link></li>
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