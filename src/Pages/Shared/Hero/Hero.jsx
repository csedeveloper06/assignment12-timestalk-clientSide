import { Parallax } from 'react-parallax';

const Hero = ({img,title}) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="Payment"
            strength={-200}
        >
          <div className="hero h-[600px]" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className='mb-5'>Revolutionizing Transactions: Introducing our Seamless Payment Banner for Effortless Financial Transactions!</p>
                </div>
            </div>
         </div>
       </Parallax>
      
    );
};

export default Hero;