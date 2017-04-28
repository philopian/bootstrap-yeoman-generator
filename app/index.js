// 'use strict';
var _ = require('lodash');
var fs = require('fs');
var chalk = require('chalk');
var generators = require('yeoman-generator');
var greeting = require('../ascii-art-greeting');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
  },

  // INITLALIZING
  initlalizing: function() {
    console.log("...initlalizing");
  },


  // PROMPT USER WITH SOME QUESTIONS
  prompting: function() {
    console.log("...greetings");

    // Greetings
    console.log(greeting.logo);

    // Prompt user with options
    var done = this.async();
    this.prompt([{
          type: 'input',
          name: 'userInput',
          message: 'Type in an input!',
          store: true
        },
        {
          type: 'password',
          name: 'userPassword',
          message: 'Type in a password!',
          store: false
        },
        {
          type: 'list',
          name: 'userList',
          message: 'Pick item from list?',
          store: true,
          choices: [{
            name: 'Option 1',
            value: 'option1'
          }, {
            name: 'option 2',
            value: 'option2'
          }, {
            name: 'option 3',
            value: 'option3'
          }]
        },
        {
          type: 'rawlist',
          name: 'userRawList',
          message: 'Pick item from list?',
          store: true,
          choices: [{
            name: 'Option 1',
            value: 'option1rawlist'
          }, {
            name: 'option 2',
            value: 'option2rawlist'
          }, {
            name: 'option 3',
            value: 'option3rawlist'
          }]
        },
        {
          type: 'checkbox',
          name: 'userCheckbox',
          message: 'Pick item from list?',
          store: true,
          choices: [{
            name: 'Option 1',
            value: 'option1checkbox'
          }, {
            name: 'option 2',
            value: 'option2checkbox'
          }, {
            name: 'option 3',
            value: 'option3checkbox'
          }]
        },
        {
          type: 'confirm',
          name: 'userConfirm',
          message: 'Do you like this!',
          store: true
        },
      ],
      function(answers) {
        this.answers = answers;
        done();
      }.bind(this));
  },


  // CONFIGURE
  configuring: function() {
    console.log("...configuring");
    console.log(this.answers);
  },


  // DEFAULTS
  default: function() {
    console.log("...default");
  },


  // CREATE/WRITE/COPY TEMPLATE FILES
  writing: {
    makeFiles() {
      var fileContent = { "hello": "appseed!!" };
      this.fs.writeJSON('filename', fileContent);
    },
    copyFiles() {
      this.copy('README.md', 'README.md');
    },
    copyDirectory() {
      this.directory('css/', 'css/');
      this.directory('js/', 'js/');
    },
    templateFiles: function() {
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('index.html'), {
          AppName: this.answers.userInput
        }
      );
    }
  },

  // WHAT TO DO WITH CONFLICTS
  conflicts: function() {
    console.log("...conflicts");
  },


  // INSTALL BOWER/NPM PACKAGES
  install: function() {
    console.log("...install");

    var shelljs = require('shelljs');
    var cmd = "bower i && npm i";
    shelljs.exec(cmd)

  },


  // TELL USER EVERYTHING IS COMPLETED
  end: function() {
    console.log('...DONE');
  }

});