import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';
function ImageSection () {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="aqui va una imagen" />
            </div>
            <div className="right-content">
                <h4>Soy <span>Jesus Centeno </span></h4>
                <p className="paragraph">
                Soy un ingeniero en tecnología de la información y comunicación recién egresado y 
                también soy un desarrollador de software con conocimiento en múltiples lenguajes de programación,
                     
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Nombre </p>
                        <p>Edad</p>
                        <p>Nacionalidad</p>
                        <p>idiomas</p>
                        <p>ubicación</p>
                    </div>
                    <div className="info">
                        <p>: Jesus Guadalupe Centeno Centeno</p>
                        <p>: 27</p>
                        <p>: Mexicano </p>
                        <p>: Español,English </p>
                        <p>: Cancún,Quinta Roo</p>
                    </div>
                </div>
                 <PrimaryButton title={'Download Cv'} /> 
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;