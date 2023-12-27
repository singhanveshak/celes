function addComment() {
    const commentInput = document.getElementById("comment-input").value;

    if (commentInput.trim() !== "") {
        const commentList = document.getElementById("comments-list");
        const newComment = document.createElement("li");

        // Get the current date
        const currentDate = new Date();
        const formattedDate = currentDate.toDateString();

        // Set the content of the list item with comment and date
        newComment.innerHTML = `<div class="comment"><p>${commentInput} <span class="comment-date">${formattedDate}</span></p></div>`;

        // Append the new comment to the list
        commentList.appendChild(newComment);

        // Send the comment to the server for persistent storage
        saveComment({ text: commentInput, date: formattedDate });

        // Clear the input field after adding the comment
        document.getElementById("comment-input").value = "";
    }
}

function saveComment(comment) {
    // Send the comment to the server (PHP script) for storage
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "save_comment.php", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(comment));
}

// Load existing comments from the server
window.onload = function () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "get_comments.php", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const comments = JSON.parse(xhr.responseText);
            const commentList = document.getElementById("comments-list");

            comments.forEach(comment => {
                const newComment = document.createElement("li");
                newComment.innerHTML = `<div class="comment"><p>${comment.text} <span class="comment-date">${comment.date}</span></p></div>`;
                commentList.appendChild(newComment);
            });
        }
    };

    xhr.send();
};
