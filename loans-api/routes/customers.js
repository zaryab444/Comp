var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 

const customerModel = require('../models/customers.model');

/* GET All customers. */
router.get('/list', function(req, res, next) {
      
  customerModel.find(function(err,   customerListResponse){
    if(err){
      res.send({status: 500, message:'Unable to Find customer'});
  
    }
    else{
      const recordCount = customerListResponse.length;
      res.send({status: 200,recordCount:recordCount, results: customerListResponse});
    }
  });


});


/* GET Detail of a specific customers. */
// go to postman and go to params tab write userId and paste id value and hit api
// http://localhost:3000/customers/view/
router.get('/view/:id', function(req, res, next) {

  const id = req.params.id;
      
  customerModel.findById(id,function(err,   customerResponse){
    if(err){
      res.send({status: 500, message:'Unable to Find customer'});
  
    }
    else{
      res.send({status: 200, results: customerResponse});
    }
  });


});

// bookRoute.route('/read-book/:id').get((req, res) => {
//   Book.findById(req.params.id, (error, data) => {
//   if (error) {
//     return next(error)
//   } else {
//     res.json(data)
//   }
// })
// })



/* Create New Customer. */
//http://localhost:3000/customers/add
router.post('/add', function(req, res, next) {

  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let emailAddress = req.body.emailAddress;
  let phoneNumber = req.body.phoneNumber;
  let dob = req.body.dob;
  let department = req.body.department;

  
  let customerObj = new customerModel({
       
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    dob: dob,
    department: department
  });

 customerObj.save(function(err,customerObj){
  if(err){
    res.send({status: 500, message:'Unable to add customer'});

  }
  else{
    res.send({status: 200, message:'User add successfully', customerDetails: customerObj});
  }
 });
  
});

/* Update existing customer. */
// http://localhost:3000/customers/update
// go to body and type userId : 54545
// and then paste all userfield and then update
router.put('/update', function(req, res, next) {
  
  const userId = req.body.userId;

  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let emailAddress = req.body.emailAddress;
  let phoneNumber = req.body.phoneNumber;
  let dob = req.body.dob;
  let department = req.body.department;

  
  let customerObj = {
       
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    phoneNumber: phoneNumber,
    dob: dob,
    department: department
  };
      
  customerModel.findByIdAndUpdate(userId,customerObj,function(err,   customerResponse){
    if(err){
      res.send({status: 500, message:'Unable to update customer'});
  
    }
    else{
      res.send({status: 200,message:'user updated successfully', 
        results: customerObj});
    }
  });


});

/* Delete existing customer. */
router.delete('/delete', function(req, res, next) {
  const userId = req.query.userId;
      
  customerModel.findByIdAndDelete(userId,function(err,   customerResponse){
    if(err){
      res.send({status: 500, message:'Unable to Delete customer'});
  
    }
    else{
      res.send({status: 200, results: customerResponse,  message:'user deleted successfully'});
    }
  });
});

/* Delete multiple customer. */
router.delete('/delete-multiple', function(req, res, next) {
  const userId = req.query.userId;
      
  customerModel.deleteMany({'firstName':'Markyyyy'},function(err,   customerResponse){
    if(err){
      res.send({status: 500, message:'Unable to Delete customer'});
  
    }
    else{
      res.send({status: 200,   message:'user deleted successfully'});
    }
  });
});




/* Search existing customer. */
router.get('/search', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
