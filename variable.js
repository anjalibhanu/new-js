//VARIABLE-Used to store the data
//We have 3 keywords-(var),(let),(const)
//LHS=RHS(Declarations=Initialization)

//VAR learning -FUNCTION SCOPE
//Var can be declared and can be initialized
//var name = "David";
//console.log("My name",name);
//var name = "Johnson";
//console.log("My name", name);
//Variable can be reinitialized and redeclared

//LET learning - BLOCK SCOPE(we need to use the{})
//Let cannot be reduced and can be initialized
//let name = "David";
//name="Johnson";
//console.log("My name",name)
//Let keyword cannot be redeclared,and can be reinitiated

//CONST learning -BLOCK SCOPE
//Const cannot be re-declared and cannot be re-initialized
//const name="David";
//const name;
//console.log("My name",name)
//Const Cannot be re-declared as well as cannot be re-initialize
// {
//   let name = "David";
//   console.log("Inside", name);
// }
// console.log("Outside", name);

// {
//   var name = "David";
//   console.log("Inside", name);
// }
// console.log("Outside", name);

// {
//   const name = "David";
//   console.log("Inside", name);
// }
// console.log("Outside", name);

// const final; -Initialization is mandatory
// var final; -Initialization is optional
// let final; -Initialization is optional