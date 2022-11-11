import './App.css';
import React, { useState } from 'react'
import SignUp from './components/SignUp'
import FailedAlert from './components/Alert'
import LargeSun from './assets/images/background/fetch_sun_large.png'
import SmallSun from './assets/images/background/fetch_sun.png'
import Cloud from './assets/images/background/fetch_cloud_pink.png'
import YellowFlying from './assets/images/background/fetch_flying_yellow.png'
import PinkFlying from './assets/images/background/fetch_flying_pink.png'
import Star1 from './assets/images/background/fetch_star_1.png'
import Star2 from './assets/images/background/fetch_star_2.png'
import Star3 from './assets/images/background/fetch_star_3.png'

const images = [
  // Left Side
  { src: Star3, width: 55, height: 50, className: "absolute top-24 left-44", alt: "top-left star icon" },
  { src: Cloud, width: 90, height: 53, className: "absolute ml-4 top-80 left-96", alt: "left pink cloud icon" },
  { src: YellowFlying, width: 56, height: 87, className: "absolute bottom-80 left-24", alt: "left yellow flying icon" },
  { src: SmallSun, width: 65, height: 57, className: "absolute bottom-20 left-80", alt: "left small sun icon" },
  // Right Side
  { src: LargeSun, width: 143, height: 150, className: "absolute top-0 right-0", alt: "right large sun icon" },
  { src: Star1, width: 33, height: 33, className: "absolute mr-12 top-96 right-96", alt: "top-right star icon" },
  { src: PinkFlying, width: 48, height: 65, className: "absolute bottom-72 right-44", alt: "right pink flying icon" },
  { src: Star2, width: 45, height: 45, className: "absolute bottom-8 right-80", alt: "bottom-right star icon" },
]

function App() {
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className="App">
      <div className="flex items-center justify-center h-screen w-full relative">
        {/* Background Images */}
        <div className="hidden lg:block overflow-hidden -z-10">
          {images.map((image, i) => (
            <img key={i} className={image.className} height={image.height} width={image.width} src={image.src} alt={image.alt} />
          ))}
        </div>

        {/* Alert Message */}
        {alert && <FailedAlert setAlert={setAlert} success={success} />}

        {/* SignUp Form */}
        <div className="mx-auto max-w-3xl">
          <SignUp setAlert={setAlert} setSuccess={setSuccess} />
        </div>
      </div>
    </div>
  );
}

export default App;
