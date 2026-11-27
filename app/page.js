export default function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <h1 className="heading">Welcome to the Budget Tracker App!</h1>
        <p className="home-desc">
          This app helps you track your income and expenses, organize
          transactions by category, and manage your money effectively (
          <span className="bold">in</span> and <span className="bold">out</span>
          ). Simple, Secure, and completely private.
        </p>
        <div className="home-buttons-container">
          <a href="/transaction" className="primary-button">
            Get started
          </a>
          <a href="/faq" className="secondary-button">
            Have a question?
          </a>
        </div>
      </div>
      <div className="home-image-container">
        <img
          className="home-img"
          src="/budget-illustration.png"
          alt="Budget Tracker Illustration"
        />
      </div>
    </section>
  );
}
