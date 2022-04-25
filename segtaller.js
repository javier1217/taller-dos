//const precioOriginal = po ;
//const descuento = des;



function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const vprecio = document.getElementById("price");
    const vp = vprecio.value;

    const vdesc = document.getElementById("discount");
    const vd = vdesc.value;
    
    const precioConDescuento = calcularPrecioConDescuento(vp, vd);
    
    const ResultP = document.getElementById("resulP");

   ResultP.innerText ="El precio con descuento son: $" + precioConDescuento;

}




/*console.log({
    precioOriginal,
    descuento,
    porPrecioConDescuento,
    prcioConDescuento
})
*/