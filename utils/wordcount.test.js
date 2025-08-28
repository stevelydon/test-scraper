const wordcount = require('./wordcount.js');

test('counts words in example given in email',()=>{
	const count = wordcount("This is - a self-explained example");
	expect(count).toBe(5);
});

test('counts words in empty text', ()=>{
	const count = wordcount("");
	expect(count).toBe(0);
});

test('no text throws TypeError', ()=>{
	expect(wordcount).toThrow(TypeError);
});

test('counts words in custom text 1', ()=>{
	const count = wordcount("This is a more complicated (I think), it's got a few new things");
	expect(count).toBe(13);
});
