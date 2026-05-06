# Lab 5 - JavaScript DOM Basics and GitHub Actions

**Name:** Scottin Pham

## GitHub Pages Links

- Expose (Party Horn): https://scottinp.github.io/Lab5_Starter/expose.html
- Explore (Speech Synthesis): https://scottinp.github.io/Lab5_Starter/explore.html

## Check Your Understanding

**1) Would you use a unit test to test the "message" feature of a messaging application? Why or why not?**

No, sending a message involves several components working together, ex: capturing input from the UI, transmitting it over the network, and rendering it on the recipient's side. These interactions are what unit tests are designed *not* to cover. An integration or end-to-end test is more appropriate here. Individual helpers used by the feature (e.g. a function that formats the timestamp) can be unit tested on their own.

**2) Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?**

Yes, a "max message length" is a pure function with clear inputs and outputs (given a string, must be > or < certain amount), no dependencies on the UI or the network, and it has obvious edge cases (0 chars, exactly 80, 81, multi-byte characters). Unit tests are best for catching errors like this.
