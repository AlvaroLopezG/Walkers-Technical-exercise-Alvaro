# Walkers-Technical-exercise-Alvaro

## About 
The implementation will use the Angular technology for frontend and C# for any backend
The project will be created using the the "angular" template provided by the .NET CLI (i.e. dotnet new angular) 

## Set-up and run
1. Open the project with Visual Studio
2. Run the project 

#### Note: Make sure To use the "Walkers_Technical_exercise_Alvaro" configuration (not the IIS one)

## Testing angular
1. Open terminal
2. Go to <projectLocation>/ClientApp/src/app
3. Run command "ng test"


## Observations and assumptions 
- For Step 2 point g it says 'Add styling so that "Walkers" is printed in green, and "assessment" in red'. 
  Therefore the acceptance criteria I'm using is:
    - Numbers divisible only by 3 should give "walkers" in normal color
    - Numbers divisible only by 5 should give "assessment" in red color
    - Numbers divisible by 5 and 3 should give "Walkers assessment" with "Walkers" in green and "assessment" in red
- For Step 2 point h it says 'Update the logic, so that if today is Monday, "walkers" is substituted with "walkers-m" and "assessment" is substituted with "assessment-m".'
  Therefore the acceptance criteria I'm using is:
    - Numbers divisible only by 3 should give "walkers-m" on monday and "walkers" in any other day
    - Numbers divisible only by 5 should give "assessment-m" on monday and "assesment" in any other day
    - Numbers divisible by 5 and 3 should give "Walkers assessment-m" on monday and "Walkers assessment" in any other day

#### Note: I'm using the same "logic" for both items, which is that the requirement is refering to the individual words 
#### With that criteria "walkers" can't be found in "Walkers assessment" and can be found in "walkers" 
#### "assessment" can be found in "Walkers assessment" and in "assessment"
#### "Walkers" can be found in "Walkers assessment" and not in "walkers"


## Step 3
In order to make this a RESTful web service, I would create an API that would be in charge of the counting part of the app (untill Step 2 this is done in the helper). 

### API
The angular template already builds the project ready for having an API in the backend, so I would add a controller there and uncomment the lines in the "Startup.cs" that are needed. 

This controller will have 1 endpoint that will receive 1 parameter. 
If the parameter is not valid it would return a 'Bad request' 
If the parameter is valid it would return the string array as a JSON.

For the counting I would do something similar as I did in the Step-2 client. I would have an interface and an implementation of the interface that would be in charge of the counting.
The controller would use this implementation for the calculation of the array and return it. 
For this I created a service and injected in the controller

### Angular Client
In the angular I would change the "helper" so instead of making the count will make a request to the endpoint with the number as a param. 
The method of the class and interface should change so it returns a promise instead of a string array, that way the component can just show the results when ready. 
Of course, tests and component should also be modified as well to adapt to the above

## To use the API
To the right of the text input of the angular app there's a checkbox if you check it the counting will be done in the local helper (just like step 2 and 1) 
If you uncheck it a request will be made to the API





