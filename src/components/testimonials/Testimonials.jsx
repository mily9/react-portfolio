import React from 'react'
import "./testimonials.css"
import AVRT1 from '../../assets/avatar1.jpg'
import AVRT2 from '../../assets/avatar2.jpg'
import AVRT3 from '../../assets/avatar3.jpg'
import AVRT4 from '../../assets/avatar4.jpg'



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

      <div className='container testimonials__container'>
       {
         data.map(({avatar, name, review}, index) => {
           return (
            <article key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar}/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default testimonials