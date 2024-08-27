//diffService typically refers to a service or a component used to calculate and apply differences (or diffs) between two versions of a document or data structure. This is especially useful in real-time collaborative applications, version control systems, or any system that requires efficient synchronization of data.
/



const diffmatchpatch = require('diff-match-patch');

const dmp = new diffmatchpatch();

const applyPatch = (original, patch) => {
	const patches = dmp.path_fromText(patch);
	const [newContent, results] = dmp.patch_apply(patches,original);

	return { newContent, results };
};

const createPatch = (oldContent,newContent) => {
	const diff = dmp.diff_main(oldContent, newContent);
	dmp.diff_cleanSemantic(diffs);
	return dmp.patch_toText(dmp.patch_make(oldContent, diffs));

};


module.exports =  { applyPatch, createPatch };
