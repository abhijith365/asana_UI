import img1 from '../../assets/img1.png'

export const Hero = () => {
    return (

        <div className="w-98 pb-1/2 flex justify-center items-center overflow-clip bg-purple-200">
            {Array(3).fill(null).map(() => (
                <img src={img1} className=" bg-center hero-img pt-10 px-10" alt="img" />

            ))}

        </div>
    )
}
