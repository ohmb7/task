# Wordpress Task Exercise 
This task exercise was very interesting to do, for the time I had I took some bad decisions like starting the project on docker on a new computer.
I learned how to config the docker-compose, to load wordpress with an extra container for the wp-cli.

The next thing was that outside thumbnail rebuild, I had no much experience using the wp-cli, so I tried the theme scaffold tool. It was very nice at first but turned out that it had a little bit more of extra code than what I needed for this porject, for the time I had I decided to keep going and try to adapt.

For the implementation of dev tools, I used webpack instead of gulp for the moment, I added scss compiling and added libraries to bundle JS, but no further configuration was made.
I also added Browser sync with the webpack configuration.

This also needs a lot of cleaning and a good dive into the git ignore that I will probably add in a couple of days, as I will probably will keep using this project as a base for my tests on docker containers for WP development.