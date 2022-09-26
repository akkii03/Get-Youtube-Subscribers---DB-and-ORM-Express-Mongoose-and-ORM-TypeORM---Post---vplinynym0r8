
const express = require('express');
const app = express()
const susbcriberSchema = require('./models/subscribers');

app.get("/subscribers",async(req,res)=>{
   const user = await susbcriberSchema.find();
   res.send(user);
});

app.get("/subscribers/names",async(req,res)=>{
    const user = await susbcriberSchema.find();
    let array = [];
   await user.map((item)=>{
        array = [...array,{name:item.name,subscribedChannel:item.subscribedChannel}]
    });
    res.send(array);
 });



app.get("/subscribers/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await susbcriberSchema.findOne({ _id: id });
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }

});

// Your code goes here

module.exports = app;
