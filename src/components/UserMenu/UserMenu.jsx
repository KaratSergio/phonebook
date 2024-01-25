import { useDispatch, useSelector } from "react-redux";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

      return (
        <dir>
          <p>Welcome, {user.name}</p>
          <button type="button" onClick={() => dispatch(logOut())}>
            Logout
          </button>
        </dir>
      );
}

export default UserMenu;