import React, { Component } from 'react';
// import BackgorundSlideshow from 'react-background-slideshow';
import Acadia from'../../media/Images/Acadia.jpg';
import Banff from '../../media/Images/Banff.jpg'
import Badlands from '../../media/Images/Badlands.jpg'
import Canyonlands from '../../media/Images/Canyonlands.jpg'
import Flatirons from '../../media/Images/Flatirons.jpg'
import JoshuaTree from '../../media/Images/JoshuaTree.jpg'
import Yosmite from '../../media/Images/Yosmite.jpg';
import YellowStone from '../../media/Images/YellowStone.jpg'
import HorseShoe from '../../media/Images/HorseShoe.jpg'
import Antelope from '../../media/Images/Antelope.jpg'
import {Fade} from 'react-slideshow-image';

const images = [Acadia, Banff, Badlands, Canyonlands, Flatirons, JoshuaTree, Yosmite, YellowStone, Antelope, HorseShoe]
  


export default class Home extends Component {
    render() {
        const Slideshow = () => {
            return (
                <Fade
                  images={images}
                  duration={5000}
                  transitionDuration={2000}
                />
            )
        }
        return (
        
        <div>
             <Slideshow/>
        </div>  
         
        );
    }
}