interface IWalkersAssessmentHelper {
    countTo(valueToCountTo: number) : string[];
}

export class WalkersAssessmentHelper implements IWalkersAssessmentHelper {
    public countTo(valueToCountTo: number) : string[] {
        var result = new Array<string>();
        for(let i = 1; i<= valueToCountTo; i++) {
            if(i % 3 == 0 && i % 5 == 0) {
                result.push("Walkers assessment");
            } else if(i % 3 == 0) {
                result.push("Walkers");
            } else if(i % 5 == 0) {
                result.push("assessment");
            } else {
                result.push(i.toString());
            }
        }
        return result;
    }
}