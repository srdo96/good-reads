import { Link, useMatch, useResolvedPath } from "react-router-dom";

function MyLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={{ color: match ? "yellow" : "white" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
export default MyLink;
