import { Listable } from './listable';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';

describe('SortedListOfImmutables', () => {
  it('should create an instance', () => {
    expect(new SortedListOfImmutables()).toBeTruthy();
  });
});

describe('Agregar item en SortedListOfImmutables', () => {
  let sortedList: SortedListOfImmutables;
  let item1: Listable;
  let item2: Listable;

  
  //Datos de prueba: pizza y pollo como datos de prueba
  beforeEach(() => {
    sortedList = new SortedListOfImmutables();
    item1 = {
      getName: () => 'Pizza',
      getWholesaleCost: () => 10,
      getRetailValue: () => 12,
      equals: (item) => item.getName() === 'Pizza' };
    item2 = {
      getName: () => 'Pollo',
      getWholesaleCost: () => 14, getRetailValue: () => 22,
      equals: (item) => item.getName() === 'Pollo' };
  });

  it('debe agregar un item a la lista vacía', () => {
    // Objetivo: Verificar que se puede agregar un item a una lista vacía
    sortedList.add(item1);
    expect(sortedList.getSize()).toBe(1); //se espera q solo haya un item
    expect(sortedList.get(0)).toBe(item1); //se espera que el item sea el correcto
  });

  it('debe agregar un item en el lugar correcto', () => {
    // Objetivo: Verificar que el item se inserte en el lugar correcto
    sortedList.add(item1);
    sortedList.add(item2);
    expect(sortedList.getSize()).toBe(2);
    expect(sortedList.get(0)).toBe(item1); // 'Pizza' debe estar primero
    expect(sortedList.get(1)).toBe(item2); // 'Pollo' debe estar segundo
  });

});

describe('Borrar item en SortedListOfImmutables', () => {
  let sortedList: SortedListOfImmutables;
  let item1: Listable;
  let item2: Listable;
  
  //Datos de prueba: pizza y pollo como datos de prueba
  beforeEach(() => {
    sortedList = new SortedListOfImmutables();
    item1 = {
      getName: () => 'Pizza',
      getWholesaleCost: () => 13,
      getRetailValue: () => 12,
      equals: (item) => item.getName() === 'Pizza' };
    item2 = {
      getName: () => 'Pollo',
      getWholesaleCost: () => 14,
      getRetailValue: () => 22,
      equals: (item) => item.getName() === 'Pollo' };
    sortedList.add(item1);
    sortedList.add(item2);
  });

  it('Borrar un item de la lista', () => {
    // Objetivo: Verificar que un item se puede eliminar de la lista
    sortedList.remove(item1);
    expect(sortedList.getSize()).toBe(1); // se espera que quede 1 item
    expect(sortedList.get(0)).toBe(item2); // se espera que 'Pollo' debe ser el único item
  });

  it('No debe borrar nada si el item no está en la lista', () => {
    // Objetivo: Verificar que no se elimine un item que no está en la lista
    let item3: Listable;
    item3 = { getName: () => 'Pasta', getWholesaleCost: () => 2, getRetailValue: () => 2, equals: (item) => item.getName() === 'Pasta' };
    sortedList.remove(item3);
    expect(sortedList.getSize()).toBe(2); // La lista debe seguir con 2 items
  });
  
});

describe('Parametrizado. Probar checkAvailability en SortedListOfImmutables', () => {
  let sortedList: SortedListOfImmutables;
  let item1: Listable;
  let item2: Listable;

  // Datos de prueba: pizza y pollo como datos de prueba en la lista
  beforeEach(() => {
    sortedList = new SortedListOfImmutables();
    item1 = { 
      getName: () => 'Pizza', 
      getWholesaleCost: () => 13, 
      getRetailValue: () => 12, 
      equals: (item) => item.getName() === 'Pizza' 
    };
    item2 = { 
      getName: () => 'Pollo', 
      getWholesaleCost: () => 14, 
      getRetailValue: () => 22, 
      equals: (item) => item.getName() === 'Pollo' 
    };
    sortedList.add(item1);
    sortedList.add(item2);
  });

  it('debe verificar la disponibilidad de los items', () => {
    // Objetivo: Verificar que se puedan verificar varios items
    [
      { item: item1, expected: true },  // 'Pizza' debe estar en la lista
      { item: item2, expected: true },  // 'Pollo' debe estar en la lista
      { 
        item: { 
          getName: () => 'Cherry', 
          getWholesaleCost: () => 10, 
          getRetailValue: () => 15, 
          equals: (item: { getName: () => string; }) => item.getName() === 'Cherry' 
        }, 
        expected: false 
      } // 'Cherry' no está en la lista
    ].forEach(({ item, expected }) => {
      expect(sortedList.checkAvailability(item)).toBe(expected);
    });
  });
});

