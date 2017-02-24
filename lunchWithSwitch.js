var lunch = prompt("What would you like to eat for lunch, a sandwich, soup, or pizza?");
switch(lunch){
      case 'sandwich':
        console.log("One sandwich, coming up!");
        break;
      case 'soup':
        console.log("Tomato soup, coming up!");
        break;
      case 'pizza':
        console.log("That's what i'm having, too!");
        break;
      default:
        console.log("I'm sorry, i'm not sure what " + lunch + "is.");


}
