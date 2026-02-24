// Professional AI Assistant - Anubhav Rohilla
// Enhanced with rich professional context and improved interaction logic

(function () {
    'use strict';

    // Advanced technical and professional knowledge base
    const anubhavContext = {
        name: "Anubhav Rohilla",
        role: "AI/ML Engineer",
        mission: "Bridging the gap between cutting-edge Machine Learning models and production-ready business solutions.",
        expertise: ["NLP", "MLOps", "Deep Learning", "Full-Stack AI APIs"],

        platforms: {
            linkedin: {
                url: "https://linkedin.com/in/anubhav-rohilla",
                description: "Over 500+ professional connections. Focuses on sharing insights about AI production pipelines, NLP research, and MLOps best practices."
            },
            github: {
                url: "https://github.com/Anubhav-Rohilla",
                description: "Home to 20+ repositories including the AI Resume Parser (92% NER precision) and high-performance Voice Synthesis pipelines."
            },
            kaggle: {
                url: "#",
                description: "Participates in competitions focusing on time-series forecasting and computer vision challenges."
            }
        },

        career_highlights: [
            "Architected an AI Resume Parser achieving 92% precision in NER.",
            "Built a Real-Time Voice Synthesis pipeline with <400ms latency.",
            "Certified Microsoft Azure AI Engineer Associate.",
            "Standardized data for 98% integrity at Excelerate."
        ]
    };

    const knowledgeBase = {
        greetings: {
            generic: [
                "Hello! I am Anubhav's AI Assistant. How can I help you explore his work today?",
                "Hi there! 👋 Searching for an AI/ML expert? I can tell you all about Anubhav's skills and projects."
            ],
            morning: "Good morning! ☀️ Ready to discuss some intelligent system architecture with Anubhav?",
            afternoon: "Good afternoon! ☕ Exploring Anubhav's AI/ML portfolio?",
            evening: "Good evening! 🌙 How can I assist you with Anubhav's professional details tonight?"
        },

        responses: {
            'skills': `Anubhav's technical arsenal is divided into three core pillars:
                \n🤖 **AI/ML & NLP**: TensorFlow, PyTorch, Transformers, LangChain, and LLM Orchestration.
                \n💻 **Backend Engineering**: Robust APIs using Python (Flask/Django) and Node.js.
                \n🛠️ **MLOps**: Docker, CI/CD, and Azure AI infrastructure for production scaling.`,

            'ai': `As a **Microsoft Certified Azure AI Engineer**, Anubhav focuses on:
                \n• **NLP**: Custom NER models and LLM fine-tuning.
                \n• **Computer Vision**: Real-time detection with OpenCV.
                \n• **Production ML**: Building MLOps pipelines that stay stable under load.`,

            'experience': `Anubhav is currently a **Junior Software Engineer** at Techventive IT Solutions, where he:
                \n• Leads AI feature implementation.
                \n• Architects Python/Flask APIs.
                \n• Manages Salesforce CRM data integrations.
                \nPreviously, he interned at **Excelerate** and **YBI Foundation** focusing on data analysis and forecasting.`,

            'linkedin': `You can find Anubhav on LinkedIn here: <a href="${anubhavContext.platforms.linkedin.url}" target="_blank">linkedin.com/in/anubhav-rohilla</a>. 
                \n${anubhavContext.platforms.linkedin.description}`,

            'github': `Anubhav's GitHub profile showcases his code-first approach: <a href="${anubhavContext.platforms.github.url}" target="_blank">github.com/Anubhav-Rohilla</a>.
                \nHe actively maintains several open-source AI projects.`,

            'platforms': `Anubhav is active across several professional platforms:
                \n💼 **LinkedIn**: Networking and AI Insights.
                \n🐙 **GitHub**: Code and Project Repositories.
                \n📊 **Kaggle**: Data Science Competitions.
                \n📄 **Medium**: Technical writing on AI (Coming soon).`,

            'hire': `Why should you bring Anubhav into your team?
                \n✅ **Production-First Mindset**: He doesn't just build models; he builds *systems*.
                \n✅ **Azure Certified**: Validated expertise in enterprise AI.
                \n✅ **Versatile Builder**: Equally comfortable in a PyTorch notebook or a Docker container.
                \n<a href='contact.html'>📩 Click here to start a conversation</a>.`,

            'projects': `Explore Anubhav's featured work:
                \n📄 **AI Resume Parser**: High-precision recruitment automation.
                \n🗣️ **Voice Cloning**: Authentic synthesis with low-latency.
                \n📈 **Demand Forecasting**: Predictive time-series for retail.
                \n<a href='projects.html'>View Project Gallery →</a>`,

            'contact': `Let's connect! 
                \n📧 **Email**: <a href="mailto:kushrohilla10@gmail.com">kushrohilla10@gmail.com</a>
                \n📱 **Phone**: +91 7217262555
                \n📍 **Location**: Dehradun, IN`,

            'resume': `Review Anubhav's full track record:
                \n📄 <a href='resume.html'>Interactive Resume</a>
                \n⬇️ <a href='assets/Anubhav_Resume.pdf' download>Download PDF</a>`
        },

        keywords: {
            'skills': ['skill', 'stack', 'tech', 'technologies', 'tools', 'know', 'expertise'],
            'ai': ['ai', 'machine learning', 'ml', 'nlp', 'vision', 'llm', 'deep learning'],
            'experience': ['work', 'job', 'history', 'role', 'company', 'position', 'intern'],
            'linkedin': ['linkedin', 'profile'],
            'github': ['github', 'git', 'repo', 'code'],
            'platforms': ['platforms', 'online', 'social', 'internet', 'kaggle', 'medium'],
            'hire': ['hire', 'why', 'benefit', 'value', 'join', 'team'],
            'projects': ['project', 'portfolio', 'built', 'made', 'demo'],
            'contact': ['contact', 'email', 'reach', 'touch', 'call', 'talk'],
            'resume': ['resume', 'cv', 'pdf', 'background']
        },

        fallback: "I couldn't find a specific answer for that. However, I can discuss Anubhav's **skills**, **projects**, **LinkedIn profile**, or **experience**. What would you like to see?"
    };

    const quickReplies = ["Technical Skills", "AI Projects", "LinkedIn Profile", "Contact Info"];

    function createChatbotHTML() {
        const container = document.createElement('div');
        container.className = 'chatbot-container';
        container.innerHTML = `
            <div class="chatbot-window" id="chatbotWindow">
                <div class="chatbot-header">
                    <div class="chatbot-avatar" style="background: var(--accent); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
                         <i data-feather="terminal" style="width: 20px; height: 20px;"></i>
                    </div>
                    <div class="chatbot-info">
                        <h4>Anubhav's AI Assistant</h4>
                        <span>● System Online</span>
                    </div>
                </div>
                <div class="chatbot-messages" id="chatMessages"></div>
                <div class="quick-replies" id="quickReplies">
                    ${quickReplies.map(q => `<button class="quick-reply">${q}</button>`).join('')}
                </div>
                <div class="chatbot-input">
                    <input type="text" id="chatInput" placeholder="Ask about AI, skills, or experience..." autocomplete="off">
                    <button id="chatSend"><i data-feather="send"></i></button>
                </div>
            </div>
            <button class="chatbot-toggle" id="chatbotToggle">
                <i id="chatIcon" data-feather="message-square"></i>
                <i id="closeIcon" data-feather="x" style="display:none;"></i>
            </button>
        `;
        document.body.appendChild(container);
        feather.replace();
    }

    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return knowledgeBase.greetings.morning;
        if (hour < 18) return knowledgeBase.greetings.afternoon;
        return knowledgeBase.greetings.evening;
    }

    function getResponse(input) {
        const lowerInput = input.toLowerCase();

        if (/hi|hello|hey|greetings/i.test(lowerInput)) return getGreeting();
        if (/thanks|thank you/i.test(lowerInput)) return "You're very welcome! Is there anything else about Anubhav's work you'd like to know?";

        for (const [key, keywords] of Object.entries(knowledgeBase.keywords)) {
            if (keywords.some(kw => lowerInput.includes(kw))) {
                return knowledgeBase.responses[key];
            }
        }
        return knowledgeBase.fallback;
    }

    function addMessage(text, isUser = false) {
        const messagesContainer = document.getElementById('chatMessages');
        const message = document.createElement('div');
        message.className = `chat-message ${isUser ? 'user' : 'bot'}`;
        message.innerHTML = text.replace(/\n/g, '<br>');
        messagesContainer.appendChild(message);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        if (!isUser) feather.replace();
    }

    function showTyping() {
        const messagesContainer = document.getElementById('chatMessages');
        const typing = document.createElement('div');
        typing.className = 'typing-indicator';
        typing.id = 'typingIndicator';
        typing.innerHTML = '<span></span><span></span><span></span>';
        messagesContainer.appendChild(typing);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function hideTyping() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }

    function handleUserInput(input) {
        if (!input.trim()) return;
        addMessage(input, true);
        showTyping();
        setTimeout(() => {
            hideTyping();
            addMessage(getResponse(input));
        }, 600);
    }

    function initChatbot() {
        createChatbotHTML();
        const toggle = document.getElementById('chatbotToggle');
        const window = document.getElementById('chatbotWindow');
        const input = document.getElementById('chatInput');
        const sendBtn = document.getElementById('chatSend');
        const chatIcon = document.getElementById('chatIcon');
        const closeIcon = document.getElementById('closeIcon');

        toggle.addEventListener('click', () => {
            const isActive = window.classList.toggle('active');
            toggle.classList.toggle('active', isActive);
            chatIcon.style.display = isActive ? 'none' : 'block';
            closeIcon.style.display = isActive ? 'block' : 'none';
            if (isActive && document.getElementById('chatMessages').children.length === 0) {
                setTimeout(() => addMessage(knowledgeBase.greetings.generic[0]), 300);
            }
            if (isActive) input.focus();
        });

        sendBtn.addEventListener('click', () => {
            handleUserInput(input.value);
            input.value = '';
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleUserInput(input.value);
                input.value = '';
            }
        });

        document.querySelectorAll('.quick-reply').forEach(btn => {
            btn.addEventListener('click', () => handleUserInput(btn.textContent));
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
})();
