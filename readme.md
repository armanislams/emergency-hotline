Question #1 : 
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: 
with getelementbyid  we can only select a single element & with getelementsbyclassname we can select multiple elements that have a same class name. And with query selector we select the first element with id or class or any element on the other hand with query selector all we can select any css selector  

question #2: 
How do you create and insert a new element into the DOM?
Ans:
at first we have to use document.createelement to create a new html element in the memory , then we have to use appendchild to the parent element to add this div to the parent element. 

Question #3:
What is Event Bubbling and how does it work?
 Ans:
 the buble event starts at top then go the targeted element , where the target was clicked after that it goes back to top from the target element

Question #4:
 What is Event Delegation in JavaScript? Why is it useful?

 Ans:
 with event delegation we can add a event listener to parent element instead of each child. with event delegation its increases performance , handle dynamic content and reduce complex codes.

 Question #5:
 What is the difference between preventDefault() and stopPropagation() methods?

 Ans:
 with preventdefault its stops browsers behaviour like auto reloading when someone submit a form, and with stoppropagation we can stop event buble. like when a target is clicked it wont go way to the top