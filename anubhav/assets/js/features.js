// Anubhav Rohilla Portfolio - Extra Features logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Light/Dark Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            const icon = themeBtn.querySelector('i');
            if (body.classList.contains('light-theme')) {
                icon.setAttribute('data-feather', 'moon');
            } else {
                icon.setAttribute('data-feather', 'sun');
            }
            feather.replace();
        });
    }

    // 2. Interactive NER Lab Demo
    const nerInput = document.getElementById('ner-input');
    const nerOutput = document.getElementById('ner-result');
    const nerBtn = document.getElementById('ner-btn');

    if (nerBtn && nerInput && nerOutput) {
        const entityMap = {
            "Anubhav Rohilla": "person",
            "Azure": "org",
            "Python": "skill",
            "TensorFlow": "skill",
            "PyTorch": "skill",
            "MLOps": "skill",
            "Dehradun": "loc",
            "Microsoft": "org"
        };

        nerBtn.addEventListener('click', () => {
            let text = nerInput.value;
            let highlighted = text;

            Object.keys(entityMap).forEach(entity => {
                const type = entityMap[entity];
                const regex = new RegExp(`\\b${entity}\\b`, 'gi');
                highlighted = highlighted.replace(regex, `<span class="ner-tag tag-${type}">${entity}</span>`);
            });

            nerOutput.innerHTML = highlighted || "Start typing to see AI in action...";
        });
    }

    // 3. Neural Defender Game
    const gameContainer = document.getElementById('game-container');
    const startBtn = document.getElementById('start-game');
    const gameOverlay = document.getElementById('game-overlay');
    const scoreDisplay = document.getElementById('score');

    let score = 0;
    let gameActive = false;
    let playerPos = 50;

    if (gameContainer && startBtn) {
        const player = document.createElement('div');
        player.className = 'game-player';
        player.innerHTML = '<i data-feather="terminal"></i>';
        gameContainer.appendChild(player);
        feather.replace();

        startBtn.addEventListener('click', startGame);

        function startGame() {
            gameActive = true;
            gameOverlay.style.display = 'none';
            score = 0;
            updateScore();
            spawnData();
        }

        function updateScore() {
            scoreDisplay.textContent = `Accuracy: ${score}%`;
        }

        gameContainer.addEventListener('mousemove', (e) => {
            if (!gameActive) return;
            const rect = gameContainer.getBoundingClientRect();
            let x = ((e.clientX - rect.left) / rect.width) * 100;
            x = Math.max(5, Math.min(95, x));
            playerPos = x;
            player.style.left = `${x}%`;
        });

        function spawnData() {
            if (!gameActive) return;

            const data = document.createElement('div');
            const isGood = Math.random() > 0.3;
            data.className = `falling-data ${isGood ? 'good-data' : 'bad-data'}`;
            data.innerHTML = isGood ? '1' : '0';
            data.style.left = `${Math.random() * 90 + 5}%`;
            data.style.top = '-30px';
            gameContainer.appendChild(data);

            let top = -30;
            const fallInterval = setInterval(() => {
                if (!gameActive) {
                    clearInterval(fallInterval);
                    data.remove();
                    return;
                }

                top += 3 + (score / 20); // Faster as score increases
                data.style.top = `${top}px`;

                // Collision Detection
                if (top > 320 && top < 380) {
                    const dataLeft = parseFloat(data.style.left);
                    if (Math.abs(dataLeft - playerPos) < 10) {
                        if (isGood) {
                            score += 5;
                            updateScore();
                            createParticle(dataLeft, top, '#64ffda');
                        } else {
                            endGame("Runtime Error: Model Overfit by Bad Data!");
                        }
                        clearInterval(fallInterval);
                        data.remove();
                    }
                }

                if (top > 400) {
                    if (isGood) {
                        // Managed to miss good data? No penalty for now but it's hard!
                    }
                    clearInterval(fallInterval);
                    data.remove();
                }
            }, 20);

            setTimeout(spawnData, 800 - Math.min(500, score * 5));
        }

        function createParticle(x, y, color) {
            const p = document.createElement('div');
            p.style.position = 'absolute';
            p.style.left = `${x}%`;
            p.style.top = `${y}px`;
            p.style.width = '10px';
            p.style.height = '10px';
            p.style.background = color;
            p.style.borderRadius = '50%';
            p.style.pointerEvents = 'none';
            p.style.transition = 'all 0.5s ease-out';
            gameContainer.appendChild(p);

            setTimeout(() => {
                p.style.transform = `translate(${(Math.random() - 0.5) * 50}px, -50px) scale(0)`;
                p.style.opacity = '0';
            }, 10);
            setTimeout(() => p.remove(), 600);
        }

        function endGame(reason) {
            gameActive = false;
            gameOverlay.style.display = 'flex';
            gameOverlay.querySelector('h3').textContent = "Model Training Paused";
            gameOverlay.querySelector('p').textContent = `Final Accuracy: ${score}% \n Reason: ${reason}`;
            gameOverlay.querySelector('button').textContent = "Re-train Model";

            // Funny message based on score
            if (score > 100) {
                gameOverlay.querySelector('p').innerHTML += "<br><br><strong style='color:#64ffda'>Level: SOTA (State of the Art)</strong>";
            }
        }
    }
    // 3. Neural Defender Game (Existing code remains...)
    // ... logic ...

    // 4. 3D Skills Connectivity Graph
    initSkillsGraph();

    // 5. Real-Time Vision Laboratory
    initVisionLab();

    // 6. Engineering Terminal
    initTerminal();

    // 7. Performance Dashboard
    initDashboard();
});

