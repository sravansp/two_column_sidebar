import React from "react";
import { RiHome6Line } from "react-icons/ri";
import {
  LuChevronsRight,
  LuCompass,
  LuLayoutDashboard,
  LuPower,
  LuStar,
} from "react-icons/lu";
import { CgMenuLeft } from "react-icons/cg";

import { sidebar } from "./constants";

const Sidebar = ({ isOpen, toggleSidebar, isMobile }) => {
  const [isSubmenu, setIsSubmenu] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [submenuTop, setSubmenuTop] = React.useState(0);
  const [activeItem, setActiveItem] = React.useState(null);

  const handleItemClick = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };
  return (
    <aside className={` bg-white w-auto  text-white flex`}>
      <div className="z-10 flex flex-col h-full bg-white border-r border-gray-200 w-14">
        {/* Logo */}
        <div className="flex items-center px-2.5 py-2.5">
          {(isOpen || !isMobile) && (
            <>
              <div className="size-10 flex items-center justify-center rounded-md bg-[#0c121d] text-white">
                <h1 className="text-xs font-bold text-center">LO GO</h1>
              </div>
            </>
          )}
        </div>

        <button
          className="flex items-center justify-center transition duration-300 ease-in-out rounded-md w-14 h-14"
          onClick={toggleSidebar}
        >
          <CgMenuLeft className="text-[#0c121d]" />
        </button>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto">
          {sidebar.map((item, index) => (
            <div key={index} className="">
              <SidebarItem
                icon={item.icon}
                label={item.title}
                active={activeItem === index}
                onClick={() => handleItemClick(index)}
                onMouseEnter={(top) => {
                  setHoveredIndex(index);
                  setIsSubmenu(true);
                  setSubmenuTop(top);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setIsSubmenu(false);
                }}
              />
              <div
                className={`fixed translate-y- left-14 min-w-36 ${
                  item.submenus && hoveredIndex === index && !isOpen
                    ? "block"
                    : "hidden"
                } transition duration-300 ease-in-out`}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setIsSubmenu(true);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setIsSubmenu(false);
                }}
                style={{
                  top: submenuTop,
                  maxHeight: `calc(100vh - ${submenuTop}px)`,
                  overflowY: "auto",
                }}
              >
                <div className="p-2 bg-[#0c121d] rounded-md shadow-lg">
                  {item.submenus.map((subitem, subindex) => (
                    <SidebarSubItem
                      key={subindex}
                      icon={subitem.icon}
                      label={subitem.title}
                      to={subitem.path}
                      submenus={subitem.submenus}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="">
          <SidebarItem
            icon={<LuChevronsRight className="w-5 h-5" />}
            label="Link name"
          />
          <SidebarItem icon={<LuPower className="w-5 h-5" />} label="Logout" />
        </div>
      </div>

      <div
        className={`absolute top-0 left-14 flex items-center justify-center p-2 h-full duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform  bg-white border-r border-gray-200  w-52 overflow-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full h-full bg-gray-50 rounded-2xl">

        <nav className="p-4">
            {activeItem !== null && sidebar[activeItem]?.submenus && (
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-slate-900 font-medium">
                    {sidebar[activeItem].title}
                  </span>
                </div>
                
                <div className="space-y-1">
                  {sidebar[activeItem].submenus.map((subitem, subindex) => (
                      <SidebarSubItem
                      key={subindex}
                      icon={subitem.icon}
                      label={subitem.title}
                      to={subitem.path}
                      submenus={subitem.submenus}
                      color="dark"
                    />
                    // <div key={subindex}>
                    //   <div className="flex items-center px-3 py-2 text-sm text-slate-600 
                    //     rounded-lg hover:bg-slate-200 transition-all duration-200 
                    //     cursor-pointer"
                    //   >
                    //     {subitem.icon && (
                    //       <span className="mr-2 text-slate-500">{subitem.icon}</span>
                    //     )}
                    //     <span>{subitem.title}</span>
                    //   </div>
                    //   {subitem.submenus && (
                    //     <div className="ml-4 mt-1 space-y-1">
                    //       {subitem.submenus.map((childItem, childIndex) => (
                    //         <div
                    //           key={childIndex}
                    //           className="flex items-center px-3 py-1.5 text-xs 
                    //             text-slate-500 rounded-lg hover:bg-slate-200 
                    //             transition-all duration-200 cursor-pointer"
                    //         >
                    //           {childItem.icon && (
                    //             <span className="mr-2">{childItem.icon}</span>
                    //           )}
                    //           <span>{childItem.title}</span>
                    //         </div>
                    //       ))}
                    //     </div>
                    //   )}
                    // </div>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </aside>
  );
};

const SidebarItem = ({ icon, active, onClick, onMouseEnter, onMouseLeave }) => {
  const itemRef = React.useRef(null);

  const handleMouseEnter = (e) => {
    const itemPosition = itemRef.current.getBoundingClientRect();
    onMouseEnter(itemPosition.top);
  };
  return (
    <div
      ref={itemRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
      className={` relativeflex group items-center px-2.5 py-1.5 cursor-pointer`}
    >
      <div
        className={` rounded-md p-2 w-full flex ${
          active ? "bg-primary" : "hover:bg-slate-800"
        }`}
      >
        <div className="text-slate-300">{icon}</div>
      </div>
    </div>
  );
};

const SidebarSubItem = ({ icon, label, to, submenus, color }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-1">
      <div
        onClick={toggleSubmenu}
        className={`flex items-center justify-between p-2 text-white rounded  
          hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 ease-in-out
           hover:shadow-sm
          cursor-pointer group ${color === "dark" ? "text-slate-600 hover:bg-slate-200" : ""}`}
      >
        <div className="flex items-center transition-all duration-200 ease-in-out group-hover:translate-x-1">
          {icon && <span className="mr-2">{icon}</span>}
          <span className="text-xs">{label}</span>
        </div>
        {submenus && (
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-90" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </div>
      {submenus && (
        <div
          className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "max-h-[1000px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2"
            }`}
        >
          {submenus.map((subitem, index) => (
            <SidebarSubItem
              key={index}
              icon={subitem.icon}
              label={subitem.title}
              to={subitem.path}
              submenus={subitem.submenus}
              color="dark"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
