const fs = require('fs');
const path = require('path');


module.exports ={

    upload: (req, res) => {
        const file = req.files.image;
        console.log("file", req.body.id)
        const maxFileSize = 5 * 1024 * 1024; // 5 MB
        const allowedTypes = [
          'image/jpeg',
          'image/gif',
          'image/jpg',
          'image/png'
        ];
    
        if (!allowedTypes.includes(file.mimetype)) {
          return res.status(400).send({
            error: true,
            message: 'Bad request. File type is not allowed.'
          });
        }
    
        if (file.size > maxFileSize) {
          return res.status(400).send({
            error: true,
            message: 'Bad request. File size exceeds the allowed limit.'
          });
        }
    
        const uploadsDirectory = path.join(__dirname, '..', 'uploads');
        if (!fs.existsSync(uploadsDirectory)) {
          fs.mkdirSync(uploadsDirectory);
        }
    
        const storageDirectory = path.join(__dirname, '..', 'uploads', req.body.id);
        if (!fs.existsSync(storageDirectory)) {
          fs.mkdirSync(storageDirectory);
        }
    
        const fileName = `${req.body.id}_${file.name}`;
    
        file.mv(`${storageDirectory}/${fileName}`);
    
        res.status(201).send({
          error: false,
          message: `File with name ${fileName} is uploaded successfully!`
        });
      },
}