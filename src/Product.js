import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const img = "https://th.bing.com/th/id/R.4fa63f127ec1a820b0c95ceb1f88a015?rik=E4mb48miX5RBHQ&pid=ImgRaw&r=0";
const alt = 'alt img';

const prezzo = "14.00";

const Product = () => {
  return (
    <article className="col-md-3 mb-4">
      <div className='card'>
        <img src={img} alt={alt} className="card-img-top" />
        <div className="card-body">
          <h6 className="card-title">10 Euro Coupon</h6>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted">{prezzo} €</span>
            <button className="btn btn-primary">Acquista</button>
          </div>
        </div>
      </div>
    </article>
  )
}


export default Product
