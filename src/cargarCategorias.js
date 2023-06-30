import dataCategorias from './datos/categorias'
const { categorias } = dataCategorias;  // destructuramos y extraemos las categorias

const contenedorCategorias = document.getElementById('categorias'); // accedemos al arreglo de categorias

categorias.forEach((categoria) => {
  const nuevaCategoria = document.createElement('a');
  const plantilla = `
  <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
  <div class="categoria__datos">
    <p class="categoria__nombre">${categoria.nombre}</p>
    <p class="categoria__numero-fotos">${categoria.numeroFotos} imagenes</p>
  </div>
  `;
  // creamos los atributos
  nuevaCategoria.innerHTML = plantilla;
  nuevaCategoria.classList.add('categoria');
  nuevaCategoria.href = '#';
  nuevaCategoria.dataset.categoria = categoria.id;

  contenedorCategorias.append(nuevaCategoria) // agregamos la nueva categoria que creamos
})