// --- 4. 3D Skills Graph Implementation ---
function initSkillsGraph() {
    const container = document.getElementById('skills-graph-container');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const nodes = [];
    const skills = ['Python', 'NLP', 'Azure', 'TensorFlow', 'PyTorch', 'MLOps', 'Docker', 'SQL', 'Flutter'];

    // Create Nodes
    skills.forEach((skill, i) => {
        const geometry = new THREE.SphereGeometry(0.5, 32, 32);
        const material = new THREE.MeshPhongMaterial({
            color: 0x10b981,
            emissive: 0x10b981,
            emissiveIntensity: 0.2,
            shininess: 100
        });
        const sphere = new THREE.Mesh(geometry, material);

        sphere.position.x = (Math.random() - 0.5) * 10;
        sphere.position.y = (Math.random() - 0.5) * 10;
        sphere.position.z = (Math.random() - 0.5) * 10;

        scene.add(sphere);
        nodes.push(sphere);
    });

    // Create Connections
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.2 });
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (Math.random() > 0.6) {
                const points = [nodes[i].position, nodes[j].position];
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(geometry, lineMaterial);
                scene.add(line);
            }
        }
    }

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 12;

    function animate() {
        requestAnimationFrame(animate);
        scene.rotation.y += 0.005;
        scene.rotation.x += 0.002;
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// --- 5. Vision Laboratory Implementation ---
async function initVisionLab() {
    const video = document.getElementById('webcam');
    const canvas = document.getElementById('vision-canvas');
    const btn = document.getElementById('vision-btn');
    if (!video || !btn) return;

    let model = null;
    let isDetecting = false;

    btn.addEventListener('click', async () => {
        if (!isDetecting) {
            btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Loading Model...';
            btn.disabled = true;

            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                model = await cocoSsd.load();
                isDetecting = true;
                btn.disabled = false;
                btn.textContent = 'Stop Detection';
                detectFrame();
            } catch (err) {
                console.error(err);
                btn.textContent = 'Camera Access Denied';
            }
        } else {
            isDetecting = false;
            const stream = video.srcObject;
            stream.getTracks().forEach(track => track.stop());
            video.srcObject = null;
            btn.textContent = 'Activate Vision';
        }
    });

    async function detectFrame() {
        if (!isDetecting) return;
        const predictions = await model.detect(video);
        renderPredictions(predictions);
        requestAnimationFrame(detectFrame);
    }

    function renderPredictions(predictions) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        predictions.forEach(p => {
            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 2;
            ctx.strokeRect(...p.bbox);

            ctx.fillStyle = '#10b981';
            ctx.font = '12px Poppins';
            ctx.fillText(`${p.class} (${Math.round(p.score * 100)}%)`, p.bbox[0], p.bbox[1] > 10 ? p.bbox[1] - 5 : 10);
        });
    }
}

// --- 6. Terminal Implementation ---
function initTerminal() {
    const toggle = document.getElementById('terminal-toggle');
    const container = document.getElementById('terminal-container');
    const close = document.getElementById('terminal-close');
    const input = document.getElementById('terminal-input');
    const body = document.getElementById('terminal-body');

    if (!toggle) return;

    toggle.addEventListener('click', () => {
        container.style.display = container.style.display === 'flex' ? 'none' : 'flex';
        if (container.style.display === 'flex') input.focus();
    });

    close.addEventListener('click', () => container.style.display = 'none');

    const commands = {
        'help': 'Available commands: about, projects, skills, clear, contact, date',
        'about': 'Anubhav Rohilla: AI/ML Engineer specialized in NLP and MLOps.',
        'projects': 'Check the "Projects" page for full case studies on Resume Parsers and Demand Forecasting.',
        'skills': 'Core: Python, TensorFlow, PyTorch, Azure, Flutter, Docker.',
        'contact': 'Email: kushrohilla10@gmail.com | LinkedIn: /in/anubhav-rohilla',
        'date': new Date().toString(),
        'ls': 'about.md  projects.cfg  skills.bin  contact.txt',
        'clear': 'clear'
    };

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.toLowerCase().trim();
            const line = document.createElement('div');
            line.innerHTML = `<span class="prompt">guest@anubhav:~$</span> ${cmd}`;
            body.appendChild(line);

            if (cmd === 'clear') {
                body.innerHTML = '';
            } else if (commands[cmd]) {
                const response = document.createElement('div');
                response.style.color = '#fff';
                response.textContent = commands[cmd];
                body.appendChild(response);
            } else if (cmd !== '') {
                const error = document.createElement('div');
                error.style.color = '#ef4444';
                error.textContent = `Command not found: ${cmd}`;
                body.appendChild(error);
            }

            input.value = '';
            body.scrollTop = body.scrollHeight;
        }
    });
}

// --- 7. Dashboard Implementation ---
function initDashboard() {
    const ctx = document.getElementById('metricsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Model Accuracy (%)',
                data: [82, 88, 91, 94.2],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.4,
                fill: true
            }, {
                label: 'Training Speed (ms)',
                data: [450, 380, 420, 320],
                borderColor: '#94a3b8',
                borderDash: [5, 5],
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { labels: { color: '#94a3b8' } }
            },
            scales: {
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
                x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } }
            }
        }
    });
}
