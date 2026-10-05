function BlogCard({ post }) {
    return (
        <article className="blog-card">

            <div className="card-top">
                <span className="category">
                    {post.category}
                </span>

                <span className="read-time">
                    3 min read
                </span>
            </div>

            <h3>{post.title}</h3>

            <p>{post.description}</p>

            <div className="card-footer">
                <span>By {post.author}</span>

                <button>Read more →</button>
            </div>

        </article>
    );
}

export default BlogCard;