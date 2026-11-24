export default function Footer() {
  const footerStyle = {
    backgroundColor: "var(--primary-color)",
    color: "var(--background-color)",
    padding: "2rem",
    marginTop: "4rem",
  };

  const footerContainerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
  };

  const footerTextStyle = {
    color: "var(--background-color)",
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const footerCopyrightTextStyle = {
    color: "var(--background-color)",
    fontSize: "0.8rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <p style={footerTextStyle}>Budget Tracker</p>
        <p style={footerCopyrightTextStyle}>
          &copy; {new Date().getFullYear()} Budget Tracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
