whichJarFile = "rhino"
multiwindow = false;
whichInterpreter = whichJarFile + " interpreter jar";
load("dist/env.rhino.js");
load("test/call-load-test.js");
