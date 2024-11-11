/**
 * Varias pequeñas utilidades para este proyecto.
 *
 * NOTA: Estas NO son genéricas y no deben copiarse
 * a otros proyectos. Son implementaciones rápidas e imperfectas
 * para los datos conocidos y fijos con los que trabajamos aquí.
 */
import differenceInDays from "date-fns/differenceInDays";

export function formatPrice(price) {
  return `$${price / 100}`;
}

export function pluralize(string, num) {
  return num === 1 ? `1 ${string}` : `${num} ${string}s`;
}

export function isNewShoe(releaseDate) {
  return differenceInDays(new Date(), releaseDate) < 30;
}
