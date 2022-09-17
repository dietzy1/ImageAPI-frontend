function Sidebar() {
  return (
    <div>
      <div className="fixed top-24 left-10 h-screen text-white w-[68] m-0 flex flex-col whitespace-nowrap text-bold border-r-[1px]">
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
          <div className="m-3 ml-6 font-semibold underline text-gray-400">
            <li>Supported GET endpoints</li>
            <li>Required query parameters.</li>
            <li>Optional query parameters.</li>
            <li>/api/v0/image/random/</li>
            <li>/api/v0/image/:uuid</li>
            <li>/api/v0/images/:tags</li>
            <li>/api/v0/images/random/</li>
          </div>
          <h1 className="text-l m-3">How to use the API key</h1>
          <div className="m-3 ml-6 font-semibold underline text-gray-400">
            <li>How to</li>
            <li>Example implementation</li>
          </div>
          <h1 className="text-l m-3">Full example of ts implementation</h1>
          <div className="m-3 ml-6 font-semibold underline text-gray-400">
            <li>/api/v0/image/random/</li>
            <li>/api/v0/image/:uuid</li>
            <li>/api/v0/images/:tags</li>
            <li>/api/v0/images/random/</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
