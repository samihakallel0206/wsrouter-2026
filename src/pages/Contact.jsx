import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent:"center", margin:" 50px 10px", gap:"20px"}}>
        <div>
          <Link to="/contact/users">Users</Link>
        </div>
        <div>
          <Link to="/contact/settings">Settings</Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Contact;
