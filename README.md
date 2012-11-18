#meteor-typescript

A meteor smart package for [TypeScript](http://typescriptlang.org) support

## Installation

Currently, there is only a command line typescript compiler available. For the meteor smart package, the file 
compilation has to be performed synchronously. Node does not provide an easy way to do so out of the box, sadly. 


### Prepare

Install the `exec-sync` package with `$ npm install -g exec-sync` globally.  `exec-sync` has to be found by node inside your 
project directory, so maybe you'll have to use the `$ npm link exec-sync` command to make it available in there.

#### Windows

I did not try this myself, but as *sky-dev* mentioned [here](https://github.com/grmlin/meteor-typescript/issues/2), there are some additional steps needed to make the `exec-sync` package work in Windows.

> First, Python 2 needs to be installed and 'C:\Python27' added to your Windows environment PATH variable in order for 'npm install -g exec-sync' to work.  
  Second, I had to execute 'npm link exec-sync' in a console run as an administrator, because Meteor does not recognize the default install directory of 'C:\Users[user]\AppData\Roaming\npm\node_modules'. Also, it is important to note that you must be navigated to 'C:\Program Files (x86)\Meteor\lib\node_modules' for it to link node_modules to the correct location.

### Atmosphere  

* Go to [https://atmosphere.meteor.com/](https://atmosphere.meteor.com/) and follow the instructions

### Manually

* Download the meteor project from github
* Download and add the `meteor-typescript` package to the packages folder of meteor
* run the meteor script from the folder you checked the github repo out into, not the locally installed  one

## Usage

All files with a `.ts` extension will be converted automatically into a javascript file.

 