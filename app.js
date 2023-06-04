const express= require("express")
const cors=require("cors")
const bodyParser=require("body-parser")


const sequelize=require("./util/database")
const Restaurant=require("./models/restaurants")
const Review=require("./models/review")
const restaurantRoutes=require("./route/restaurantRoutes")
const reviewRoutes=require("./route/reviewRoutes")
const adminRoutes=require("./route/adminRoutes")

const app=express()

//middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/restaurants', restaurantRoutes);
app.use('/reviews', reviewRoutes);
app.use('/admin', adminRoutes);

Review.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });
Restaurant.hasMany(Review, { foreignKey: 'restaurant_id' });

sequelize.sync()
.then(()=>{
    app.listen(process.env.PORT||3000)
})
.catch((err)=>{
    console.log(err)
})
