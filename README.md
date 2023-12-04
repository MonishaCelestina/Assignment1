# Assignment1

This is my assignment 1

----Design Process----

Website idea: Music school

External user's goal: Site users of any age who are interested in taking lessons on an instrument offered on the website. Users can book music teachers through the website.

Site owners's goal: To attract prospective students, provide information about music programs and classes

I have designed the logo which is the mmswhite.png in the images folder.

- I want to make this website well-designed as well as functional. Moreover, it should be easy for users to navigate the website and all pages should be compatible in mobile view

**Existing Features**

- Simple Navigation Bar (For users to navigate through different sections of the website)
- Footer containing social media links as well as contact information (For users to be directed to the contact form or the website's social media pages)
- About us section (For users to find out more about the school)
- Home Page
- Book online feature for users to book lessons online (For users to book a lesosn by filling out the booking form)
- Lessons page. (Users can browse what kind of lessons the music school provides )
- Contact form (Users that have enquires about the page can fill out the contact form. If submitted successfully they will be redirected to a page)
- Slideshow of featured students on homepage (Showcases students which could attract users to book lessons)
  **Additional Features**
- Students that want to post their own testimonials can do so by filling out a testimonial form which will then be displayed on the testimonials page
- Users that are browsing what lessons are available on the lessons offered page will be able to watch a course demo on the respective lesson they click on
- lesson slider on homepage for users to view lessons

**Technologies Used**

- JQuery. The project uses JQuery to simplify DOM manipulation.
- Light slider. This project uses light slider to customize image sliders.
- ChatGpt. This project uses chatgpt to generate brief information for my website such as instrument information.

**Testing**
Testimonial form

- Scroll down the homepage and find the part where it asks if you want to post a testimonial and click on the button that says 'Leave a review'
- After filling up the form click on submit.
- After submitting, a success message appears indicating that the form has beeen successfully submitted
- The user's testimonial will then be displayed on the testimonial page.
  (- Faced the issue of the data not being displayed on the testimonials page)

Navigation Bar

- Click on every navigation including the logo to see if they all redirect you to another page
- Minimize screen to see if the navbar is responsive and changes to fit mobile view

Contact form

- Go to Contact page
- Try to submit the contact form without filling in the fields.
- If you have successfully submitted the form, you will be redirected to another page.
- Minimize screen to see if it fits mobile view
  (there was a problem at first when i clicked book online as the popup appeared behind the contact form.
  This was solved by changing the z-index)
  - This page is designed to be compatible with mobile devices.

Testimonial Form

- Click on leave a review that is located on the home page
- Fill in the fields
- Once submitted, the data you have inputed will be displayed on the testimonials page.

Book Online Button

- Try to input an email without the @.
- Try to submit the empty form and verify that an error message about the required fields appears
- Try to submit the form with all inputs valid and verify you get redirected to the testimonials page.
  (Used javascript for this button. I created 2 function OpenPopUp and ClosePopUp for the book online button. So when the user clicks on the button
  the booking form will popup)

Footer

- Try to see if the social media links redirect you to a social media page
- Try to see if the explore links redirect you to the respective pages

Lessons Offered page

- Minimize screen to see if it fits mobile view. This page is designed to be compatible with mobile devices.

About Us

- Try to click on book online
  (there was a problem at first when i clicked book online as the popup appeared behind the about us image.
  This was solved by changing the z-index)
  (another error I faced was the about us image wasnt able to center between the black container and about us text container )
- This page is designed to be compatible with mobile devices.

Home page Unlock potential

- When in mobile view, elements are stacked vertically on top of each other

- Automatic Slideshow
  (had an error of the student names being cut off. This was solved by changing the the margin-bottom)

**Additional Errors faced**

- when put into the assests folder, despite linking the stylesheet properly, the contactform.css and styles.css wasnt applied to the respective pages. Ended up just moving them out of the
  asset folder

**_Credits_**

**Media**
The photos from this site were obtained from:

- https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.npr.org%2F2019%2F11%2F14%2F779342662%2Fwatch-this-9-year-old-girl-drum-her-heart-out-to-nirvanas-in-bloom&psig=AOvVaw2ilAuZru2Ztve03KJpc_iG&ust=1701636490539000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDZo4bQ8YIDFQAAAAAdAAAAABAE (girl drummer.png)

- https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.soundslice.com%2Fslices%2F8LDcc%2F&psig=AOvVaw3JAa7ThMzMQQxERTJzwlOT&ust=1701635916140000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPik_fLW8YIDFQAAAAAdAAAAABAE (andie.jpg)

- https://www.istockphoto.com/photo/happy-millennial-business-group-leader-giving-hand-for-shake-gm1318531385-405639325 (about us.jpg)

- https://www.flaticon.com/free-icon/grand-piano_1994592 (pino.png)

- https://www.flaticon.com/free-icon/drum-set_4488230 (drums.png)

- https://www.flaticon.com/free-icon/acoustic-guitar_5885266 (guit.png)

- https://pixabay.com/photos/guitar-sunset-player-colors-2875378/ (outsideguitar.jpg)

- https://www.flaticon.com/free-sticker/violin_7294947 (violin.png)

- https://saarangaacademy.com/index.php/programs/ (violinplayer.jpg)

- https://www.flaticon.com/free-icon/singing_3382548 (voc.png)

- https://www.vecteezy.com/free-photos/blues-guitar (one-man-playing-guitar-stage-night-generated-by-ai_188544-21510.jpg)

- https://www.fuelrocks.com/unleashing-energy-mastering-the-art-of-playing-live-wire-on-the-drums/ (record-e-drums-960x600-1.jpg)

- https://www.newyorker.com/culture/cultural-comment/the-rise-and-fall-of-smooth-jazz (musicbg.jpeg)

- https://ssmo.org/vcs/schools/music/ (boyguitar.jpg)

- https://wall.alphacoders.com/big.php?i=62676 (wp2776811.jpg)

- http://unlimited-addons.com/testimonials-addons-for-wpbakery-page-bulder/ (test2.jpeg)

- https://unlimited-elements.com/testimonial-carousel-widget-for-elementor/ (test1.jpeg)

- https://www.songkick.com/concerts/41394711-kalandra-at-kasarna-karlin (hqdefault.jpg)

- https://www.applausepianostudio.com/ (people-2577951_1280.jpg)

- mmswhite.png (original)

- https://www.youtube.com/watch?v=BBz-Jyr23M4&list=PL-RYb_OMw7GfqsbipaR65GDDzA1rP5deq (guitar video course demo)

- https://www.youtube.com/watch?v=827jmswqnEA (piano video course demo)

- https://www.youtube.com/watch?v=et9hU7QMDYU (drums video course demo)

- https://www.youtube.com/watch?v=jog-nfLldRI (vocal video course demo)

**Acknowledgements**

- The text from the about us, lessonsoffered and homepage section was copied from ChatGpt
- I learnt how to make the automatic slideshow from w3wschools.com
  **Inspirations**

I received inspiration from this project from sites such as Ossia music school (https://www.ossia.edu.sg/) as well as Aureus Academy (https://www.aureusacademy.com/)

**Reflection**

This site was definitely pretty fun to make although I ran through some errors that took many hours to fix. Learnt a few shortcuts as well through this process as well.
For example if i typed in (li\*5) it will create 5 list items which is more efficient.
