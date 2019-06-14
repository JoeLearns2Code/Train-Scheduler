# Train-Scheduler

This project contains an imaginary train schedule that utilizes data stored in Google Firebase.  Users can interact with the program by entering a train name, destination, starting departure time and frequency that the train runs.  What you will then see displayed in the schedule comes from the firebase server, with the name, destination and train frequency returned.  The remaining information is dislayed as a calculation based on the current time, using moment.js, and will show what time the next train is scheduled to arrive, as well as the remaining minutes until arrival.  This information is then updated automatically every 60 seconds.    

## Getting Started

This project can be found in my github portfolio here: https://github.com/JoeLearns2Code/Train-Scheduler

The live page can be found here: https://joelearns2code.github.io/Train-Scheduler

Additionally, this page can be accessed from my portfolio page here: https://joelearns2code.github.io/Bootstrap-Portfolio/portfolio.html

### Prerequisites

You will need access to a common web browser to view the live page.  The data can also be pulled directly from GitHub via GitBash on PC or via Terminal on Mac.


### Installing

When you have accessed the repository page on GitHub, you may simply download a Zip file and extract it to a directory of your choosing.  Alternatively, you may download the data directly to your device via GitBash if you have an SSH key.  More on adding an SSH key can be found here: https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account

To download via GitBash, once you have a working SSH key with GitHub, create a folder you wish to download data into.  Next, click on the green 'Download or Clone' button on the GitHub respoitory page.  Make sure you have SSH key selected(and not HTTPS), and click on the clipboard icon.  This copies the address to your clipboard.

Next, navigate to the folder you wish to download the data into via GitBash or Terminal, and then simply type "git clone" followed by the link you copied onto your clipboard(paste via ctrl/cmd+v).  Press the enter key, and GitBash will pull the entire repository into your folder.


## Testing

HTML can be validated here: https://validator.w3.org/#validate_by_input

JS logic can be tested in Chrome by using the Inspect feature, and going to the Console tab.  Enter in a function to test the results.




## Built With

Visual Studio Code: https://code.visualstudio.com/

Google Firebase: https://firebase.google.com/

Moment.js: https://momentjs.com/

## Contributing

If you have any suggestions or would like to iterate upon this project for your own learning, please feel free to pull the files.


## Author

* **Joe Hutchinson**


## Acknowledgments

* As always, thank you to my Coding Boot Camp instructors for all of the support and constructive feedback.