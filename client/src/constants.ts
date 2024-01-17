export const JLOX_SPEC = `
// https://github.com/daaashley/lox-interpreter

//            /$$                    
//           | $$                    
//        /$$| $$  /$$$$$$  /$$   /$$
//       |__/| $$ /$$__  $$|  $$ /$$/
//        /$$| $$| $$   $$   $$$$/ 
//       | $$| $$| $$  | $$  >$$  $$ 
//       | $$| $$|  $$$$$$/ /$$/  $$
//       | $$|__/ ______/ |__/  __/
//  /$$  | $$                        
// |  $$$$$$/                        
//  ______/                         
                                  
//////////////////////////////////////////////////////////

// Lox is a dynamically-typed object oriented programming 
// language with C family syntax created by Robert Nystrom. 
// It's implementation is provided in his book Crafting 
// Interpreters. JLOX is the Java runtime implementation of
// the interpreter. Presented here is a version of JLOX I 
// developed over the course of several months, and may not 
// precisely reflect its original implementation and spec, 
// although it is close. The implementation is a tree-walk 
// interpreter meaning parsing, static analysis, and the 
// resulting abstract syntax tree are directly translated 
// and executed by Java code running on the JVM. Below you 
// will find a non-exhaustive technical specification of the 
// language with code examples to use in the editor. Enjoy!

// Tests and demonstrates block scoping.
 
 var a = 3;
 {
  var a = 2;
    var b = 1;
  {
    print a + b;
  }
}

// Tests basic function with parameters.

fun sayHi(first, last) {
  print "Hi, " + first + " " + last + "!";
}

sayHi("Dear", "Reader");



// Tests class methods and attributes.

class Bacon {   
  eat() {    
    print this.person + " is eating Bacon. Crunch crunch crunch!";  
    } 
} 

var bacon = Bacon();
bacon.person = "David";
bacon.eat();

// Tests Single Inheritance and sub/superclass chain.

class Boy {
  speak() {
    print "I am a boy.";
  }
}

class David < Boy {
  speak() {
    print "My name is David.";
    super.speak();
  }
}

David().speak();`

export const JLOX_FIBONACCI = `fun fibonacci(n) { 
  if(n < 2) { 
    return 1; 
  } else { 
    return fibonacci(n-2) + fibonacci(n-1); 
  } 
} 

var n = 31;

print "The " + n +"th fibonacci number is: " + fibonacci(n);`

export const JLOX_INHERITANCE = `
// Tests Single Inheritance and sub/superclass chain.

class Boy {
  speak() {
    print "I am a boy.";
  }
}

class David < Boy {
  speak() {
    print "My name is David.";
    super.speak();
  }
}

David().speak();`

