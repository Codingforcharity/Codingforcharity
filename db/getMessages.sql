SELECT * FROM messages WHERE userid = $2 AND chatroomid = $1
ORDER BY newdate;