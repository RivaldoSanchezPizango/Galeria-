import data from './fotos.js'

const { fotos } = data; // desustructuracion

export default { // simulamos un servidor con informacion de las categorias 
  categorias: [
    { id: 'america', nombre: 'America', numeroFotos: fotos['america'].length, imagenPortada: '/Galeria/img/america.jpg' },
    { id: 'europa', nombre: 'Europa', numeroFotos: fotos['europa'].length, imagenPortada: '/Galeria/img/europa.jpg' },
    { id: 'africa', nombre: 'Africa', numeroFotos: fotos['africa'].length, imagenPortada: '/Galeria/img/africa.jpg' },
    { id: 'asia', nombre: 'Asia', numeroFotos: fotos['asia'].length, imagenPortada: '/Galeria/img/asia.jpg' },
    { id: 'oceania', nombre: 'Oceania', numeroFotos: fotos['oceania'].length, imagenPortada: '/Galeria/img/oceania.jpg' },
    { id: 'antartida', nombre: 'Antartida', numeroFotos: fotos['antartida'].length, imagenPortada: '/Galeria/img/antartida.jpg' },
  ]
}