```javascript
// Incorrect usage of $inc operator in MongoDB update operation.
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});
```