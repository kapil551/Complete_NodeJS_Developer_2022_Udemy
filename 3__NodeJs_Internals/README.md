# Node.js Fundamentals: Internals

0. Links

    1. https://github.com/nodejs/node
    2. http://libuv.org/

1. Whats Node.js Includes?

    - V8 JavaScript Engine
    - Node.js APIs
    - Node.js bindings
    - libuv

2. Synchronous vs Asynchronous

    - Asynchronous is often described as the opposite of synchronous, where synchronous means code that runs line by line in sequence.
    So asynchronous code is code that doesn't necessarily run line by line.

    - It's possible for our computers as machines to work on multiple tasks at the same time when one piece of code is still executing, but your program is already moving on to the next piece of code. That's asynchronous code, often times in your programs.
    There will be some asynchronous functions.
    These asynchronous functions run in the background.
    While your JavaScript has already moved on to the next line of code.
    This can be super useful because, for example, if your program is a Web browser and it needs to spend some time loading a page, maybe my search results to find out more about the pacific ocean.
    We want the browser to do that in the background, don't we?
    We want our browser to still be able to handle our button clicks and to let us load other web pages, even if something is loading in the background.
    Maybe I'm searching for images of mountains.
    Asynchronous programming is what allows us to do all this, handling many things side by side.

3. Asynchronous Callbacks

    -  Node.js is an "asynchronous", event driven JavaScript runtime.

    - Node.js is asynchronous and it's really good at working with asynchronous tasks.

    -  Synchronous just means that the code executes line by line in order waiting for the previous line to finish before moving on to the next.

    - setTimeout() is a asynchronous function

    - This function allows us to set a piece of code to be run at a later time.
    
    - And the way we do that is by passing a function as the first argument here so we can use this asynchronous callback function.

    - The function that we're passing in to be executed at a later time is called a callback function.
    Callbacks allow us to say when you're done doing all of this work, Call me back and run my code.

    - Our code is still running line by line, but it doesn't pause for the asynchronous function.

4. Non-Blocking Functions

    -  Blocking code executes synchronously.

    - Non-Blocking functions like setTimeout(), execute in the background or even in parallel with the rest of our code.

    - The functions that can take a very long time to complete are the ones that we want to be careful with.
    We want to make sure that our long running functions that are waiting for input and output from our devices, like our hard drive, are non blocking, allowing node.js to continue executing other code.

5. Is JavaScript Asynchronous or Synchronous?

    - JavaScript is a "synchronous" language, one statement executes after the other.
    However, we've seen that we can write asynchronous code where we are able to execute a callback function in the future when something completes.

    - When JavaScript is run in certain environments like your browser or Node.js, it allows us to write asynchronous functionality.

6. Mutli-Threading, Processes, and Threads

    - 

7. Is Node.js Multi-Threaded?

    - 