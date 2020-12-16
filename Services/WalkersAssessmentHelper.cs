using System;

namespace Walkers_Technical_exercise_Alvaro.Services 
{
    public class WalkersAssessmentHelper : IWalkersAssessmentHelper
    {
        public string[] CountTo(int valueToCountTo) {
            var result = new string[valueToCountTo];
            for (int i = 1; i <= valueToCountTo; i++) {
                string valueToAdd = i.ToString();
                if (i % 5 == 0 && i % 3 == 0) {
                    valueToAdd = "Walkers assessment";
                } else if (i % 3 == 0) {
                    valueToAdd = "walkers";
                } else if (i % 5 == 0) { 
                    valueToAdd = "assessment";
                }
                result[i - 1] = valueToAdd;
            }
            return result;
        }
    }
}