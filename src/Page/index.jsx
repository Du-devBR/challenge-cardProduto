import './style.sass'
import sofa from '../assets/img/img-sofa.png'
import gifSofa from '../assets/img/sofa.gif'
import vetor360 from '../assets/img/btn-view.png'
import { useState } from 'react'

export function HomePage(){

  const [changeView, setChangeView] = useState(false)

  function changeButtonView(){
    if(!changeView){
      setChangeView(true)
    }else{
      setChangeView(false)
    }
  }
  return(
    <div className="container">
      <div className="container-product">
        <div className="change-view-product">
          <button
              className={changeView ? 'visibility' : 'button-change-view'}
              onClick={changeButtonView}
              >
                <img src={vetor360} alt="" />
          </button>
          <button
              className={changeView ? 'button-close-view' : 'visibility'}
              onClick={changeButtonView}
              >
          </button>
        </div>
        <img className='img-product' src={changeView ? gifSofa : sofa} alt="" />
      </div>
      <div className="container-info-sofa">
        <span className='code-product'>Codigo</span>
        <h1 className='name-product'>Sofa Margot</h1>
        <span className='price-product'>R$ 4.000</span>
        <button className='btn-add-product-cart'>ADICIONAR À CESTA</button>
      </div>
    </div>
  )
}
