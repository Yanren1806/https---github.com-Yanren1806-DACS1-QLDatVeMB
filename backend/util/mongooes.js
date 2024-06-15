module.exports = {
    // Hàm để chuyển đổi mảng các đối tượng MongoDB thành mảng các plain object
    multipleMongooseToObjects: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },

    // Hàm để chuyển đổi một đối tượng MongoDB thành plain object
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : null;
    }
};
