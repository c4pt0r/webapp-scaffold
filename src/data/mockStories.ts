const now = Math.floor(Date.now() / 1000);
const oneDayInSeconds = 86400;

export const mockStories = [
  {
    id: 1,
    title: "Rust's Most Unrecognized Contributor",
    url: "https://example.com/rust-contributor",
    score: 789,
    by: "rustacean",
    time: now, // today
    descendants: 234,
  },
  {
    id: 2,
    title: "The Future of AI: A Deep Dive",
    url: "https://example.com/ai-future",
    score: 567,
    by: "airesearcher",
    time: now - oneDayInSeconds, // yesterday
    descendants: 145,
  },
  {
    id: 3,
    title: "WebAssembly: The Future of Web Development",
    url: "https://example.com/wasm-future",
    score: 432,
    by: "webdev",
    time: now - (oneDayInSeconds * 2), // 2 days ago
    descendants: 89,
  },
  {
    id: 4,
    title: "Understanding Quantum Computing",
    url: "https://example.com/quantum",
    score: 876,
    by: "quantum_dev",
    time: now - (oneDayInSeconds * 2), // 2 days ago
    descendants: 234,
  },
  {
    id: 5,
    title: "The Rise of Remote Work",
    url: "https://example.com/remote-work",
    score: 654,
    by: "future_work",
    time: now, // today
    descendants: 167,
  },
  // Add more mock stories here...
]; 