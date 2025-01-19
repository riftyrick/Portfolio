"use client";

export default function Custom404() {
    return (
        <div>
            <script async src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.js"/>
            <script async src="/404-background.js"/>
            <title>404 Page introuvable - Farmeurimmo</title>
            <style>
                {`
                    body {
                        background: #000000;
                        margin: 0;
                        max-width: 100%;
                        overflow-x: hidden;
                        overflow-y: hidden;
                        max-height: 100%;
                    }
                    
                    #wrapper {
                        position: absolute;
                        color: #ffffff;
                        z-index: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 100%;
                    }
                    
                    #wrapper h1 {
                      font-size: 6rem;
                      color: black;
                      font-family: 'Roboto', sans-serif;
                      text-decoration: bolder;
                      text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
             1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
                    }
                    
                    #wrapper a {
                        margin-top: 1rem;
                        padding: 1rem;
                        font-size: 2rem;
                        background: #000000;
                        border-radius: 16px;
                        color: #ffffff;
                        text-decoration: none;
                        transition: 0.5s;
                        animation: pulseShadow 1s infinite;
                    }
                    
                    #wrapper a:hover {
                        background: #ffffff;
                        color: #000000;
                        animation: pulseShadowWhite 1s infinite;
                    }
                    
                    @keyframes pulseShadow {
                        0% {
                            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.9);
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.03);
                            }
                        100% {
                            box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
                            transform: scale(1);
                        }
                    }
                    
                    @keyframes pulseShadowWhite {
                        0% {
                            box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.9);
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.03);
                            }
                        100% {
                            box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
                            transform: scale(1);
                        }
                    }
                `}
            </style>
            <div id="wrapper">
                <h1>404 - Page introuvable</h1>
                <a href="/">Retour à l'accueil</a>
            </div>
        </div>
    )

}