Documentation FAQ


How to add new writing-
    0. Make sure you have your written piece
    1. Go into 'writing-files' folder. Here you will find 'writing1.html'. This is the template, NEVER delete this.
    2. Open 'writing1.html' and copy its contents. Then go back to the 'writing-files' folder.
    3. Click add file, then create new file, in the top right. Give your file a name (no spaces) and paste the template from 'writing-files' in the space below.
    4. Make any necessary changes to the template including:
          -the tab title
          -the article name and date
          -the article content (ie. number of paragraphs, the actual text, author name)
    5. Commit the changes by hitting commit in the top right, and then hitting commit again on the pop-up.
    6. Finally, go to the writing.html file, and then add an <li> element for your new article. You will see that there is already some there, copy paste 1 of them and replace the info:
          <li>
            <a href="./writing-files/[YOUR_FILE_NAME].html">September 20, 2000 - "Generation Next Confronts the Challenges of the Future"</a>
          </li>
    7. If you do not need the template <li> elements anymore, you can delete them. Commit your changes to save.

How to add new archive-
    0. Have an image made. Go into the images folder and add your image as a file there.
    1. Go to 'archive-files' folder. Here you will find 'archive1.html'. This is the template, NEVER delete this.
    2. Open 'archive1.html' and copy its contents. Then go back to the 'archive-files' folder.
    3. Click add file, then create new file in the top right. Give your file a name (no spaces) and paste the template from 'archive-files' in the space below.
    4. Make any necessary changes to the template:
          - Change information as needed.
          - You MUST find the src attribute in the <img> tag and change it to match your image created in step 0:
          <div>
            <img
              width="600px"
              height="800px"
              class="archive-img"
              src="../images/[YOUR_FILE_NAME].png"
            />
          </div>
    5. Commit the changes by hitting commit in the top right, and then hitting commit again on the pop-up.
    6. Finally, go to the archives.html file, and then add an <li> element for your new archive file created in step 3. You will see that there is already some there, copy paste 1 of them and replace the info:
         <li>
          <a href="./archive-files/[YOUR_FILE_NAME].html">September 20, 2000 - "Generation Next Confronts the Challenges of the Future"</a>
         </li>
    7. If you do not need the template <li> elements anymore, delete them. Commit your changes to save.
      
How to add a new photo:
    0. Have a photo ready and store it in the images folder.
    1. Go into photos.html
    2. Here is a template for adding a photo. Use the filename you used in step 0 and change the description:
      <div>
        <img src="./images/[YOUR_IMAGE].png" />
        <div class="desc">
          <p>This photo is of Rizzler Kevin</p>
        </div>
      </div>
      <hr color="#000000" width="100%" />
    3. Commit your changes and save.
    

