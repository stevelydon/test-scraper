const wordCount = require('./wordCount.js');

test('counts words in example given in email',()=>{
	const count = wordCount("This is - a self-explained example");
	expect(count).toBe(5);
});

test('counts words in empty text', ()=>{
	const count = wordCount("");
	expect(count).toBe(0);
});

test('no text throws TypeError', ()=>{
	expect(wordCount).toThrow(TypeError);
});

test('counts words in custom text 1', ()=>{
	const count = wordCount("This is a more complicated (I think), it's got a few new things");
	expect(count).toBe(13);
});
