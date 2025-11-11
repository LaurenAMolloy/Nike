import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import { statistics } from '../constants/index'
import { bigShoe1 } from '../assets/images'

const Hero = () => {
  return (
    <section
    id="home"
    className= "w-full flex xl:flex-row flex-col justify-center min-h-screen border-2 gap-10 max-container border-red-500 p-2">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl: padding-x pt-28">
        <p className="text-xl font-montserrat">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max:smleading=[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br></br>
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 ">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap      w-full mt-20 gap-16">
          {statistics.map((stat, idx) => {
          return <div key={idx}>
            <p className="text-4xl font planquin font-bold">{stat.value}</p>
            <p className="leading-z font-montserrat text-slate-grey">{stat.label}</p>
          </div>
        })}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero">
        <img 
        src={bigShoe1} 
        alt="shoe" 
        width={610} 
        height={500}
        className="object-contain relative z-10"></img>
      </div>
    </section>
  )
}

export default Hero