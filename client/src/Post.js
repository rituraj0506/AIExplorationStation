export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://img.freepik.com/free-photo/work-desk-computer-neon-lit-home_482257-76476.jpg?size=626&ext=jpg&ga=GA1.1.527613832.1709225495&semt=sph"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Good Morning guys</h2>
        <p className="info">
          <a className="author">David Paiza</a>
          <time>24-01-06 16:45</time>
        </p>
        <p className="summary">
          we will achieve the same result: creating a new React app named
          my-react-app. Choose the method that best fits your workflow and
          preferences. Using npx has become more popular due to its convenience
          and avoids the need for global package installations.
        </p>
      </div>
    </div>
  );
}
