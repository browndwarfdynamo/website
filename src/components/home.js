import React, { Component } from 'react'
import images from '../config/images'
import Radium from 'radium';

class Home extends React.Component {
  render() {

   var HomeStyle = (img) => (
    {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
    minHeight: '100vh',
    height: '100%',
    paddingTop: '250px',

    '@media (max-width: 620px)': {
              backgroundImage: 'none',
              paddingTop: '0',
            },


    // '@media (max-height: 650px)': {
    //           height: '100%'
    //         },

    //  '@media (max-height: 650px) and (max-width: 1000px)': {
    //           height: '100vh'
    //         },

    }
    )

    var ParagraphStyle = {
    color:'white',
    backgroundColor:'rgba(255, 0, 0, 0.0)',
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 1.25,
    fontSize: '14px',

    };

    

    var TextBoundaryStyle = {

    backgroundColor: 'rgba(60,60,60, 0.4)',
    width: '40%',
    marginLeft: 'auto',
    paddingRight: '15%',
    paddingLeft: '30px',
    paddingTop: '15px',
    paddingBottom: '15px',
    
    '@media (max-width: 850px)': {
        width: '100%',
        position: 'fixed',
        bottom: 0        
      },

    '@media (max-width: 620px)': {
        width: '100%',
        marginTop: '-10px',  
        position: 'relative',
        height: '100vh'
      },

    }

    var newImage = {
      width: '100%',
      '@media (min-width: 620px)': {
              width: '0',
              height: '0',
              zIndex: '0',
            }
    }

    var newImageBoundary = {
      position: 'relative',
      top: '0',
      left: '0',
    }
    
    return(
      
      <div style={HomeStyle(images.mkao)}> 
        <div style={newImageBoundary}>
            <img src={images.mkao} style={newImage} />
        </div> 
        <div style={TextBoundaryStyle}>
          <p style={ParagraphStyle}>
          I am a NASA Hubble Postdoctoral Fellow at the 
          Arizona State University School for Earth and Space Exploration.
          I am characterizing the magnetic fields of very
          cold brown dwarfs in an effort to 
          understand the magnetic dynamo
          merchanisms operating in the mass regime
          that bridges planets and stars.
          </p>

          <p style={ParagraphStyle}>
          I received my PhD in 2017 at the
          California Institute of Technoloy and held
          a 2017 Grote Reber Pre-Doctoral Fellowship at
          the National Radio Astronomy
          Observatory in Socorro, NM. Prior to 
          Caltech, I received my SB in Physics from
          the Massachusetts Institute of Technology.
          </p>

          <p style={ParagraphStyle}>
          Contact: mkao [at] asu [dot] edu 
          </p>
        </div>
      </div>


      )

  }
}

export default Radium(Home)