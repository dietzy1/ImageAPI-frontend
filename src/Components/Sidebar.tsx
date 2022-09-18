import { Link } from "react-scroll";

<Link to="" spy={true} smooth={true} offset={0}>
  Get started
</Link>;

function Sidebar() {
  return (
    <div>
      <div className="fixed top-36 left-10 h-screen  m-0 flex flex-col whitespace-nowrap border-r-[1px] text-[#fff] ">
        <Link to="API-Documentation" spy={true} smooth={true} offset={-100}>
          <h1 className="mb-2 text-xl hover:text-greeny">API-documentation</h1>
        </Link>

        <ul>
          <Link to="Getting started" spy={true} smooth={true} offset={-75}>
            <h1 className="text-xl mt-3 ml-3 font-bold hover:text-greeny">
              Getting started
            </h1>
          </Link>

          <div className="mb-1 ml-3">
            <li className="hover:text-greeny">
              <Link to="API access" spy={true} smooth={true} offset={-75}>
                {"> "}API access
              </Link>
            </li>
            <li className="hover:text-greeny">
              <Link to="Registration" spy={true} smooth={true} offset={-75}>
                {"> "}Registration
              </Link>
            </li>
            <li className="hover:text-greeny">
              <Link to="Generate API key" spy={true} smooth={true} offset={-75}>
                {"> "}Generate API key
              </Link>
            </li>
            <li className="hover:text-greeny">
              <Link to="Terms of use" spy={true} smooth={true} offset={-75}>
                {"> "}Terms of use
              </Link>
            </li>
          </div>

          <Link to="Data model" spy={true} smooth={true} offset={-75}>
            <h1 className="text-xl mt-3 ml-3 font-bold hover:text-greeny">
              Data model
            </h1>
          </Link>

          <div className="mb-1 ml-3">
            <li className="hover:text-greeny">
              <Link to="Format" spy={true} smooth={true} offset={-75}>
                {"> "}Format
              </Link>
            </li>

            <li className="hover:text-greeny">
              <Link to="Json fields" spy={true} smooth={true} offset={-75}>
                {"> "}Json fields
              </Link>
            </li>
          </div>

          <Link to="Endpoints" spy={true} smooth={true} offset={-75}>
            <h1 className="text-xl mt-3 ml-3 font-bold hover:text-greeny">
              Endpoints
            </h1>
          </Link>

          <div className="mb-1 ml-3">
            <li className="hover:text-greeny">
              <Link
                to="Supported GET endpoints"
                spy={true}
                smooth={true}
                offset={-75}
              >
                {"> "}Supported GET endpoints
              </Link>
            </li>
            <li className="hover:text-greeny">
              <Link
                to="Required query parameters"
                spy={true}
                smooth={true}
                offset={-75}
              >
                {"> "}Required query parameters
              </Link>
            </li>
            <li className="hover:text-greeny">
              <Link
                to="Optional query parameters"
                spy={true}
                smooth={true}
                offset={-75}
              >
                {"> "}Optional query parameters
              </Link>
            </li>
            <li className="hover:text-greeny">
              <Link
                to="/api/v0/image/random/"
                spy={true}
                smooth={true}
                offset={-75}
              >
                {"> "}/api/v0/image/random/
              </Link>
            </li>
            <li className="hover:text-greeny">
              <Link
                to="/api/v0/image/:uuid"
                spy={true}
                smooth={true}
                offset={-75}
              >
                {"> "}/api/v0/image/:uuid
              </Link>
            </li>
            <li className="hover:text-greeny">
              <Link
                to="/api/v0/images/:tags"
                spy={true}
                smooth={true}
                offset={-75}
              >
                {"> "}/api/v0/images/:tags
              </Link>
            </li>
            <li className="hover:text-greeny">
              <Link
                to="/api/v0/images/random/"
                spy={true}
                smooth={true}
                offset={-75}
              >
                {"> "}/api/v0/images/random/
              </Link>
            </li>
          </div>
          <Link
            to="How to use the API key"
            spy={true}
            smooth={true}
            offset={-75}
          >
            <h1 className="text-xl mt-3 ml-3 font-bold hover:text-greeny">
              How to use the API key
            </h1>
          </Link>

          <div className="mb-1 ml-3">
            <li className="hover:text-greeny">
              <Link to="How to" spy={true} smooth={true} offset={-75}>
                {"> "}How to
              </Link>
            </li>
            <li className="hover:text-greeny">
              <Link to="env file" spy={true} smooth={true} offset={-75}>
                {"> "}env file
              </Link>
            </li>
          </div>

          <Link
            to="Full example of endpoint implementation"
            spy={true}
            smooth={true}
            offset={-75}
          >
            <h1 className="text-xl ml-3 mt-3 font-bold hover:text-greeny ">
              Full example of
            </h1>
            <h1 className="text-xl  ml-3 font-bold mr-3 hover:text-greeny">
              endpoint implementation
            </h1>
          </Link>

          <div className="mb-1 ml-3">
            <li className="hover:text-greeny">
              <Link
                to="1/api/v0/image/random/"
                spy={true}
                smooth={true}
                offset={-75}
              >
                {"> "}/api/v0/image/random/
              </Link>
            </li>
            <li className="hover:text-greeny">
              <Link
                to="1/api/v0/image/:uuid"
                spy={true}
                smooth={true}
                offset={-75}
              >
                {"> "}/api/v0/image/:uuid
              </Link>
            </li>
            <li className="hover:text-greeny">
              <Link
                to="1/api/v0/images/:tags"
                spy={true}
                smooth={true}
                offset={-75}
              >
                {"> "}/api/v0/images/:tags
              </Link>
            </li>
            <li className="hover:text-greeny">
              <Link
                to="1/api/v0/images/random/"
                spy={true}
                smooth={true}
                offset={-75}
              >
                {"> "}/api/v0/images/random/
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
