import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
    return (
        <Carousel className='text-center' autoPlay>
            <div>
                <img src="https://i.ibb.co/6WL1DHW/food-social-media-web-banner-post-template-542236-59.jpg" />
            </div>
            {/* <div>
                <img src="" />
            </div> */}
            <div>
                <img src="https://i.ibb.co/T8JW6d5/152394653-minimalist-food-banner-design-template.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/hmZfM0S/360-F-504084251-S3-Kmr-Ym-DWhqxc7rw-Eed-Tn5zs-TSX9hw-VZ.jpg" />
            </div>
            {/* <div>
                <img src="assets/2.jpeg" />
            </div> */}
            <div>
                <img src="https://i.ibb.co/vcHKQ3c/maxresdefault.jpg" />
            </div>
        </Carousel>
    )
}

export default Banner