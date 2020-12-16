import { HttpClient } from "@angular/common/http";

interface IWalkersAssessmentHelper {
    countTo(valueToCountTo: number): Promise<any>;
}

export class WalkersAssessmentHelperLocal implements IWalkersAssessmentHelper {
    public countTo(valueToCountTo: number): Promise<any> {
        return new Promise(function (resolve, reject) {
            var result = new Array<string>();
            for (let i = 1; i <= valueToCountTo; i++) {
                if (i % 3 == 0 && i % 5 == 0) {
                    result.push("Walkers assessment");
                } else if (i % 3 == 0) {
                    result.push("walkers");
                } else if (i % 5 == 0) {
                    result.push("assessment");
                } else {
                    result.push(i.toString());
                }
            }
            resolve(result);
        })
    }
}

export class WalkersAssessmentHelperAPI implements IWalkersAssessmentHelper {
    constructor(
        private http: HttpClient
    ) { }

    public countTo(valueToCountTo: number): Promise<any> {
        return this.http.get("http://localhost:5000/walkers?number=" + valueToCountTo).toPromise();
    }
}