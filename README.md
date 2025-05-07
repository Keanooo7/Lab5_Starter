# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

#Brendan Keane
https://keanooo7.github.io/Lab5_Starter/expose.html

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, this is because mesages deal with multiple layers of the user interface components like network requests, and server‑side logic or database writes. This will become a problem when testing the message feature because unit tests are only able to isolate a single “unit” of code like a function rather than a full feature. 

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, this is totaly possible because the scope of this problem stays within a single user interface component and doesn’t require database access or network calls. 
