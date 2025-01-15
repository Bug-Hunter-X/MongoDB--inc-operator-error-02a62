# MongoDB $inc operator bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.
The issue arises when attempting to increment a field that does not exist, resulting in unexpected behavior. This is a common pitfall for developers unfamiliar with the nuances of MongoDB's update operators.
## Bug Description
The provided `bug.js` file contains code that attempts to increment a field using `$inc` without first checking if it exists.  If the field is missing, it will not be created, and the update operation will fail silently or produce unexpected results.
## Bug Solution
The solution in `bugSolution.js` demonstrates the correct way to handle this situation.  It uses the `$setOnInsert` operator to create the field with a default value before incrementing it, or handles the field's absence explicitly.