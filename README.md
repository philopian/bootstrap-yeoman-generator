# Convert it for yourself
1. Make sure you have yo install globally
    ~~~
      $ npm i -g yo
    ~~~
2. Prefix this directory to have "generator-"
3. Change the property name inside the package.json file to have the "generator-" prefix
4. link this directory so you can test it out locally
    ~~~
      $ cd <your-project-name>
      $ npm link
    ~~~
5. Push away!
    <br />-look add the structure and comments in the ./app/index.js file
6. Add a repo on github
7. When you're done publish!
    ~~~
      $ npm publish
    ~~~
# Use the scafolding tool
~~~
$ yo <your-project-name-without-generator-prefix>
~~~