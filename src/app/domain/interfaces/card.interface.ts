/**
 * Detalle de las card
 */
export interface Card {
  nameProduct: string;
  numberProduct: string;
  balanceProduct: string;
  detaildProduct: string;
}

/**
 * Datos de la respuesta del servicio
 */
export interface CardList {
  listCard: Card[];
}
