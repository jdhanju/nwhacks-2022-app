# reVision Introduction
Application: https://nwhacks-2022-app.vercel.app/

Figma: https://www.figma.com/file/Fpgz2H8knWSpZpsYdZ0m80/reVision-Prototype?node-id=0%3A1

![Figma](https://user-images.githubusercontent.com/68607795/149671507-20bf9f02-41a9-4a58-af10-760c21376731.png)

Imagine taking a picture of your notes or textbook and having that image available on your computer as typed text. It may sound too good to be true, but reVision can do exactly that.

**reVision** is the ultimate note-taking application, and don't just take our word for it. McGill (https://www.mcgill.ca/oss/article/technology-general-science/pen-and-paper-versus-laptop-there-clear-winner-note-taking-olympics) mentions that when it comes down to comprehending concepts, users who used a pen to write down information generally performed better than their keyboard wielding counterparts. 

The BBC (https://www.bbc.com/future/article/20191122-when-the-best-way-to-take-notes-is-by-hand) has also commented on how students who handwrite their notes have more engagement in the information that they listen to in a lecture.

***Why is that important?***

As a student, we are attached to our digital devices whether that be our phones, tablets, or laptops. It also makes sense that we want all of our notes and resources in one convenient location.

**reVision** simplifies this process through a series of simple steps.
1. Visit the website: https://nwhacks-2022-app.vercel.app/
2. Take a picture or upload a picture of the note(s) or textbook page that you want to transcribe.
3. Choose if the picture is of text or code.
4. Generate an ID through the reVision extension to connect the web application.
5. Enter the ID on the web application
6. Hit the submit button.
7. Copy & paste the text from the reVision extension. 🎉

## Technologies Used

The reVision application has four major components that allow the application to work seamlessly together. 

- ### Front-end Application
    - https://github.com/jdhanju/nwhacks-2022-app
    - The Front-end Application allows the user to upload their photo where it is then sent to the Processing API to be converted to text.
    - _Technologies: React, Next.js, Tailwind CSS, ESLint, and Prettier_

- ### Processing API
    - https://github.com/jsam07/text-recognition-api
    - The Processing API is an OCR & HCR based API that transcribes an image to text using a combination of Microsoft Cognitive Services and Google's Cloud Vision API. The text is sent back to the front-end application after processing.
    - _Technologies: JavaScript (ES6), TypeScript, Docker, Microsoft Cognitive Services, Google's Cloud Vision API, ESLint, and Prettier_

- ### Socket Server
    - https://github.com/matteomiceli/nwHacksSocketServer
    - The Socket Server facilitates communication between the front-end application and the extension. It accepts an object from the front-end application that contains the ID (roomId) and text (content) and sends that information to the browser extension.
    - _Technologies: JavaScript (ES6), Socket.io, ESLint, Prettier_

- ### Browser Extension
    - https://github.com/iflinda/nwPlusExtension
    - The extension is downloadable from the packages in the repository.
    - The Browser Extension listens to the Socket Server and accepts an object that contains the ID (roomId) and text (content). After receiving an ID match, the content is shown as text in the extension; thus, allowing for users to copy and paste the text.
    - _Technologies: React, TypeScript, Webpack.js, Tailwind CSS, ESLint, and Prettier_

## Difficulties Making the Application & What We Learned

Since there are so many moving parts in the reVision application, it was difficult to initially connect all of the endpoints. It was especially difficult to connect the Socket Server to the Browser Extension because of the constant need to listen to all activity from the Socket Server. Deploying the application using environental variables proved to be more challenging than expected because of the difficulties of the authentication procedures needed to authenticate the API. Additionally, there were a few hiccups when trying to retrieve and store from local storage during our front-end development process.

What we learned was that working together as a team was extremely important. Since all the parts of the application need to communicate together, it was also imperative that we communicated clearly and efficiently as a team. We were on Discord through the entirety of the hackathon, and we believe that it helped us to work better together.

Despite all the challenges, we were able to create a functional application with 4 different parts (Front-end application, Processing API, Socket Server, and the Browser Extension) in a small team. 

We hope you enjoy the reVision.

## Future Goals

reVision has a lot of potentials, and we think it's a great tool for students and adults looking to improve their notetaking skills. Not only is it a great notetaking tool, but it allows multiple users to take notes together in a collaborative environment through the use of the ID (roomId). 

Ideally, we would like to eventually make it easier for different people to collaborate by allowing for multiple transcribed text uploads to be stored for a better user experience.

We would like to make this project open source. We believe that a useful application will be loved by the community; thus, pooling amazing talent from across the world will be the most beneficial step that we can take in reVision's journey.


## Team Members
-   Jamie Samuel (https://github.com/jsam07/)
-   Jaiveer Dhanju (https://github.com/jdhanju)
-   Linda Ngoc Nguyen (https://github.com/iflinda)
-   Matteo Miceli (https://github.com/matteomiceli)
