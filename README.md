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