import { useState } from 'react'

function Card({ id, image, info, price, name }) {
  const description = `${info.substring(0, 200)}...`
  const [readmore, setReadmore] = useState(false)

  function readmoreHandler() {
    setReadmore(!readmore)
  }
  return (

      <div className='card'>
        <img src={image} alt='' className='image'></img>

        <div className='tour-details'>
          <h4 className='tour-image'>{price}</h4>
          <h4 className='tour-name'>{name}</h4>
        </div>

        <div className='description'>
          {description}
          <span className='read-more' onClick={readmoreHandler}>
            {readmore ? 'show less' : 'read more'}
          </span>
        </div>
        <button>not interested</button>
      </div>
   
  )
}

export default Card
