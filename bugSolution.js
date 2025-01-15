```javascript
// Correct usage of $inc operator with error handling
db.collection.updateOne({"_id":ObjectId("someId")},{
  $setOnInsert:{"field":0},
  $inc:{field:value}
});
//alternative solution
db.collection.updateOne({"_id":ObjectId("someId")},{
  $inc:{field:value}
},{
  upsert:true
});
```