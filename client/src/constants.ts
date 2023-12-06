export const JLOX_SPEC = "# jlox is a tree walk ast language interpreted and run via the JVM in Java. \r The complete lanuage spec can be found below: \r def hello_world(): \r \t print 'Hello World!'"

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