
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.project-categories button');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter projects
                const filter = button.dataset.filter || 'all';
                projectCards.forEach(card => {
                    card.style.display = (filter === 'all' || card.dataset.category === filter) 
                        ? 'block' 
                        : 'none';
                });
            });
        });
    }

    // Modal functionality
    const modal = document.getElementById("myModal");
    
    if (modal) {
        // Function to open the modal
        window.openModal = function(imgSrc, captionText) {
            if (!modal || !imgSrc) return;
            
            modal.style.display = "block";
            document.getElementById("modalImage").src = imgSrc;
            document.getElementById("caption").textContent = captionText;
            document.body.style.overflow = "hidden";
        };
        
        // Function to close the modal
        window.closeModal = function() {
            if (!modal) return;
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };
        
        // Close when clicking outside the image
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
        
        // Close with ESC key
        document.addEventListener('keydown', function(evt) {
            evt = evt || window.event;
            if (evt.key === "Escape" && modal.style.display === "block") {
                closeModal();
            }
        });
    }
});