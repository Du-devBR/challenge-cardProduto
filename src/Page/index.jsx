import './style.sass'
import sofa from '../assets/img/img-sofa.png'
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
        <div className="teste">
          <button
            className='button-change-view'
            onClick={changeButtonView}
            >
            {changeView ? 'X' : '360°'}
        </button>
        </div>
        <img src={sofa} alt="" />
      </div>
      <div className="container-info-sofa">
        <span>Codigo</span>
        <h1>Sofa Margot</h1>
        <span>R$ 4.000</span>
        <button>Adicionar</button>
      </div>
    </div>
  )
}
