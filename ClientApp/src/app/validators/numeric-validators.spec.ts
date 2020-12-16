import { FormControl } from '@angular/forms';
import { isNotANumberValidator, isNotAWholeNumberValidator } from './numeric-validators';

describe('ValidatorTest', () => {

  let numberControl;

  beforeEach(() => {
      numberControl = new FormControl(
          null,
          [
            isNotANumberValidator,
            isNotAWholeNumberValidator
          ]
      )
  })

  it('Should allow only numeric values', () => {
    numberControl.setValue(123);
    expect(numberControl.valid).toBe(true);
    numberControl.setValue("123");
    expect(numberControl.valid).toBe(true);
    numberControl.setValue(12.3);
    expect(numberControl.valid).toBe(true);
    numberControl.setValue("12.3");
    expect(numberControl.valid).toBe(true);
    numberControl.setValue(null);
    expect(numberControl.valid).toBe(false);
    numberControl.setValue("1-23");
    expect(numberControl.valid).toBe(false);
    numberControl.setValue("");
    expect(numberControl.valid).toBe(false);
    numberControl.setValue("ABC");
    expect(numberControl.valid).toBe(false);
  });

  it('Should allow only whole numeric values', () => {
    numberControl.setValue(123);
    expect(numberControl.valid).toBe(true);
    numberControl.setValue("123");
    expect(numberControl.valid).toBe(true);
    numberControl.setValue(12.3);
    expect(numberControl.valid).toBe(false);
    numberControl.setValue("12.3");
    expect(numberControl.valid).toBe(false);
  });
});
