How to run the web application in local

//Information for personal use
1. open terminal
2. source $HOME/.bashrc (to set python3)
3. cd location where your html project resides
4. python -m http.server
5. access the URL from browser (http://[::]:8000)
6. Click on critique-main.html

Application Design::

This application is developed with two features
1. Feature #1 - Internal Critique app for students on Subjects 
2. Feature #2 - Personal website
3. Feature #3 - Canvas drawing

    Feature #1
    1. critique-main.html
        a.  critique-main.css
        b.  critique-main.js

    2. critique-feedback.html
        a.  crtitique-feedback.css
        b.  crtitique-feedback.js

    Feature #2
    1. mypage.html
        a.  common.css
        b.  post.html

    Files common for both features
    1. critique-header.html
        a. critique-header.css
    2. index.js
    3. images/*.jpg,*.png
    4. Readme.MD

    
    Feature #3
    1. mytraffic.html
    2.jsFiles/game.js


    Application must redirect from the critique-main.html which is home for all features
    **********************************************************************************************************
    **********************************************************************************************************
    *************************************************Feature #1***********************************************
    **********************************************************************************************************
    **********************************************************************************************************
    
    HOME page navigation tab will land in critique-main.html where it contains navigation menu which is same accross all the pages
        On left we have thumps up and down images fade-in and fade out code written in jQuery to active
        and also added background students image to get the feel of institutional application. For better view in the background linear gradient is studied and implemented.
    
        We also have footer to home page with div contains set of icons of several social networkign sites of the developer and in the bottom of hr contains another division

    Navigation Menu is set of small div with buttons and anchor tags to ridirect the pages in website. Its have its own css for nav and subnav div to have seperate styles (critique-header.html)


    We have the main functionality lies in second tab and underneath first sub nav tab is prof rating
    where it contains form for student to fill
        Details include 
            a. Students Name
            b. Subject selection (drop down)
            set of array are declared with professor names corresponding to each subject
            Jquery logic is written based on select user can have a page loaded with radio input with array of prof names
            c. student must select prof name
            d. Write a review in text area element
            e. finally rating from 1-5 decalre in jquery array, on page load this button will comes up here, so student must select this radio input and submit the form

        On same page, new card will comes up with inside scroller for other students to review since it is static app content is not visible for new user. n no of cards can be created on web page
    critique-feedback.html has all this code written and It has its own css and critique-feedback.js 


    **********************************************************************************************************
    **********************************************************************************************************
    *************************************************Feature #2***********************************************
    **********************************************************************************************************
    **********************************************************************************************************

    Second feature  resides in third tab MY PAGE, where is like a blog model and its corresponding html page mypage.html and respective common.css

        Whole page is divided into multiple div top, middle left for post, middle center right and middle center right bottom.

        On the top div specified BLOG and center div clock has the blog post and button to view the full blog post. On middle center right has image of author and content about the autor and below to that list of posts with a href linked to other websites.

    post.html has full blog post contains flashing images code written in jquery to handle them.
    
    **********************************************************************************************************
    **********************************************************************************************************
    *************************************************Feature #3***********************************************
    **********************************************************************************************************
    **********************************************************************************************************

    MY CANVAS TRAFFIC is simple set of images with circles, rectangles, lines and quadratic curves code written in page mytraffic.html and its respective canvas code is written in javascript by calling respective canvas objects. It's a simple design played around with x and x axis to make the everything inline -  files invloved are mytraffic.html and game.js