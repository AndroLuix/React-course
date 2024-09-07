import React from 'react'


const myStyle = {
  backgroundColor: "DodgerBlue",
  padding: "5px",
  width: '200px', height: '200px',
  margin: 'auto',
};

const Product = ({image, nome, prezzo, childern}) => {
  return (
    <article className="col-md-3 mb-4">
      <div className='card'>
        <img src={image}  className="card-img-top" style={myStyle} />
        <div className="card-body">
          <h6 className="card-title">{nome} Coupon</h6>
          <hr />
          <p className='p-2 '>{childern}</p>
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
