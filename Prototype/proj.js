// Project Details Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Project Details Modal
    const projectModal = document.getElementById("projectModal");
    const projectModalContent = document.getElementById("projectModalContent");
    
    if (projectModal && projectModalContent) {
        const projectsData = {
            "paco manila": {
                title: "Paco Manila, Commercial Establishment",
                image: "Images/project1.png",
                description: "Located in Paco, Manila, this newly completed commercial establishment is a modern 4-story building constructed from the ground up. The structure features a robust concrete frame with steel reinforcements, ensuring durability and stability. Completed in 2024, the building offers a versatile and secure space for businesses in a prime urban location.",
                date: "2024"
            },
            "mosoleum": {
                title: "Mausoleum, Established from Ground Up ",
                image: "Images/project2-1.png",
                description: "Completed in 2023, this newly constructed mausoleum in Tierra Santa, Valenzuela, was built from the ground up to serve as a serene and dignified resting place. The structure features reinforced concrete walls and pillars for long-lasting durability, complemented by elegant stone or tile finishes for a polished appearance. The mausoleum blends architectural simplicity with solemn beauty, providing a lasting tribute in a tranquil setting.",
                date: "2023"
            },
            "elec-warehouse": {
                title: "Electrical Warehouse, Industrial",
                image: "Images/project5-1.png",
                description: "Completed in 2024, this industrial electrical warehouse in Meycauayan, Bulacan, was designed for efficient storage and operational workflow. The structure features a sturdy steel frame to accommodate large equipment and inventory. The scope of work included the assembly, activation, and commissioning of advanced packaging machines, ensuring seamless integration into the facility. Built for durability and functionality, the warehouse incorporates proper electrical wiring, and safety systems to support industrial operations.",
                date: "2024"
            },
            "solar1": {
                title: "Solar Hybrid System",
                image: "Images/Project Solar 1-2.png",
                description: "This residential project in Karuhatan, Valenzuela City features the supply and installation of a 6kW solar hybrid system with a complete battery setup, providing sustainable and reliable energy. The system includes high-efficiency solar panels, a hybrid inverter, and deep-cycle battery storage, ensuring uninterrupted power supply even during outages. Designed for seamless integration with the home’s electrical grid, the installation prioritizes safety, efficiency, and long-term cost savings.",
                date: ""
            },
            "solar2": {
                title: "Solar On Grid System",
                image: "Images/Project Solar 2-1.png",
                description: "This residential project in Novaliches, Quezon City involved the professional supply and installation of a complete 10.5kW on-grid solar system featuring high-efficiency panels, a grid-tied inverter, durable mounting structures, and full safety components, all seamlessly integrated with the home's electrical system for optimal energy savings and net metering compliance.",
                date: ""
            },
            "solar3": {
                title: "5Kw Solar Hybrid System",
                image: "Images/Project Solar 3-1.png",
                description: "This residential solar installation in San Pedro, Laguna involved the complete supply and installation of a 5kW hybrid solar system, integrating high-efficiency solar panels, a hybrid inverter, and a battery storage system to ensure reliable 24/7 power supply with seamless switching between solar, battery, and grid power for optimal energy independence and backup protection.",
                date: ""
            },
            "wp": {
                title: "Hotel Water Proofing",
                image: "Images/Project WP 1-2.png",
                description: "This waterproofing project involved comprehensive protective coating applications for a hotel structure in Quiapo, Manila, utilizing high-performance membrane systems and sealants to ensure complete moisture resistance for roofs, terraces, basements, and wet areas while maintaining the building's architectural integrity.",
                date: ""
            },
            "cell-site1": {
                title: "Supply and Installation of Cell Site GenSet Pad",
                image: "Images/Project Com 1-2.png",
                description: "This project involved the complete supply and installation of a Cell Site GenSet Pad in Bugallon, Pangasinan, covering all civil, structural, and electrical works. The scope included site clearing, excavation, reinforced foundation works, slab construction, structural fabrication, grounding system installation, electrical works, gravel bedding, and finishing/painting—ensuring a durable and fully operational base for the generator set with proper safety and compliance standards.",
                date: ""
            },
            "cell-site2": {
                title: "Supply and Installation of Cell Site GenSet Pad",
                image: "Images/Project Com 2.png",
                description: "This project involved the supply and installation of a Cell Site GenSet Pad in San Rafael, Bulacan, covering structural, electrical, and finishing works. The scope included structural installation of the base frame and supports, proper grounding system setup, complete electrical wiring and connections, and final finishing/painting—ensuring a durable, weather-resistant, and fully functional platform for the generator set with compliance to safety and operational standards.",
                date: ""
            },
            "cell-site3": {
                title: "Cell-Site GenSet Pad",
                image: "Images/Project Com 3-1.png",
                description: "This project in Mexico, Pampanga involved the complete turnkey supply and installation of a Cell Site GenSet Pad, including site clearing, excavation, reinforced concrete foundation and slab works with rebar fabrication and pouring, structural fabrication and installation of trusses and roofing, comprehensive electrical and grounding system installation, and protective finishing and painting to create a durable, weather-resistant, and fully compliant power base meeting all technical and safety standards for reliable cell site operations.",
                date: ""
            },
            "residential 1": {
                title: "Residential Establishment",
                image: "Images/Project Com 3-1.png",
                description: "This project involved the complete ground-up construction of a residential property in Tagaytay, covering all phases from site preparation to final finishes. The scope included foundation works, structural framing, masonry, roofing, electrical and plumbing installations, interior and exterior finishes, and landscaping, resulting in a durable and aesthetically pleasing home designed to complement Tagaytay's cool climate and scenic surroundings.",
                date: ""
            },
            "ind 1": {
                title: "JPMD ENT. Subcon Project",
                image: "Images/Project Ind 2-1.png",
                description: "The JPMD ENT. Subcon Project involved subcontracting services for a construction project located along Singalong St., Ermita, Manila, executed from February 2021 to April 2021. The scope included specialized trade works such as structural, electrical, plumbing, or finishing installations, ensuring timely and quality delivery in compliance with project specifications and safety standards.",
                date: "2021"
            },
        };
        
        // Function to open project modal
        window.openProjectModal = function(projectId) {
            const project = projectsData[projectId];
            if (!project) return;
            
            projectModalContent.innerHTML = `
                <div class="project-details">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="project-info-text">
                        <h2>${project.title}</h2>
                        <p><strong>Project Date:</strong> ${project.date}</p>
                        <p><strong>Description:</strong> ${project.description}</p>
                    </div>
                </div>
            `;
            
            projectModal.style.display = "block";
            document.body.style.overflow = "hidden";
        };
        
        // Function to close project modal
        window.closeProjectModal = function() {
            projectModal.style.display = "none";
            document.body.style.overflow = "auto";
        };
        
        // Close when clicking outside the modal content
        projectModal.addEventListener('click', function(event) {
            if (event.target === projectModal) {
                closeProjectModal();
            }
        });
        
        // Close with ESC key
        document.addEventListener('keydown', function(evt) {
            if (evt.key === "Escape" && projectModal.style.display === "block") {
                closeProjectModal();
            }
        });
        
        // Attach click handlers to all "View Details" buttons
        document.querySelectorAll('.project-card .btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const projectCard = this.closest('.project-card');
                const projectId = projectCard.getAttribute('id') || 
                                 projectCard.querySelector('img').alt.toLowerCase().replace(/\s+/g, '-');
                openProjectModal(projectId);
            });
        });
    }
});