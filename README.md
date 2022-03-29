# Project REST-Rant

REST-Rant is an app where users can review restaurants.
## Routes

  |  Method   |  Path    |  Purpose |
  |:---------:|:--------:|:----------:|
  |  GET	    |  `/`       |  Home page  |
  |  GET      |  `/places` |  Places index page  |
  |  POST	  |  `/places` |	Create new place  |
  |  GET 	  |  `/places/new`  |	Form page for creating a new place  |
  |  GET	  |  /places/:id  |	Details about a particular place  |
  |  PUT	  |  `/places/:id`  |	Update a particular place  |
  |  GET	  |  `/places/:id/edit`  |	Form page for editing an existing place  |
  |  DELETE	  |  `/places/:id`  |	Delete a particular place  |
  |  POST	  |  `/places/:id/rant`  |	Create a rant (comment) about a particular place  |
  |  DELETE	  |  `/places/:id/rant/:rantId`  |	Delete a rant (comment) about a particular place  |
  |  GET	  |  *       |	404 page (matches any route not defined above)  |



  ## Database

  **places**
   
     |  Field  |  Type  |
     |  -------|  ------|
     |  _id    |  Object ID  |
     |  name   |  String  |
     |  city   |  String  |
     |  state  |  String  |
     |  cuisines  |  String  |

     source for sushi
     israel-albornoz-kNH31Q7MDUY-unsplash

     dance source
     Photo by <a href="https://unsplash.com/@samar0103?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sam Mar</a> on <a href="https://unsplash.com/s/photos/club-party?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
     
    hangry source
    Photo by <a href="https://unsplash.com/@callmehangry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">call me hangry 🇫🇷</a> on <a href="https://unsplash.com/s/photos/restaurants?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  