export const POSTS = [{ id:'1',author:'David',title: 'Building The Lox Interpreter', date: 1705205782000, 
imageUrl: 'https://lukemerrick.com/posts/static/julox/crafting_interpreters_mountain_edited.png', 
body: `
So you wake up one day and decide you want to build an interpreter?
<br/><br/>
 In an attempt to dive deeper into the fundamentals of computing and computer languages, I was fortunate to stumble across Robert Nystrom’s <a>Crafting Interpreters</a>. Prior to this book, I purchased Terrence Parr’s Language Implementation Patterns, a resource aimed at providing broader strokes around design patterns generally in the language world. I began working through the text and was able to establish the bare bones of a working recursive descent parser. After further progress, I found the book to be a little grandiose in scope and I abandoned the effort altogether. 
 <br/><br/>
Upon opening Crafting Interpreters some time later, my spark to write a language reignited as the book seemed to lay out a palpable route toward writing a grammar that rose to the bar of being Turing-complete, and presumably quite a bit higher. The text set forth a guide in building a toy language called Lox, detailing the specific grammar and conventions we would be compiling from source. 
<br/><br/>
Lox is a dynamically-typed object oriented programming language with roots in C. Basically, it looks a lot like JavaScript but is classically object oriented—it does not use <a>prototypal inheritance</a>. An example of the syntax below:
<br/><br/>
<snippet>2ef5e243d7952a47740916f66e9018a2</snippet>
<br/><br/>
Lox is complete with logical expressions, operators, data types, classes, objects, attributes, properties, block scoping, inheritance, and many of the other standard features one would expect in a general-purpose computing language. 
<br/><br/>
After laying out the language spec, the book starts by building the lexer. This is the part of the program that decomposes source code word by word into an array of ordered tokens that are assigned a token value 
<br/><br/>
<snippet>43909f211f3484c5cc8021421e7600c3</snippet>
<br/><br/>
so that the next steps of our interpreter will be able to identify and recognize a standard set of source code inputs, that it can then organize, translate, and interpret. Once the source code is tokenized, we can pass our tokens into the parser. The parser takes our tokens and parses them into an intermediate representation, in this case, an abstract syntax tree (AST). The job of the parser is to arrange the input tokens into a data structure that maintains an order of execution that is meaningful and related to the manner in which they were written, like in the tree below
<br/><br/>
<img>https://ruslanspivak.com/lsbasi-part7/lsbasi_part7_ast_01.png</img>
<br/><br/>
We can represent 2 * 7 + 3 in the following tree as an ‘expression’. In the above AST, the rules of an binary expression dictate that we can have two ‘terms’, left-hand side (LHS) and a right-hand side(RHS) and an mathematical ‘operator’ performing some arithmetic between the two resolved terms. The ‘terms’ are composed of ‘factors’ that are purely arithmetic, not involving other expression that you will have to resolve further. As you add more syntax to your language, this can all get very complicated, especially if you plan on building a compiler/interpreter that needs to recursively descend the tree according to your languages rules. At this point, we take a step back and visit computer science theory to aid in the building of our program. 
<br/><br/>
The book introduces <a>Backus-Naur form</a>, a notation invented by computer scientists used to describe the syntax of programming and formal languages. We can’t just write a set of switch statements to handle every conceivable combination of valid grammar that a programmer might type in as source code for the language we end up defining. There are an infinite number of valid strings that could be passed through our grammar rules, so we use Backus-Naur notation to cleanly represent our grammar and all strings it will allow. An example from a portion of the Backus-Naur form of the Lox grammar can be seen below.
<br/><br/>
<img>./factor.png</img>
<br/><br/>
In our grammar, the above rules (comparison, term, factor, etc.) are known as productions. A production can be a terminal value, or a non-terminal value. A terminal value is a value which stops the recursive descent, it is the last stop in the branch of the tree. A string literal, number, or true\false value in the primary production, for example, would all be terminal values. These are tokens that can be decomposed no further and are returned up the recursion tree as the terminal value. A non-terminal value could be a factor, unary, or a function call. These are productions that are composed of other productions, that we can recursively parse further. 
<br/><br/>
A factor, for example, will contain either a division or multiplication operator. We know that in programming, we don’t always just multiply and divide number literals, but often number literals that are the result of function calls, represented as variables, or numbers that have additional notation such as a minus. If we parse in the three tokens 2 * 7 our parser starts at the top of the above grammar first checking if it is a comparison, a term, then a factor. It will eventually do an operator check within the factor function, recognize the STAR(*), and start parsing for unary expressions on both sides of the operator.
<br/><br/>
<snippet>447ff3aa906790de1b1f580565e1a917</snippet>
<br/><br/>
The LHS is expr which we recursively parse further starting with a check of the unary() production. We call previous() to get the most recently parsed token to get the operator string, and the right variable is the result of the unary() call for the RHS.
<br/><br/>
<img>./unary.png</img>
<br/><br/> 
We observe that the factor production above (unary (( “/” | “*”) unary )*;) mirrors the factor() parser function perfectly. In fact, every function we end up writing in the Lox program mirrors its Backus-Naur equivalent identically in this way. Don’t believe it? Take the unary parsing method for example
<br/><br/>
<snippet>8ab032295e2492469e74b68ddde163c0</snippet>
<br/><br/>
First we match for a BANG* or MINUS- operator, consume that operator through a call to previous(), then we recursively parse the RHS of the expression in right. Notice we also have ‘| call’ in the production rule. This means ‘or function call’ and is there because a unary operator can be placed next to another unary(think !!false for example), which could resolve to another arithmetic operation, another unary operator, or a function call. That is to say the expression ‘!isTruthy()’ is a valid unary expression. We have a unary operator BANG, and a function call after it that ultimately resolves to a true/false value through our recursive call to unary(), the RHS value, right. Once all sides of the tree have been resolved, we return the resulting expression up to the top of the syntax tree.
<br/><br/>
Yes, this can take a minute to wrap your head around, but after writing a few of these top-down parsing functions that mirror the grammar, the nascent pattern appears and its like “oh yeah this is definitely how I would do this”. This is known as a top-down parser. There exist bottom-up parsers as well, but we won’t get into that here. There are even parser generator programs that spit out fully functioning parsers for you based on a grammar language you supply. This is how universal this pattern is—it will work for most languages.
<br/><br/>
If we take a look at Lox.java which contains our main method and starting point for the interpreter, we can see the run function.
<br/><br/>
<snippet>ba4c9189939f3d682da477df2230b756</snippet>
<br/><br/>
We see first the lexer scans in tokens as the Scanner. Once tokenized, the parser takes the tokens, runs the parser() method, and returns statements into a list as they resolve up the parse tree. The third step in the interpreter is environment resolution. The primary task of the resolver is to discover and assign memory space for the various execution contexts of our program.
<br/><br/>
<snippet>d4dfa9e1793658747651cc1a39fbf0d4</snippet>
<br/><br/>
In our resolver class, we establish a Stack of <String, Boolean> Maps in order to keep track of our execution scopes. If we enter a function declaration in our program during resolution, a map is pushed onto the stack with a string identifying the lexeme it refers to, and a Boolean set to false, so that we know we are not done resolving all possible variables for the current scope. Once the parameters and body of the function have resolved all variables and context, the mapped Boolean is set to true, and the resolver continues through the rest of the statements. Resolver.java and the various resolution types can be explored further if you would like more detail on the inner workings of variable namespacing and resolution.
<br/><br/>
Now that our scopes have been established and passed to the interpreter, we call interpreter.interpret(statements) to actually execute the expressions and statements that we have created in our parser and added environment context to in our resolver. 
<br/><br/>
Before we move forward, we should probably take a look at the architecture of our program, so that the interpreter and how it works makes a little bit more sense. The book has you implement the visitor design pattern. The visitor pattern is employed here to reduce the amount of code we write and to simplify the shared interface of our token types across all classes in the interpreter. We achieve this by using an abstract class to define all Expression and Statement token types, with one universal interface.  
<br/><br/>
<snippet>2070bc0c696f9b717e78f7c094e6ee2f</snippet>
<br/><br/>
Take the case of the Assign expression above. We define a variable assignment expression to have an interface requiring a name and a value of a certain static type. These are the only things this shared Assign definition will have in common throughout our classes. Our abstract method, the accept(Visitor<R> vistor) method, is defined such that we can override the inner visitor method that it encapsulates. The visitAssignExpr method can now be overridden using the @Override decorator across our program. We in fact do override and this method in both our resolver as well as the interpreter.
<br/><br/>
<snippet>616400be86f7c4a07026af525f223ce2</snippet>
<br/><br/>
In the resolver, we handle a variable assignment like ‘var isFinished = false;’ by first resolving the value false that we are trying to store, and then resolveLocal adds the expression name isFinished, to the local variables scope which ends up getting passed to the interpreter so that we can know what variables sit where during execution time. This is a brief look at how scopes are defined in our resolver. To show further the behavior of our visitor pattern we can look at the resolve() function called above.  
<br/><br/>
<snippet>202de23c62896e665539f07a29cef7f4</snippet>
<br/><br/>
Resolve in this case calls our abstract classes accept method on our expression that we need to resolve further. Doesn’t this look familiar? That’s right, this is similar to our recursive descent pattern in our parser, only instead of decomposing grammar down the tree, we are decomposing syntax for the purpose of variable resolution. The accept method calls the correctly overridden method, based on our Expr type and the ‘this’ which refers to the current class that the method is being overridden in. At this point I feel I might be losing most of you as I fail to explain this in a better way. I would go take a look at Resolver.java and Interpreter.java and how each make use of our abstract class methods in Expr.java and Stmt.java.
<br/><br/>
 Anyways, if our expr.value we passed to resolve which gets its accept method called ends up being a unary expression, for example, then it will call the Resolver.java unary overridden method which looks like this:
 <br/><br/>
<snippet>ea696bd6bd2e7701496c709f576ca0c5</snippet>
<br/><br/>
We resolve the RHS of the unary for anything else that might be of interest to our scope resolution, but return null for the unary, since a unary expression itself is of no consequence to our later execution scopes.
<br/><br/>
At this point our visitor pattern chain looks like the following:
<br/><br/>
visitAssignExpr() -> resolve(expr.value) -> expr.value.accept(Resolver) -> visitUnaryExpr(expr) -> resolver() … 	
<br/><br/>
The accept method does the heavy lifting of making sure we are executing the correct overridden method based on our token type and the ‘this’ that is overriding the method.
<br/><br/>
Now that we’ve gotten that out of the way, we can look at our actual Interpreter.java to see the execution steps. To parallel the visitAssignExpr above from Resolver.java, we can look at visitAssignExpr as implemented in Interpreter.java.
<br/><br/>
<snippet>23f0332e4b92c0d81605ae3803a7a253</snippet>
<br/><br/>
Our interpreter is doing the actual execution of our program here. Here we call evaluate on the assignment value. Can you guess what evaluate calls?
<br/><br/>
<snippet>9d9cbd3a1fdc74f12b90f0e899b5ddae</snippet>
<br/><br/>
Our accept method again is in play here, as it delegates execution to whatever method the interpreter class has overridden here for the type of expr expression being passed through. Lets say for instance, the full expression is ‘var result = 5 + 8;’. Then our accept method will call visitBinaryExpr.  
<br/><br/>
<snippet>419c1b129594b0101123cc4c358de564</snippet>
<br/><br/>
After evaluating both LHS and RHS, we match the PLUS operator, and the addition itself is performed and returned. That is it. We have just executed an instruction in our interpreter. Of course, this execution is being done in Java running on the JVM—we are taking a lot for granted here. Namely the JVM is doing garbage collection, compiling itself to bytecode, and then to machine code. But nonetheless we have successfully lexed, parsed, resolved, interpreted, and executed our Lox source code. The result of this addition will be returned back to our visitAssignExpr method at which point it gets stored in our current execution environment, and will sit waiting to be used by other parts of our program when this variable is referenced in the future. 
<br/><br/>
If you’ve made it this far you probably already knew enough about this to make it sensible, or I have just confused you more. Regardless, I applaud you for struggling through my explanation of a topic I only understand very roughly myself. I have omitted many details and encourage you to take a look at the full repository.I also recommend you play around on the Compilers page on my site to see Lox in action where you can compile Lox source code with the actual interpreter I built. 
`}]