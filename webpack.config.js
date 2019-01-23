var path = require('path');

module.exports = {
    entry: './views/calendar.js',
    output: {                                   //transpiled of the script.js
        path: path.join(__dirname, 'public'),
        filename: 'transpiled-calendar.js'  
    },
    
    module: {
        rules: [                              //basically pass our script.js file into babel will then create a new transpiled js file
            { 
                test: /\.js$/,
                loader: 'babel-loader',  
                exclude: /node_modules/, 
                options:{
                    presets:['@babel/preset-env','@babel/preset-react']                    //retelling babel what it has to reacts to
                } 
            },
            
            
           
            {
                test:/\.css$/,
                loader:"style-loader",
            },
            
            
            
            {
                test:/\.css$/,
                loader: "css-loader",
                options:{
                    //importLoaders: 1,
                    modules:true,                                               //turns on CSS modules
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            
  
            
        ]
    },
   
}