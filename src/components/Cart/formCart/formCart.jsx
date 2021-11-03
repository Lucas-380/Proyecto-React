import React from 'react'


const FormCart = ({generateOrder, handleOnChange, form}) => {
    return (
        <form onSubmit={ generateOrder } onChange={handleOnChange}>
            <div className="mb-3">
                <label  className="form-label">Nombre</label>
                <input type="text" name='name' className="form-control" value={form.name} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Telefono</label>
                <input type="tel" name='phone' className="form-control" value={form.phone} required/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input id="inputEmail4" type="email" name='email' className="form-control" value={form.email} required/>
            </div>
            <button className="btnFinalizarCompra">Finalizar Compra</button>
        </form>
    )
}

export default FormCart
