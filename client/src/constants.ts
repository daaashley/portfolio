export const JLOX_SPEC = `
# https://github.com/daaashley/lox-interpreter

#            /$$                    
#           | $$                    
#        /$$| $$  /$$$$$$  /$$   /$$
#       |__/| $$ /$$__  $$|  $$ /$$/
#        /$$| $$| $$   $$   $$$$/ 
#       | $$| $$| $$  | $$  >$$  $$ 
#       | $$| $$|  $$$$$$/ /$$/  $$
#       | $$|__/ ______/ |__/  __/
#  /$$  | $$                        
# |  $$$$$$/                        
#  ______/                         
                                  
##########################################################

# Lox is a dynamically-typed object oriented programming 
# language with C family syntax created by Robert Nystrom. 
# It's implementation is provided in his book Crafting 
# Interpreters. JLOX is the Java runtime implementation of
# the interpreter. Presented here is a version of JLOX I 
# developed over the course of several months, and may not 
# precisely reflect its original implementation and spec, 
# although it is close. The implementation is a tree-walk 
# interpreter meaning parsing, static analysis, and the 
# resulting abstract syntax tree are directly translated 
# and executed by Java code running on the JVM. Below you 
# will find a non-exhaustive technical specification of the 
# language with code examples to use in the editor. Enjoy!

# Tests and demonstrates block scoping.
 
 var a = 3;
 {
  var a = 2;
    var b = 1;
  {
    print a + b;
  }
}

# Tests basic function with parameters.

fun sayHi(first, last) {
  print "Hi, " + first + " " + last + "!";
}

sayHi("Dear", "Reader");



# Tests class methods and attributes.

class Bacon {   
  eat() {    
    print this.person + " is eating Bacon. Crunch crunch crunch!";  
    } 
} 

var bacon = Bacon();
bacon.person = 'David';
bacon.eat();

# Tests Single Inheritance and sub/superclass chain.

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