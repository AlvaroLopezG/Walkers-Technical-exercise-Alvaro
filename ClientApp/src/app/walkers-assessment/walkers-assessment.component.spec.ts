import { WalkersAssessmentHelper } from './walkers-assessment.helper';

describe('WalkersAssessmentHelper', () => {

  const walkersAssessmentHelper = new WalkersAssessmentHelper();

  it('Should return "Walkers" if divisible by 3, "assessment" if divisible by 5 and "Walkers assessment" if divisible by both', () => {
    var expected = ["1", "2", "Walkers", "4", "assessment", "Walkers", "7", "8", "Walkers", "assessment", "11", "Walkers", "13", "14", "Walkers assessment", "16"];
    var result = walkersAssessmentHelper.countTo(16);
    expect(result).toEqual(expected);
  });
});
