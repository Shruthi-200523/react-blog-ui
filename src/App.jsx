import { useState } from "react";
import "./App.css";

import BlogCard from "./components/BlogCard";
import posts from "./data/posts.json";

function App() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const categories = [
        "All",
        "Technology",
        "AI",
        "Career",
        "Coding",
        "Web Development"
    ];

    const filteredPosts = posts.filter((post) => {
        const matchesSearch =
            post.title
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            post.description
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            post.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="app">

            {/* Header */}

            <header className="header">

                <div className="logo">
                    Shruthi<span>.</span>
                </div>

                <nav>
                    <a href="#home">Home</a>
                    <a href="#posts">Posts</a>
                    <a href="#about">About</a>
                </nav>

            </header>


            {/* Hero */}

            <section id="home" className="hero">

                <div className="hero-content">

                    <p className="small-title">
                        WELCOME TO MY BLOG
                    </p>

                    <h1>
                        Thoughts, ideas &
                        <span> things I'm learning.</span>
                    </h1>

                    <p className="hero-text">
                        A simple space where I share my
                        experiences, coding journey,
                        technology and things I learn along
                        the way.
                    </p>

                </div>

            </section>


            {/* Blog Section */}

            <main id="posts" className="blog-container">

                <div className="section-heading">

                    <div>
                        <p className="small-title">
                            LATEST POSTS
                        </p>

                        <h2>Things I've been learning</h2>
                    </div>

                    <span className="post-count">
                        {filteredPosts.length} posts
                    </span>

                </div>


                {/* Search */}

                <div className="search-area">

                    <div className="search-box">

                        <span>⌕</span>

                        <input
                            type="text"
                            placeholder="Search posts..."
                            value={search}
                            onChange={(event) =>
                                setSearch(event.target.value)
                            }
                        />

                        {search && (
                            <button
                                className="clear-button"
                                onClick={() => setSearch("")}
                            >
                                ×
                            </button>
                        )}

                    </div>

                </div>


                {/* Filters */}

                <div className="filters">

                    {categories.map((item) => (
                        <button
                            key={item}
                            className={
                                category === item
                                    ? "filter-button active"
                                    : "filter-button"
                            }
                            onClick={() =>
                                setCategory(item)
                            }
                        >
                            {item}
                        </button>
                    ))}

                </div>


                {/* Posts */}

                {filteredPosts.length > 0 ? (

                    <div className="blog-grid">

                        {filteredPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                post={post}
                            />
                        ))}

                    </div>

                ) : (

                    <div className="no-results">

                        <h3>No posts found</h3>

                        <p>
                            Try another search or choose
                            a different category.
                        </p>

                        <button
                            onClick={() => {
                                setSearch("");
                                setCategory("All");
                            }}
                        >
                            Clear filters
                        </button>

                    </div>

                )}

            </main>


            {/* About */}

            <section id="about" className="about">

                <p className="small-title">
                    ABOUT THIS PROJECT
                </p>

                <h2>
                    A simple React blog UI.
                </h2>

                <p>
                    This mini project was created to
                    practice React components, props,
                    state, JSON data, search and filtering.
                </p>

            </section>


            {/* Footer */}

            <footer className="footer">

                <p>
                    © 2026 Shruthi
                </p>

                <p>
                    Built with React
                </p>

            </footer>

        </div>
    );
}

export default App;