// =========================================================
// LA PREFERIDA — animaciones al hacer scroll
// No necesitas tocar este archivo salvo que quieras
// cambiar cómo se revelan los elementos.
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.reveal');

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target); // se anima una sola vez
      }
    });
  }, {
    threshold: 0.15
  });

  elementos.forEach((el) => observador.observe(el));
});
