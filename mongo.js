
// 1. Academic Records Schema:

// db.createCollection("academic_records")
// {
   
//   student_id: Number, 
//   name: String, 
//   grades: { 
//     subject1: Number,
//     subject2: Number,
//   },
//   subjects: [String], 
// }
// 2. Co-Curricular Activities Schema:

// db.createCollection("co_curricular_activities")
// {
//   student_id: Number, 
//   name: String, 
//   activity_type: String, 
//   duration: String, 
//   achievements: [String], 
// }

// Insert data into "academic_records":

// db.academic_records.insertOne({
//   student_id: 10,
//   name: "Abhi",
//   grades: {
//     subject1: 85,
//     subject2: 90,
//     subject3: 78
//   },
//   subjects: ["Math", "Science", "English"]
// });

//  Insert data into "co_curricular_activities":

// db.co_curricular_activities.insertOne({
//   student_id: 10,
//   name: "Abhi", 
//   activity_type: "Sports",
//   duration: "2 years",
//   achievements: ["Team Captain", "Regional Championship"]
// });

// Testing CRUD Operations
// 1. Find all documents:
//   db.academic_records.find()
//   db.co_curricular_activities.find()

// 2. Find specific documents:

//     db.academic_records.find({ student_id: 10 })
//     db.co_curricular_activities.find({ activity_type: "Sports" })

// 3. Update a document:

//    db.academic_records.updateOne({ student_id: 10}, { $set: { "grades.subject1": 92 } })
//    db.co_curricular_activities.updateOne({ student_id: 10 }, { $push: { achievements: "National Award" } })

// 4. Delete a document:

// db.academic_records.deleteOne({ student_id: 10 })
// db.co_curricular_activities.deleteOne({ student_id: 10 })