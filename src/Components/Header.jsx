import { format } from "date-fns";
import logo from "/src/assests/logo.png";

const Header = () => {
  return (
    <div className="container2">
      <div className="flex flex-col items-center justify-center mt-9">
        <img className="w-[400px] mb-4" src={logo} alt="" />
        <p className="text-gray-500 mb-2.5">
          Journalism Without Fear or Favour
        </p>
        <p>{format(new Date(), "cccc, MMMM dd, yyyy")}</p>
      </div>
    </div>
  );
};

export default Header;
