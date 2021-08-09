# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.

onClick fires
the addOne function fires and returns an object
dispatch takes that object and gives it to the reducer
the reducer finds the correct case in its switch
the reducer copies the correct state and increases the total by one
the new total is passed into TotalDisplay

* TotalDisplay shows the total plus 1.
