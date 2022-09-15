function Sidebar() {
  return (
    <div>
      <div className="fixed top-24 left-12 h-screen text-white w-56 m-0 flex flex-col whitespace-nowrap text-bold border-r-[1px]">
        <h1 className="mb-5 text-xl">API-documentation</h1>
        <ul>
          <h1 className="text-l m-3">Getting started</h1>
          <div className="m-3 ml-6 font-semibold underline text-gray-400">
            <li>API access</li>
            <li>Registration</li>
            <li>Generate API key</li>
            <li>Terms of use</li>
          </div>
          <h1 className="text-l m-3">Data model</h1>
          <div className="m-3 ml-6 font-semibold underline text-gray-400">
            <li>Format</li>
            <li>Json fields</li>
          </div>

          <h1 className="text-l m-3">Endpoints</h1>
          <div className="m-3 ml-6 font-semibold underlin text-gray-400">
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </div>
          <h1 className="text-l m-3">How to use the API key</h1>
          <div className="m-3 ml-6 font-semibold underlin text-gray-400">
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
