import { Link } from 'react-router-dom';
import './Body.css'
import { useState } from 'react';

function BannerHome() {

    const bannerSlider = [
        {
            titleBanner: "Estilo Minimalista | Hombres", 
            descBanner: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a obcaecati tempora quibusdam perferendis rem culpa magni. Explicabo possimus eaque, blanditiis iusto odit deserunt vero quia itaque repellat similique nam.",
            imgClass: "model-man-banner",
            imgModel: "/img/model-man-banner.png", 
            alt: "model-man-img"
        },
        {
            titleBanner: "Estilo Urbano | Mujeres", 
            descBanner: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a obcaecati tempora quibusdam perferendis rem culpa magni. Explicabo possimus eaque, blanditiis iusto odit deserunt vero quia itaque repellat similique nam.",
            imgClass: "model-woman-banner",
            imgModel: "/img/model-woman-banner.png", 
            alt: "model-woman-img"
        },
        {
            titleBanner: "Estilo Formal",
            descBanner: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a obcaecati tempora quibusdam perferendis rem culpa magni. Explicabo possimus eaque, blanditiis iusto odit deserunt vero quia itaque repellat similique nam.",
            imgClass: "another-model-man-banner",
            imgModel: "/img/model-man-banner-2.png", 
            alt: "model-man-img-2"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? bannerSlider.length - 1 : prevIndex - 1
        )
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex => (prevIndex + 1) % bannerSlider.length))
    }

    return (
        <section id='banner-section'>
            <div className="discount-message">
                ¡Descuento del 50% en ropa de invierno!
            </div>
            <div className="slider-container">
                <div className="left-arrow-container">
                    <button onClick={prevSlide}><img src="/img/left-arrow-icon.png" alt="left-arrow-icon" /></button>
                </div>
                <div className="slider-banner"  style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {bannerSlider.map((info, index) => (
                        <div key={index} className="banner-and-yap-container">
                            <div className="banner-and-yap-section">
                                <div className="yapping">
                                    <h1>{info.titleBanner}</h1>
                                    <p>{info.descBanner}</p>
                                    <Link to="/products?p=1">Explorar</Link>
                                </div>
                                <div className="image-model">
                                    <img className={info.imgClass} src={info.imgModel} alt={info.alt} />
                                </div>
                            </div>
                        </div>
                        
                    ))}
                </div>
                <div className="right-arrow-container">
                    <button onClick={nextSlide}><img src="/img/right-arrow-icon.png" alt="right-arrow-icon" /></button>
                </div>
            </div>    
        </section>
    )
}

function CategoryHome() {

    const categories = [
        { descArt: 'desc-art-man', name: "Moda para hombres", link: "/products?p=1&gender=Masculino", imgClass: "background-img-hombres" },
        { descArt: 'desc-art-woman', name: "Moda para mujeres", link: "/products?p=1&gender=Femenino", imgClass: "background-img-mujeres" },
        { descArt: 'desc-art-kid', name: "Moda Unisex", link: "/products?p=1&gender=Unisex", imgClass: "background-img-ninos" }
    ];

    return (
        <section id='category-home-section'>
            <h2>Descubre nuestras categorías</h2>
            <div className="categories-container">
                {categories.map((category, index) => (
                    <Link className='category-link' to={category.link} key={index} onClick={() => window.scrollTo(0, 0)}>
                        <article className='category-home-card'>
                            <div className={category.imgClass}></div>
                            <p className={category.descArt}>{category.name}</p>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default function HomeBody() {
    return (
        <main>
            <BannerHome />
            <hr className='separator' />
            <CategoryHome />
            <hr className='separator'/>
        </main>
    );
}