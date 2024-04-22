# BAFFLE 

## Intro

This application will gather the songs and their names from the website https://suno.com/ and play and store them to listen to outside the website, using the BAFFLE player.

![](https://media.giphy.com/media/8mzhnR9ZXqSjYtlKpp/giphy.gif?cid=790b7611umrposiq013r62rg7lfmbd6rgpgcreqj24v5dch3&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Functional Description

### Use Cases

- find songs 
- choose a song
- songs list 
- play the song
- make a list of favorite songs

v0.1
- add song

### UI Design

[Figma](https://www.figma.com/file/PmYQ3EbdY25UNuFwEnfPfZ/Untitled?type=design&node-id=55%3A40&mode=design&t=4NLSGNBWJ1AwTrx9-1)

## Technical Description

### Modules

- api (server logic)
- app (client interface)
- com (common utils, tools, ...)

### Technologies

- Sass
- TypeScript
- Chai
- Mocha
- React
- Express
- Node
- Tailwind
- Mongo
- Moongose

### Data Model

User
- id (required)
- name (string, required)
- email (string, required)
- username (string, required)
- password (string, required)
- avatar (string, optional)


Song
- id (required)
- url (string, required)
- title (string, required)
- image (string, required)
- scroll (x, required)
- volume (x, required)

Songs list
- id (required)
- url (string, required)
- title (string, required)


Favourite list
- id (required)
- url (string, required)
- title (string, required)
 