import Logo from "../assets/logo-text.png"
const Nav = () => {
  return (
    <nav className=" bg-base-200 w-full sticky top-0 z-50 shadow-sm">

        <div className="max-w-7xl mx-auto md:px-4 py-4 flex items-center justify-between">
          <img src={Logo} alt="DevStack" className="h-8" />
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-500 md:absolute md:left-1/2 md:-translate-x-1/2">
        <li className="text-pink-500 hover:text-pink-700 cursor-pointer transition-colors" > Home</li>
        <li className="hover:text-gray-900 cursor-pointer transition-colors">Technologies</li>
        <li className="hover:text-gray-900 cursor-pointer transition-colors ">Projects</li>
        <li className="hover:text-gray-900 cursor-pointer transition-colors ">About</li>
        <li className="hover:text-gray-900 cursor-pointer transition-colors ">Contact</li>
        </ul>
        <div className="flex items-center gap-4">
            <button className="btn btn-ghost btn-sm">Sign In</button>
            <button className="btn btn-sm rounded-full px-4 bg-pink-500 text-white hover:bg-pink-600 border-none">Sign Up</button>
        </div>
        </div>
    </nav>
  )
}

export default Nav

