import { Restaurante } from './restaurante.model';

describe('Restaurante', () => {
  it('should create an instance', () => {
    expect(new Restaurante("nameIn",50)).toBeTruthy();
  });
});
