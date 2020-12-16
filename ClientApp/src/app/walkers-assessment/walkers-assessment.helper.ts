interface IWalkersAssessmentHelper {
    countTo(valueToCountTo: number) : string[];
}

export class WalkersAssessmentHelper implements IWalkersAssessmentHelper {
    public countTo(valueToCountTo: number) : string[] {
        var result = new Array<string>();
        result.push("dummy");
        return result;
    }
}