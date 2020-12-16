import { WalkersAssessmentHelperLocal } from './walkers-assessment.helper';

describe('WalkersAssessmentHelper', () => {

  const walkersAssessmentHelper = new WalkersAssessmentHelperLocal();

  it('Should return "walkers" if divisible by 3, "assessment" if divisible by 5 and "Walkers assessment" if divisible by both', () => {
    var expected = ["1", "2", "walkers", "4", "assessment", "walkers", "7", "8", "walkers", "assessment", "11", "walkers", "13", "14", "Walkers assessment", "16"];
    walkersAssessmentHelper.countTo(16)
    .then(result => {
      expect(result).toEqual(expected);
    });
  });
});
