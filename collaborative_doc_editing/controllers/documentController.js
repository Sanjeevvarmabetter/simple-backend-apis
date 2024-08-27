const Document = require('../models/Document)';

const { applyPatch, createPatch } = require('../services/diffService');


	

// get a doocument by id



const getDocument = async (req,res) => {
	try {
		const document = await Document.findById(req.params.id);
		res.json(document);
	} catch(err) {
		res.status(404).json({ message: 'Document not found'});
	}
}





// get doc
//
// create doc 
//
//
// edit doc
// 

const createDocument = async (res,res) => {
	try {
		const newDoc = new Document(req.body);
		await newDoc.save();
		res.status(201).json(newDoc);
	} catch(err) {
		res.status(400).json({ message: 'Failed to createv a document'});
	}
};


const editDocument = async (req,res) => {
	try {
		const document = await Document.findById(req.params.id);
		id(!document) {
			return res.status(404).json({message:'Document not found'});

		}

		const { newContent } = req.body;
		const patch = createPatch(document.content,newContent);
     const { newContent: patchedContent } = applyPatch(document.content, patch);

        document.content = patchedContent;
        document.versions.push({ content: patchedContent, timestamp: new Date() });
        await document.save();

        res.json(document);
    } catch (err) {
        res.status(500).json({ message: 'Failed to update document' });
    }
};

module.exports = { getDocument, createDocument, editDocument };

