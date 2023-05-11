
let text=fs.readFileSync("addy.txt","utf-8");
text=text.replace("for","God to");

console.log("Content of file is :");
console.log(text);

console.log("Creating new file.....");
fs.writeFileSync("Aditya.txt",text);

// self modules, third module, computer modules