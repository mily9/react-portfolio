import React from 'react'
import "./testimonials.css"
import AVRT1 from '../../assets/avatar1.jpg'
import AVRT2 from '../../assets/avatar2.jpg'
import AVRT3 from '../../assets/avatar3.jpg'
import AVRT4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';


import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const data = [
  {
    avatar: AVRT1,
    name:'Tina Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam a ipsum aspernatur, ipsam repellat sit, neque ullam natus fugiat nesciunt pariatur quae reiciendis alias saepe dolorem aliquam iusto odit laborum!'
  },
  {
    avatar: AVRT2,
    name:'Tina Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam a ipsum aspernatur, ipsam repellat sit, neque ullam natus fugiat nesciunt pariatur quae reiciendis alias saepe dolorem aliquam iusto odit laborum!'
  },
  {
    avatar: AVRT3,
    name:'Tina Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam a ipsum aspernatur, ipsam repellat sit, neque ullam natus fugiat nesciunt pariatur quae reiciendis alias saepe dolorem aliquam iusto odit laborum!'
  },
  {
    avatar: AVRT4,
    name:'Tina Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam a ipsum aspernatur, ipsam repellat sit, neque ullam natus fugiat nesciunt pariatur quae reiciendis alias saepe dolorem aliquam iusto odit laborum!'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
       {
         data.map(({avatar, name, review}, index) => {
           return (
            <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar}/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
           )
         })
       }
      </Swiper>
    </section>
  )
}

export default testimonials