const contenedor_venta = document.querySelector('#venta > div');

function mostrarCards(contenedor, informacion){
    for (let item of informacion){
        console.log(item);
        contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
           <img
             src="${item.src}"
             class="card-img-top"
             alt="Imagen del departamento"
           />
           <div class="card-body">
             <h5 class="card-title">
               ${item.nombre}
             </h5>
             <p class="card-text">
               ${item.descripcion}
             </p>
             <p>
               <i class="fas fa-map-marker-alt"></i> ${item.ubicacion}
             </p>
             <p>
               <i class="fas fa-bed"></i> ${item.habitaciones} Habitaciones |
               <i class="fas fa-bath"></i> ${item.banos} Baños
             </p>
             <p><i class="fas fa-dollar-sign"></i> ${item.costo}</p>

             ${item.smoke ? `<p class="text-success">
                <i class="fas fa-smoking"></i> Permitido fumar
              </p>` : `<p class="text-danger">
              <i class="fas fa-smoking-ban"></i> No se permite fumar
            </p>
              `}
            ${item.pets ? ` <p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
            </p>` : `<p class="text-danger">
            <i class="fas fa-ban"></i> No se permiten mascotas
            </p>
            `}
           </div>
         </div> 
        `;
    }
}

mostrarCards(contenedor_venta, propiedades_venta);