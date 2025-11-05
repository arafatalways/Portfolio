import { Link } from "react-router-dom";

export const MainMenu = () => {
  const menus = [
    {
      id: 1,
      Link: "/",
      label: "Home",
    },
    {
      id: 1,
      Link: "/about",
      label: "About",
    },
    {
      id: 1,
      Link: "/skills",
      label: "Skills",
    },
    {
      id: 1,
      Link: "/projects",
      label: "Projects",
    },
  ];

  return (
    <div>
      <ul className="flex gap-x-10 text-[18px] font-semibold">
        {menus.map((item) => (
          <li>
            <Link key={item.id} to={item.Link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
