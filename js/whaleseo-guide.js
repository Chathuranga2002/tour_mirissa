const buttons = document.getElementById("topicButtons");
const title = document.getElementById("topicTitle");
const description = document.getElementById("topicDescription");
const highlights = document.getElementById("topicHighlights");

fetch("data/seo-topics.json")
    .then(res => res.json())
    .then(data => {

        const topics = data.topics;
        let activeButton = null;

        function loadTopic(topic, button) {

            title.style.opacity = 0;
            description.style.opacity = 0;
            highlights.style.opacity = 0;

            setTimeout(() => {

                title.textContent = topic.title;
                description.innerHTML = topic.description.replace(/\n/g, "<br>");

                highlights.innerHTML = "";

                topic.highlights.forEach(item => {

                    highlights.innerHTML += `
                        <div class="highlight-card">
                            <div class="highlight-icon">
                                ✓
                            </div>

                            <span>
                                ${item}
                            </span>
                        </div>
                    `;

                });

                title.style.opacity = 1;
                description.style.opacity = 1;
                highlights.style.opacity = 1;

            }, 250);

            if (activeButton) {
                activeButton.classList.remove("topic-active");
            }

            button.classList.add("topic-active");
            activeButton = button;
        }

        topics.forEach((topic, index) => {

            const button = document.createElement("button");

            button.className = "topic-btn";

            button.innerHTML = `
                <div>
                    <h4>${topic.title}</h4>
                    <p>${topic.short || "Learn more about this topic"}</p>
                </div>

                <span>
                    →
                </span>
            `;

            button.addEventListener("click", () => {
                loadTopic(topic, button);
            });

            buttons.appendChild(button);

            if (index === 0) {
                loadTopic(topic, button);
            }

        });

    })
    .catch(error => {
        console.error("SEO topics loading error:", error);
    });


const speciesSection = document.querySelector(".species-section");

if (speciesSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                speciesSection.classList.add("show");
            }
        });
    }, {
        threshold: 0.25
    });

    observer.observe(speciesSection);
}