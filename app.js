const express=require('express')
const mongoose=require('mongoose')
const app=express();

var Shop=require("./model/ShopModel")
var ShoperzRoute=require("./routes/ShoperzRoute")
const bodyparser= require("body-parser");


app.set("view engine","ejs");
app.set("views","./views/");
app.use(express.static("./public"));

mongoose.connect("mongodb+srv://rishika:12345@cluster0.t1ptpxw.mongodb.net/",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(console.log("db connected"))
.catch("error", () => {
  console.log(error);
});


const shopdetails={
    "shop": {
      "name": "Shoperz",
      "location": "123 Main Street, Cityville",
      "contact": {
        "email": "shop@example.com",
        "phone": "123-456-7890"
      },
      "categories": ["Clothing", "Accessories"],
      "opening_hours": {
        "monday": "10:00 AM - 6:00 PM",
        "tuesday": "10:00 AM - 6:00 PM",
        "wednesday": "10:00 AM - 6:00 PM",
        "thursday": "10:00 AM - 6:00 PM",
        "friday": "10:00 AM - 8:00 PM",
        "saturday": "11:00 AM - 8:00 PM",
        "sunday": "11:00 AM - 4:00 PM"
      },
      "website": "https://www.exampleshop.com",
      "social_media": {
        "facebook": "https://www.facebook.com/exampleshop",
        "instagram": "https://www.instagram.com/exampleshop",
        "twitter": "https://www.twitter.com/exampleshop"
      },
      "items": [
        {
          "name": "T-shirt",
          "category": "T-shirt",
          "price": 20.99,
          "description": "A comfortable and stylish cotton T-shirt.",
          "image": "images/tshrt.jpg"
        },
        {
          "name": "Sarees",
          "category": "Sarees",
          "price": 34.99,
          "description": "Sarees with a classic design.",
          "image": "images/saree.jpg"
        },
        {
            "name": "Frocks",
            "category": "Frocks",
            "price": 34.99,
            "description": "Frocks",
            "image": "images/frock.jpg"
          }
      ]
    }
  }

  //we can use express.json and bodyparser parse data
  //express.json and url encoded regognoze incoming req as json object
  //app.use(express.json());
  //app.use(express.urlencoded({extended:true}));


  //bodyparser
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({extended:true}));


  app.use("/api/shop",ShoperzRoute);
 
  var name=shopdetails.shop.name;
  var details= shopdetails.shop.items
  app.get("/",(req,res)=>{
    res.render("Home",{name:name});

  });
  app.get("/home",(req,res)=>{
    res.render("Home",{name:name});

  });
  app.get("/addproduct",(req,res)=>{
    res.render("AddProducts",{name:name});

  });
  // app.get("/products",(req,res)=>{
  //   res.render("Products1",{details});

  // });
  app.get("/login",(req,res)=>{
    res.render("Login",{details});

  });
  app.get("/about",(req,res)=>{
    res.render("AboutUs",{details});

  });

  app.listen(4000, () => {
    console.log("server started on 4000");
  });
  
