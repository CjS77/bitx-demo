# bitx-demo

Live BitX node.js demo

## Instructions

Assuming you have node / npm installed:

    npm install
    npm start
    
The demo first tries to make 100 AUTHENTICATED ticker calls. If a 503 error occurs, it aborts, writing the number of
successful calls to the console.

It then immediately makes a set of unauthenticated calls. Since the limit was presumably reached in the previous set
of calls, a 503 error should be returned on the first attempt.

