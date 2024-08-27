const express = require('express');
const { getDocument, createDocument, editDocument } = require('../controllers/documentController');

router.get('/documents/:id' ,getDocument);
router.post('/documents',createDocument);
router.patch('/documents/:id',editDocument);

module.exports = router;


