import { Food } from './food.model';

describe('Food', () => {
  it('should create an instance', () => {
    expect(new Food("name",2,2,"imageName")).toBeTruthy();
  });
});
