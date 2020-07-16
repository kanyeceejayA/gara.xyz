const express = require('express');

const router = express.Router();

const path = require('path');
// const passport = require('passport');
// const Employee = require('../models/supervisorRegModel');
// const Customer = require('../models/custRegModel');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', '/template.html'));
});

router.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', '/dashboard.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', '/logIn.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', '/signUp.html'));
});

router.get('/checklists', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', '/checkLists.html'));
});

// router.post('/', (req, res) => {
//   passport.authenticate('local', (err, user, info) => {
//     console.log('body comming to passport ', req.body);

//     if (err) {
//       return next(err);
//     }
//     if (!user) return res.redirect(`/?info=${info}`);

//     req.logIn(user, (err) => {
//       if (err) return next(err);
//       return res.redirect('/supervisor');
//     });
//   })(req, res);
// });

// router.get('/test', (req, res) => {
//   res.render('userUpdate');
// });

// router.post('/custreg', async (req, res) => {
//   try {
//     const newCustomer = new Customer(req.body);
//     await newCustomer.save();
//     res.redirect('/supervisor');
//   } catch (error) {
//     console.log(error);
//     res.status(404).send('unable to send to the database');
//   }
// });

// router.post('/employeereg', async (req, res) => {
//   try {
//     const newEmployee = new Employee(req.body);
//     await Employee.register(newEmployee, req.body.password, (err) => {
//       if (err) throw err;
//       res.redirect('/admin');
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(404).send('unable to send to the database');
//   }
// });

// router.get('/custreg', (req, res) => {
//   res.sendFile(path.join(__dirname, '../views', '/custreg.html'));
// });

// router.get('/employeereg', (req, res) => {
//   res.sendFile(path.join(__dirname, '../views', '/employeereg.html'));
// });

// router.get('/admin', async (req, res) => {
//   const userlist = await Employee.find();
//   res.render('admin', {
//     employees: userlist,
//   });
// });

// router.get('/supervisor', async (req, res) => {
//   const userlist = await Customer.find();
//   res.render('supervisor', {
//     customers: userlist,
//   });
// });

// // Delete Route Code
// router.post('/delete', async (req, res) => {
//   try {
//     await Customer.deleteOne({
//       _id: req.body.id,
//     });
//     res.redirect('back');
//   } catch (error) {
//     res.status(400).send('unable to delete from database');
//   }
// });

// router.post('/updating', async (req, res) => {
//   try {
//     const userItem = await Customer.findById(req.body.id);
//     res.render('userUpdate', {
//       user: userItem,
//     });
//   } catch {
//     res.status(500).send('unable to find item in the database');
//   }
// });

// // update
// router.post('/update', async (req, res) => {
//   try {
//     const updateduser = await Customer.findOneAndUpdate({
//       firstname: req.body.firstname,
//     }, req.body);
//     res.redirect('/supervisor');
//   } catch (error) {
//     res.status(400).send('unable to update to database');
//   }
// });

// // Delete Route Code
// router.post('/deletee', async (req, res) => {
//   try {
//     await Employee.deleteOne({
//       _id: req.body.id,
//     });
//     res.redirect('back');
//   } catch (error) {
//     res.status(400).send('unable to delete from database');
//   }
// });

// router.post('/updatings', async (req, res) => {
//   try {
//     const userItem = await Employee.findById(req.body.id);
//     res.render('employeeUpdate', {
//       user: userItem,
//     });
//   } catch {
//     res.status(500).send('unable to find item in the database');
//   }
// });

// // update
// router.post('/updates', async (req, res) => {
//   try {
//     const updateduser = await Employee.findOneAndUpdate({
//       firstname: req.body.firstname,
//     }, req.body);
//     updateuser.save();
//     res.redirect('/admin');
//   } catch (error) {
//     // res.status(400).send("unable to update to database");
//     res.status(400).redirect('/admin');
//   }
// });

module.exports = router;
