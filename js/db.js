db.collection ("microgreens").onSnaphsot((snapshot)=>{
    console.log(snapshot.docChanges());
})