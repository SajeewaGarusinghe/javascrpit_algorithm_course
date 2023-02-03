
# stacks
    Stacks are a LIFO data structure where the last value in is always the first one out.
    Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
    They are not a built in data structure in JavaScript, but are relatively simple to implement
    Insert and remove are both O(1)


 * arrays act as stacks if   use methods of push()  and pop() together
 * arrays act as stacks if   use methods of unshift()  and shift() together but time complexity is too high

https://cs.slides.com/colt_steele/stacks

# queues

    Queues are a FIFO data structure, all elements are first in first out.
    Queues are useful for processing tasks and are foundational for more complex data structures
    Insertion and Removal can be done in O(1)


*c an create queue using push() and shift()
* can create queue using pop() and unshift()
* there is no way to create queues with arrays without increasing  time complexity like we did in stacks



https://cs.slides.com/colt_steele/queues