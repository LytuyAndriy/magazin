let transport={
host: 'smtp.gmail.com',
tls: { rejectUnauthorized: false },
port: 465,
secure: true, // true for 465, false for other ports
auth:  {
        user: 'lytuyandriy@gmail.com', // generated ethereal user
        pass: 'uckiavkwqryrftwk' // generated ethereal password
    }
}
module.exports=transport;
