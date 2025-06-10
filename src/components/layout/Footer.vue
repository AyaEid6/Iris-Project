<template>
    <footer>
       <div class="top-footer ">
            <div class="container">
                <div class="top d-flex flex-column justify-content-center align-items-center">
                    <h3 class="heading">Key Stats & Global Impact</h3>
                    <div class="statics d-flex justify-content-center align-items-center">
                        <div class="block d-flex flex-column justify-content-center align-content-center">
                            <span class="num text-center">60+</span>
                            <span class="text">Years of Experience</span>
                        </div>
                        <div class="block d-flex flex-column justify-content-center align-content-center">
                            <span class="num text-center">10+</span>
                            <span class="text">Investment Sectors</span>
                        </div>
                        <div class="block d-flex flex-column justify-content-center align-content-center">
                            <span class="num text-center">8+</span>
                            <span class="text">Global Offices</span>
                        </div>
                        <div class="block d-flex flex-column justify-content-center align-content-center">
                            <span class="num text-center">500+</span>
                            <span class="text">International Clients</span>
                        </div>
                    </div>
                </div>
            </div>
       </div>
       <div class="bottom-footer">
            <div class="container">
                <div class="content">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="d-flex flex-column main align-items-start gap-3">
                                    <a href="#">
                                        <img src="/images/logoLight.svg" alt="logo" />
                                    </a>
                                    <p class="text-start">
                                        IrisUnited Group Holding is a global investment and business solutions company based in Shanghai, 
                                        empowering growth across industries through strategic partnerships, smart technologies, and international trade.
                                    </p>
                                </div>
                                
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-12">
                                <div class="links quick d-flex flex-column align-items-start">
                                    <h4 class="mb-4">Quick Links</h4>
                                    <ul class="list d-flex flex-column align-items-start gap-2">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Our Projects</a></li>
                                        <li><a href="#">Our Partners</a></li>
                                        <li><a href="#">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="links d-flex flex-column align-items-start">
                                    <h4 class="mb-4">Contacts</h4>
                                    <ul class="list d-flex flex-column align-items-start gap-2">
                                        <li><a href="#">Shanghai Office (HQ) Century Avenue,Pudong Shanghai, China</a></li>
                                        <li><a href="#">info@irisunited.com</a></li>
                                        <li><a href="#">+86 21 2200 1000</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12">
                                <div class="links d-flex flex-column align-items-start">
                                    <h4 class="mb-4">Get In Touch</h4>
                                   <p>We're here to answer questions, explore partnerships, and support your success.
                                    Our team of experts is ready to help you navigate global markets.</p>
                                    <button>
                                        Get In Touch
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <mask id="mask0_134_23007" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                                                <rect width="22" height="22" fill="#D9D9D9"/>
                                            </mask>
                                            <g mask="url(#mask0_134_23007)">
                                                <path d="M12.1667 16L11 14.7917L13.9583 11.8333H3.83334V10.1667H13.9583L11 7.20833L12.1667 6L17.1667 11L12.1667 16Z" fill="white"/>
                                            </g>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="copyright d-flex justify-content-between">
                    <div class="copy">
                        <p>© All rights reserved to IrisUnited Group Designed by Virtual Data IT</p>
                    </div>
                    <div class="conditions d-flex">
                        <span>Terms</span>
                        <span>Privacy</span>
                    </div>
                </div>
            </div>
       </div>
    </footer>
</template>

<script>
export default {
name: 'AppFooter'
}
</script>

<style>
    .top-footer{
        background: #444;
        padding: 80px 140px;
        
        color: #FFFFFF;
    }

    .top{
        gap: 40px;
    }

    .heading{
        position: relative;
        color: #FFF;
        text-align: center;
        font-family: "Playfair Display";
        font-size: 46px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
       
    }

    .heading::after{
        content: "";
        display: block;
        width: 123px;
        height: 5px;
        background: #B1202F;
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
    }

    .statics{
        gap: 50px;
    }

    .block{
        gap: 10px;
    }

    .block .num{
        color: #FFF;
        font-family: Inter;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .block:first-child .num{
        border-radius: 50px;
        background: #B1202F;

    }

    .block .text{
        color: rgba(255, 255, 255, 0.80);
        text-align: center;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 27px */
        letter-spacing: 0.36px;
    }
    
    .bottom-footer{
        background: #333;
        padding: 80px 140px;
    }

    .bottom-footer .main p{
        color: rgba(255, 255, 255, 0.80);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
    }

    .links h4{
        color: #FFF;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px; /* 100% */
        letter-spacing: 0.36px;
    }

    .content{
        padding-bottom: 40px;
    }

    .links li a{
        color: rgba(255, 255, 255, 0.80);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 112.5% */
        letter-spacing: 0.32px;
    }

    .links p{
        color: rgba(255, 255, 255, 0.80);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
    }

    .links button {
        border-radius: 4px;
        border: 0px solid #8C1D40;
        background: #B1202F;
        display: flex;
        padding: 18px 32px;
        justify-content: center;
        align-items: center;
        gap: 12px;
        color:white;
    }

    .copyright{
        padding-top: 40px;
        border-top: 1px solid rgba(255, 255, 255, 0.10);
        color:rgba(255, 255, 255, 0.80);
    }

    .conditions{
        gap:30px;
    }
</style>