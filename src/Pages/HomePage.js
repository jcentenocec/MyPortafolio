import React from 'react';
import styled from 'styled-components';
import Particles from '../Components/Particles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
function  HomePage() {
    return (
        <HomePageStyled>
          <div className="p-particles-js">
            <Particles/>
          </div>
          <div className="typography">
              <h1>Hola Soy <span>Jesus Centeno </span></h1>
              <p>
              Soy un ingeniero en tecnologías de la información y las telecomunicaciones, 
              con especialidad en sistemas informáticos.
               Tengo experiencia como desarrollador web. 
              </p>
              <div className="icons">
                <div className="icon i-facebook">
                <FacebookIcon/>
                </div>
                <div className="icon i-github">
                    <GitHubIcon/>
                </div>
                <div className="icon i-linkedin">
                    <LinkedInIcon/>
                </div>
                <div className="icon i-twitter">
                    <TwitterIcon/>
                </div>
              </div>
          </div>
        </HomePageStyled>
    )
}
const HomePageStyled=styled.header`
width:100%;
height:100vh;
position: relative;
.p-particles-js{
    position:absolute;
    top:0;
    left:0;
}
.typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                    cursor:pointer;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-facebook{
                &:hover{
                    border: 2px solid #0262FF;
                    color: #0262FF;
                }
            } 
            .i-github{
                &:hover{
                    border: 2px solid #A00EF3;
                    color: #A00EF3;
                }
            } 
            
            .i-linkedin{
                &:hover{
                    border: 2px solid #0262FF;
                    color: #0262FF;
                }
            } 
            
            .i-twitter{
                &:hover{
                    border: 2px solid #0AACFD;
                    color: #0AACFD;
                }
            } 
        }
    }
`;

export default HomePage;