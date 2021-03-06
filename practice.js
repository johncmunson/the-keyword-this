//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      // By default, "this" refers to the object that owns the current function.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // Function invocation (Default binding)
      // Method invocation (Implicit binding)
      // Explicit binding (Soft & Hard)
      // Constructor invocation (New binding)

  // 3) What is the difference between call and apply?

      // Both call and apply allow you to invoke a function while defining the relevant scope.
      // The relevant scope must be passed in as the first argument and an object.
      // With call, the remaining arguments are passed in as a comma separated list.
      // With apply, the remaining arguments are passed in as an array.
      // Essentially, these two keywords allow us to define the scope of the function explicitly.
      // These keywords are also useful in conjunction with variable-arity functions.

  // 4) What does .bind do?

      // Bind is similar to call/apply in that it lets you invoke a function while at the same time
      // explicitly defining the scope of the function when it runs. However, bind is different in that
      // it actually creates an instance of that function on the object scope that you have defined,
      // and the function is not invoked immediately.
      // When using bind, you should be careful to not overwrite an existing function of the same name.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: "tacobelldude",
  email: "tacobelldude@gmail.com",
  getUsername: function() {
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


user.getUsername();


// Write the function definitions which will make the following function invocations function properly.

var Car = function(make, model, year) {
  this.make = make,
  this.model = model,
  this.year = year,
  this.move = 0,
  this.moveCar = function() {
    return this.move += 10;
  }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
getYear.call(prius);
getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

// var userName = getMyUsername(); //Fix this
var userName = getMyUsername.call(myUser);

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(The incorrect version has been commented out.)
  // It will return undefined because "this" is referring to the global window object which
  // does not currently have the property "username" defined.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  // The global window object.

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
