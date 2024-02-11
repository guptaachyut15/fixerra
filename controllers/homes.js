const Home = require("../models/homes");
const { PostHomeSchema, UpdateHomeSchema } = require("../validations/homes");

exports.postHomeDetailsHandler = async (req, res) => {
  let statusCode = 200;
  let status = "success";
  let errorMsg = null;
  try {
    PostHomeSchema.parse(req.body);
    const { area, price, isNegotiable, ownerId } = req.body;
    if (isNegotiable === null) {
      isNegotiable = true;
    }
    await Home.create({ area, price, isNegotiable, ownerId });
  } catch (err) {
    statusCode = 400;
    status = "Failed";
    errorMsg = `Error in posting home details, error:${err}`;
    console.error(errorMsg);
  } finally {
    result = { status: status };
    if (errorMsg) {
      result.error = errorMsg;
    }
    res.status(statusCode).json(result);
  }
};
exports.getAllHomeDetailsHandler = async (req, res) => {
  let statusCode = 200;
  let status = "success";
  details = [];
  try {
    const homes = await Home.find({});
    details = homes;
  } catch (err) {
    statusCode = 400;
    status = "Failed";
    console.error(`Error in fetching all homes details, error:${err}`);
  } finally {
    result = { status: status, details: details };
    res.status(statusCode).json(result);
  }
};
exports.getUniqueHomeDetailsHandler = async (req, res) => {
  let statusCode = 200;
  let status = "success";
  let detail = {};
  try {
    let homeId = req.params.id;
    let homeDetails = await Home.findById(homeId);
    detail = homeDetails;
  } catch (err) {
    statusCode = 400;
    status = "Failed";
    console.error(`Error in fetching home detail, error:${err}`);
  } finally {
    result = { status: status, detail: detail };
    res.status(statusCode).json(result);
  }
};
exports.updateHomeDetailsHandler = async (req, res) => {
  let statusCode = 200;
  let status = "success";
  let errorMsg = null;

  try {
    let homeId = req.params.id;
    let updateDocument = {};
    UpdateHomeSchema.parse(req.body);
    const { isSold, isNegotiable, price, area } = req.body;
    if (isSold != null) {
      updateDocument.isSold = isSold;
    }
    if (isNegotiable != null) {
      updateDocument.isNegotiable = isNegotiable;
    }
    if (price != null) {
      updateDocument.price = price;
    }
    if (area != null) {
      updateDocument.area = area;
    }
    if (updateDocument) {
      await Home.findByIdAndUpdate(homeId, updateDocument);
    }
  } catch (err) {
    statusCode = 400;
    status = "Failed";
    errorMsg = `Error in udpating home detail, error:${err}`;
    console.error(errorMsg);
  } finally {
    result = { status: status };
    if (errorMsg) {
      result.error = errorMsg;
    }
    res.status(statusCode).json(result);
  }
};
