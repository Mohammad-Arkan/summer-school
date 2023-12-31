import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProviders";

const Navber = () => {
  const {user, logOut} = useContext(AuthContext)
  console.log(user)

const handleLogOut=()=> {
logOut()
.then(()=>{})
.catch((error)=> console.log(error));
}

    const optionItems = <>
     <li><Link to="/">Home</Link> </li>
     <li><Link to="/secret">Secrite</Link> </li>
     <li><Link to="/class">Classes</Link> </li>
     {
      user? <>  
      <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button>
      <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
      </>:<>
      <li><Link to='/login'>Login</Link></li>
      </>
       }
        </>
    return (
        <div className="navbar  fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {optionItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Summer School</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {optionItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navber;