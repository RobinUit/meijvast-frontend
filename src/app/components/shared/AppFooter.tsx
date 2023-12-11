import "./AppFooter.scss";

export default function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footerElements">
        <div className="branding">Meijvast B.V.</div>
        <div className="copyright">
          © 2023 - {currentYear} | Website door{" "}
          <a
            href="https://www.linkedin.com/in/robinuit/"
            target="_blank"
            rel="noreferrer"
            className="creator-link"
          >
            Robin Uitbeijerse
          </a>
        </div>
      </div>
    </footer>
  );
}
