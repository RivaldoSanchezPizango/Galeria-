import data from '../datos/fotos'

const galeria = document.getElementById('galeria');

const cargarImagen = (id, nombre, ruta, descripcion) => {
  //CAMBIAMOS LA RUTA, ID, NOMBRE Y DESCRIPCION DE LA IMAGEN ACTIVA 
  galeria.querySelector('.galeria__imagen').src = ruta;
  galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
  galeria.querySelector('.galeria__titulo').innerText = nombre;
  galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

  const categoriaAtual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaAtual];

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === id) {
      indexImagenActual = index;
    }
  });

  // MARCAMOS LA IMAGEN DEL CAROUSEL COMO ACTIVA
  if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {
    //ELIMINAMOS LA CLASE ACTIVE DE CUALQUIER SLIDE
    galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
    galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
  }
};


//--- CARGAR ANTERIOR Y SIGUIENTE IMAGEN
const cargarAnteriorSiguiente = (direccion) => {
  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];
  const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === idImagenActual) {
      indexImagenActual = index;
    }
  })

  if (direccion === 'siguiente') {
    if (fotos[indexImagenActual + 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  } else if (direccion === 'anterior') {
    if (fotos[indexImagenActual - 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  }
}


export { cargarImagen, cargarAnteriorSiguiente };