curl -X POST -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjJhNThhMjkzZjQyNjUyMzk2ZTFhNTQiLCJpYXQiOjE3MTQzMjE5NDcsImV4cCI6MTcxNDMyNTU0N30.ddAvvhGoiWRgu065meHfh85YW7ZKx6DQcBVDVHc62vk" -H "Content-Type: application/json" -d '{"image":"https://suno.com/song/a5e2198a-f352-4abb-9a24-7f81b143ded3.png", "title": "Oh, my love" "song":"https://suno.com/song/a5e2198a-f352-4abb-9a24-7f81b143ded3.mp3"}' http://localhost:8383/songs -v