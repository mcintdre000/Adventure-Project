import React, { Component } from 'react';
// import BackgorundSlideshow from 'react-background-slideshow';
import Acadia from'./Images/Acadia.jpg'
import Banff from './Images/Banff.jpg'
import Badlands from './Images/Badlands.jpg'
import Canyonlands from './Images/Canyonlands.jpg'
import Flatirons from './Images/Flatirons.jpg'
import JoshuaTree from './Images/JoshuaTree.jpg'
import Yosmite from './Images/Yosmite.jpg';
import YellowStone from './Images/YellowStone.jpg'
import HorseShoe from './Images/HorseShoe.jpg'
import Antelope from './Images/Antelope.jpg'
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