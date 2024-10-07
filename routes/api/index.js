var express = require('express');
var router = express.Router();

const userRouter = require('./users');
const planRouter = require('./plans');

const { planController } = require('@/controllers');

// subpaths
router.use('/user', userRouter); // /api/user/*
router.use('/plan', planRouter); // /api/plan/*

// controller assignment
router.post('/getplan/:option', planController.getPlan); // purchase plan
router.patch('/extend-plan/:subscriptionId', planController.extendPlan); // extend plan
router.post('/add/:subscriptionId/:gb', planController.addBandwidth); // add bandwidth
router.post('/del/:subscriptionId/:gb', planController.removeBandwidth); // remove bandwidth
router.get('/info/:subscriptionId', planController.generalInfo); // get general info

module.exports = router;
