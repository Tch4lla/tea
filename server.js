const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea ={
    'oolong':{
        'type':'black',
        'origin':'Over there',
        'waterTemp': 200,
        'steepTimeSeconds':180,
        'caffinated': true,
        'flavor': 'delicious'

    },
    'unknown':{
        'type':'unknown',
        'origin':'Over here',
        'waterTemp': 0,
        'steepTimeSeconds':0,
        'caffinated': false,
        'flavor': 'unknown'
    },
    'matcha':{
        'type':'green',
        'origin':'Over here',
        'waterTemp': 300,
        'steepTimeSeconds':20,
        'caffinated': false,
        'flavor': 'deliciou'
    }
}

app.get('/',(request,response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
   
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The port is running on port ${PORT}`)
})