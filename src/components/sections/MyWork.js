import { mySlider } from '@/src/sliderProps';
import { Swiper, SwiperSlide } from 'swiper/react';

const projectsData = [
  {
    title: 'Allbirds Web',
    type: 'gallery',
    images: [
      'assets/portfolio/project-11-1.png',
      'assets/portfolio/project-11-2.png',
    ],
    project: 'Website',
    client: 'Allbirds',
    duration: '2 months',
    link: 'https://www.allbirds.com/',
  },
  {
    title: 'Vintra Web',
    type: 'gallery',
    images: [
      'assets/portfolio/project-10-1.png',
      'assets/portfolio/project-10-2.png',
      'assets/portfolio/project-10-3.png',
    ],
    project: 'Website',
    client: 'Vintra',
    duration: '2 months',
    link: 'https://www.vitra.com',
  },
  {
    title: 'E-commerce',
    type: 'image',
    src: 'assets/portfolio/project-1.png',
    alt: 'Image Project',
    project: 'Website',
    client: 'Bizcotap Ltd',
    duration: '1 month',
    link: 'https://bizcotap.com/',
  },
  {
    title: 'NFC System',
    type: 'video',
    src: 'https://www.youtube.com/embed/yD8VL4POow8',
    videoTitle: 'Bizcotap Business Card',
    project: 'NFC enabled system',
    client: 'Bizcotap Ltd',
    duration: '2 months',
    link: 'https://www.youtube.com/watch?v=yD8VL4POow8',
  },
  {
    title: 'WelTel Platform',
    type: 'video',
    src: 'https://www.youtube.com/embed/g5o5YdC1YGE',
    videoTitle: 'WelTel Platform',
    project: 'Health Platform',
    client: 'WelTel Inc',
    link: 'https://www.youtube.com/watch?v=g5o5YdC1YGE',
  },
  {
    title: 'BRC Web',
    type: 'gallery',
    images: [
      'assets/portfolio/project-2-1.png',
      'assets/portfolio/project-2-2.png',
    ],
    project: 'BRC Website',
    client: 'PSF',
    duration: '1 months',
    link: 'https://brc.org.rw/',
  },
  {
    title: 'Shield Web',
    type: 'gallery',
    images: [
      'assets/portfolio/project-3-1.png',
      'assets/portfolio/project-3-2.png',
    ],
    project: 'Website',
    client: 'Shield Associates',
    duration: '1 months',
    link: 'https://shield-associates.com/',
  },
  {
    title: 'Acreol Web',
    type: 'gallery',
    images: [
      'assets/portfolio/project-4-1.png',
      'assets/portfolio/project-4-2.png',
    ],
    project: 'Website',
    client: 'Acreol Website',
    duration: '1 months',
    link: 'https://acreol.org/',
  },
  {
    title: 'TechQuest ',
    type: 'gallery',
    images: [
      'assets/portfolio/project-5-1.png',
      'assets/portfolio/project-5-2.png',
    ],
    project: 'Website',
    client: 'TechQuest Ltd',
    duration: '1 month',
    link: 'https://techquestltd.com/',
  },
  {
    title: 'E-commerce',
    type: 'gallery',
    images: [
      'assets/portfolio/project-6-1.png',
      'assets/portfolio/project-6-2.png',
    ],
    project: 'E-commerce Platform',
    client: 'DHDealz Ltd',
    duration: '2 months',
    link: 'https://dhdealz.com/',
  },
  {
    title: 'Rentplus Web',
    type: 'gallery',
    images: [
      'assets/portfolio/project-7-1.png',
      'assets/portfolio/project-7-2.png',
      'assets/portfolio/project-7-3.png',
      'assets/portfolio/project-7-4.png',
    ],
    project: 'Property Management',
    client: 'Rent Plus Ltd',
    duration: '2 months',
    link: 'https://rentplus.rw',
  },
  {
    title: 'Buehler Web',
    type: 'gallery',
    images: [
      'assets/portfolio/project-8-1.png',
      'assets/portfolio/project-8-2.png',
    ],
    project: 'Website',
    client: 'Buehler Engineering',
    duration: '2 months',
    link: 'https://buehlerengineering.com/',
  },
  {
    title: 'Galloway Web ',
    type: 'image',
    src: 'assets/portfolio/project-9-1.png',
    project: 'Website',
    client: 'Galloway',
    duration: '2 months',
    link: 'https://gallowayus.com/',
  },
  {
    title: 'Stansile Web',
    type: 'image',
    src: 'assets/portfolio/project-12-1.png',
    project: 'Website & CMS',
    client: 'Business Pro Solutions',
    duration: '1.5 months',
    link: 'https://stansile.org/',
  },
];

const Portfolio = () => {
  return (
    <section className='portfolio main-section flex-column-mobile' id='my-work'>
      {/* TITLE STARTS */}
      <div className='custom-title'>
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className='animated-layer fade-in-left-animation fadeInUp wow'>
              My Work
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...mySlider.portfolio}
        className='swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow'
        data-wow-offset={200}
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index} className='single-item swiper-slide'>
            {/* ITEM MAIN CONTENT STARTS */}
            <div className='main-content'>
              {project.type === 'image' ? (
                <img
                  className='img-fluid'
                  src={project.src}
                  alt={project.alt}
                />
              ) : project.type === 'video' ? (
                <div className='videocontainer'>
                  <iframe
                    className='youtube-video'
                    src={project.src}
                    allowFullScreen
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    width='100%'
                    height='400px'
                    title={project.videoTitle}
                  />
                </div>
              ) : (
                <Swiper
                  {...mySlider.portfolioItems}
                  className='swiper swiper-portfolio-item'
                >
                  {project.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex} className='swiper-slide'>
                      <img src={image} title='img' />
                    </SwiperSlide>
                  ))}
                  <div className='swiper-pagination' />
                </Swiper>
              )}
            </div>
            {/* ITEM MAIN CONTENT ENDS */}
            {/* ITEM DETAILS STARTS */}
            <div className='details'>
              <h4>{project.title}</h4>
              <div>
                <ul>
                  <li>
                    <span>
                      <i className='fa-regular fa-file-lines' /> Project :
                    </span>
                    <span>{project.project}</span>
                  </li>
                  <li>
                    <span>
                      <i className='fa-regular fa-user' /> Client :
                    </span>
                    <span>{project.client}</span>
                  </li>
                  {project.duration && (
                    <li>
                      <span>
                        <i className='fa-regular fa-hourglass' /> Duration :
                      </span>
                      <span>{project.duration}</span>
                    </li>
                  )}
                  {project.frameworks && (
                    <li>
                      <span>
                        <i className='fa-solid fa-code-branch' /> Frameworks :
                      </span>
                      <span>{project.frameworks}</span>
                    </li>
                  )}
                </ul>
              </div>
              <a href={project.link} target='_blank' className='custom-btn'>
                <span>
                  preview{' '}
                  <i className='fa-solid fa-arrow-up-right-from-square' />
                </span>
              </a>
            </div>
            {/* ITEM DETAILS ENDS */}
          </SwiperSlide>
        ))}

        <div className='nav-item next-item animated-btn'>
          <span />
        </div>
        <div className='nav-item prev-item animated-btn'>
          <span />
        </div>
      </Swiper>
      <img
        alt=''
        className='separator hide-mobile'
        src='assets/separator.png'
      />
    </section>
  );
};
export default Portfolio;
