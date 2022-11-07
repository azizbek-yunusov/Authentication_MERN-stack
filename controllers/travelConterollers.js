const TravelModel = require("../models/Travel.model");

const getAllTravels = async (req, res) => {
  try {
    const travels = await TravelModel.find();
    // frontendga jo'natish
    res.status(200).json({
      message: "ok",
      travels: travels.reverse(),
    });
  } catch (err) {
    console.log(err);
  }
};

const getTravelById = async (req, res) => {
  try {
    const travel = await TravelModel.findById(req.params.id);
    // agar topilmasa
    if (!travel) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "ok",
      travel: travel,
    });
  } catch (err) {
    console.log(err);
  }
};

const addTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;

    const newTravel = TravelModel.create({
      title,
      image,
      descr,
    });

    res.status(201).json({
      message: "ok",
      newTravel: newTravel,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;

    const updatedTravel = await TravelModel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      descr
    })

    res.status(200).json({
      message: "ok",
      updatedTravel: updatedTravel,
    });
  } catch (err) {
    console.log(err);
  }
};
//remove
const removeTravelBook = async (req, res) => {
  try {
    await TravelModel.findByIdAndRemove(req.params.id, )
    res.status(200).json({
      message: "deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removeTravelBook,
};
