// export default function Post() {
//   return (
//     <div className="post">
//       <div className="image">
//         <img
//           src="https://img.freepik.com/free-photo/work-desk-computer-neon-lit-home_482257-76476.jpg?size=626&ext=jpg&ga=GA1.1.527613832.1709225495&semt=sph"
//           alt=""
//         />
//       </div>
//       <div className="texts">
//         <h2>Good Morning guys</h2>
//         <p className="info">
//           <a className="author">David Paiza</a>
//           <time>24-01-06 16:45</time>
//         </p>
//         <p className="summary">
//           we will achieve the same result: creating a new React app named
//           my-react-app. Choose the method that best fits your workflow and
//           preferences. Using npx has become more popular due to its convenience
//           and avoids the need for global package installations.
//         </p>
//       </div>
//     </div>
//   );
// }

import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={"https://my-blogify-ji6l.vercel.app/" + cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
