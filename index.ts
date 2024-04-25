// 36.	T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, message: string):void{
    console.log(`I am providing a ${size} T.shirt with a pretty quote "${message}"`);
}
make_shirt("Small"," Life is a beautiful ride.");
make_shirt("Medium"," Life is a beautiful ride.");
make_shirt("Large"," Life is a beautiful ride.");

//void  use for print not for return