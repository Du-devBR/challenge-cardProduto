import './style.sass'
import sofa from '../assets/img/img-sofa.png'

export function HomePage(){
  return(
    <div className="container">
      <div className="container-product">
        <div className="teste">
          <button className='button-change-view'>360°</button>
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
