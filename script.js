// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('commentForm');
    const input = document.getElementById('commentInput');
    const container = document.getElementById('commentsContainer');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const commentText = input.value.trim();
      if (commentText) {
        // Create comment element
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        
        // Add comment text
        const textPara = document.createElement('p');
        textPara.textContent = commentText;
        commentDiv.appendChild(textPara);
        
        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
          container.removeChild(commentDiv);
        };
        commentDiv.appendChild(deleteBtn);
        
        // Add to container (at the top)
        container.prepend(commentDiv);
        
        // Clear input
        input.value = '';
      }
    });
  });