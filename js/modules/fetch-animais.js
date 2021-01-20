import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Creates a div containing animal api information
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  // Fill each animal in the DOM
  const sectionNumeros = document.querySelector(target);

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    sectionNumeros.appendChild(divAnimal);
  }

  function animaAnimaisNumero() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Pull the animals through a json file
  // and create each animal using the createAnimal function
  async function criarAnimais() {
    try {
      const animaisJSON = await (await fetch(url)).json();

      animaisJSON.forEach((animal) => preencherAnimais(animal));

      animaAnimaisNumero();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  return criarAnimais();
}
