export const projects = [
  {
    id: 1,
    title: "Tensr",
    description:
      "Autonomous developer agent harness with an interactive CLI, multi-turn reasoning loops, and multi-provider LLM orchestration via LiteLLM (Gemini, Claude, DeepSeek) with configurable thinking budgets. Engineered a tool registry with execution interceptors: deterministic bash execution, AST-aware diff/patch editing, regex search, and token-aware output truncation. Implemented session serialization, resumption, and stuck/loop detection. Extending to the web with React + Vite.",
    techStack: ["Python", "LiteLLM", "React", "Vite", "Asyncio", "Pydantic"],
    githubUrl: "https://github.com/Ata-Ul-Hai/tensr",
    liveUrl: null,
    period: "Aug 2026 - Present",
  },
  {
    id: 2,
    title: "AniGenerator",
    description:
      "Full-stack AI document-to-video pipeline supporting PDF, DOCX, and TXT ingestion with 20 MB validation, asynchronous generation, progress polling, and user-facing failure states. Secured multi-user job processing with JWT authentication, user-level authorization, SQLAlchemy, and PostgreSQL persistence under strict tenant isolation. Integrated Gemini storyboarding with embedding-based asset matching and Remotion video rendering; containerized for Google Cloud Run via Cloud Build.",
    techStack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Gemini API", "Remotion", "Docker", "Google Cloud Run"],
    githubUrl: "https://github.com/Ata-Ul-Hai/AniGenerator",
    liveUrl: "https://ani-generator.vercel.app/",
    period: "Feb - May 2026",
  },
  {
    id: 3,
    title: "Confab",
    description:
      "Production-ready, real-time voice AI agent (Pipecat, WebRTC) that screens pitch decks and cross-examines the presenter live. Pipelined Groq (Llama 3.3), Deepgram speech-to-text, and Silero VAD for real-time turn-taking and structured evaluations.",
    techStack: ["Python", "Pipecat", "WebRTC", "Groq (Llama 3.3)", "Deepgram", "Silero VAD"],
    githubUrl: "https://github.com/Ata-Ul-Hai/Confab",
    liveUrl: null,
    period: "May 2026",
  },
  {
    id: 4,
    title: "Flash Sale Engine",
    description:
      "High-concurrency distributed checkout backend with an asynchronous, non-blocking pipeline on Express.js REST APIs and BullMQ workers, returning HTTP 202 Accepted for high-throughput ingestion. Prevented overselling under concurrency via Redis atomic operations (DECRBY/SADD), duplicate-request guards, and PostgreSQL row-level locks. Stress-tested with Artillery: 10,000 requests at 1,000 arrivals/sec with zero oversells or crashes.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Redis", "BullMQ", "Docker Compose", "Traefik", "Artillery"],
    githubUrl: "https://github.com/Ata-Ul-Hai/FlashSaleEngine",
    liveUrl: null,
    period: "Jun - Jul 2026",
  },
  {
    id: 5,
    title: "Swirl",
    description:
      "Swirl is a React food ordering app built with Vite, React Router, Redux Toolkit, and Tailwind CSS. It lets users browse restaurants, inspect restaurant menus, add items to a cart, and explore a lazily loaded grocery section.",
    techStack: ["React19", "Axios", "Tailwind CSS", "Redux Toolkit", "Vitest"],
    githubUrl: "https://github.com/Ata-Ul-Hai/Swirl",
    liveUrl: "https://swirl-theta.vercel.app/",
    period: "Jun 2026",
  },
  {
    id: 6,
    title: "Cache Proxy Server",
    description:
      "CLI tool that starts a caching proxy server, it will forward requests to the actual server and cache the responses. If the same request is made again, it will return the cached response instead of forwarding the request to the server.",
    techStack: ["Node", "Axios", "Tailwind CSS", "Redux Toolkit", "Vitest"],
    githubUrl: "https://github.com/Ata-Ul-Hai/cacheProxyServer",
    liveUrl: null,
    period: "Jun 2026",
  }
];
