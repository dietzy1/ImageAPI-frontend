import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

function Documentation() {
  //mt is 44max-w-[650px]
  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className="flex flex-col justify-center pt-24 ">
        <div className="max-w-[850px] w-full mx-auto p-8 px-8 ">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            API-Documentation
          </h2>

          <h2 className="text-4xl font-bold text-white underline mb-5 pl-4">
            Getting started
          </h2>
          <div className="relative border-l border-gray-200 dark:border-gray-700 pl-4 mb-10 mt-2">
            <div className="flex flex-col text-gray-400 py-2">
              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                API access
              </span>

              <span className="mb-4">
                To access the API, please create an developer account first.
              </span>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                Registration
              </span>

              <span className="mb-4">
                Register for API usage by clicking the sign up bottum at the top
                right. This part is done purely to ratelimit overly excessive
                use. Once you have been successfully registered as a user, go
                ahead and click the account button at the top right which leads
                to the account page.
              </span>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                Generate API key
              </span>
              <span className="mb-4">
                At the account page you are able to see the custom generated
                API-key for your account. This key is required to access the
                API. Incase your key has been compromised, you can generate a
                new one at any time, however only one key can be active at a
                time.
              </span>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                Terms of use
              </span>
              <span className="mb-4">
                The API is currently in beta and is subject to change. The
                service is free of charge and should be accessible to anyone
                with a fair usecase. However I do reserve myself the right to
                terminate any user incase of malicious interaction.
              </span>
              {/* </div> */}
              <h2 className="text-4xl font-bold text-white underline mb-5">
                Data model
              </h2>
              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                Format
              </span>
              <span className="mb-4">
                The data will be sent in a json format.
              </span>
              <span className="mb-4">
                If a single image is requested then a single json object will be
                returned. If multiple images are requested an array of json
                objects will be returned.
              </span>
              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                Json fields
              </span>
              <span className="mb-4">
                The objects contains the following fields:
              </span>

              <div className="overflow-x-auto relative shadow-md sm:rounded-lg pb-4">
                <table className="w-full text-base text-left text-gray-400">
                  <thead className="text-xs uppercase bg-gray-800  text-gray-400">
                    <tr>
                      <th className="py-3 px-6">Field</th>
                      <th className="py-3 px-6">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-[#151922] dark:border-gray-700 ">
                      <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        "name"
                      </th>
                      <td className="py-4 px-6">"string"</td>
                    </tr>

                    <tr className=" border-b bg-[#151922] dark:border-gray-700 ">
                      <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        "uuid"
                      </th>
                      <td className="py-4 px-6">"string"</td>
                    </tr>

                    <tr className="border-b bg-[#151922] dark:border-gray-700 ">
                      <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        "tags"
                      </th>
                      <td className="py-4 px-6">"array"</td>
                    </tr>

                    <tr className=" border-b bg-[#151922] dark:border-gray-700 ">
                      <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        "created"
                      </th>
                      <td className="py-4 px-6">"time.Time"</td>
                    </tr>

                    <tr className="border-b bg-[#151922] border-gray-700 ">
                      <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        "filepath"
                      </th>
                      <td className="py-4 px-6">"string"</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-4xl font-bold text-white underline">
                Endpoints
              </h2>
              <div className="flex flex-col text-gray-400 py-2">
                <span className="mb-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                  These GET request endpoints are currently supported.
                </span>

                {/*This is the breakpoint where shit is being put in*/}
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg pb-4">
                  <table className="w-full text-base text-left text-gray-400">
                    <thead className="text-xs uppercase bg-gray-800  text-gray-400">
                      <tr>
                        <th className="py-3 px-6">Method</th>
                        <th className="py-3 px-6">URL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-[#151922] dark:border-gray-700 ">
                        <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          hmmm
                        </th>
                        <td className="py-4 px-6">"string"</td>
                      </tr>

                      <tr className=" border-b bg-[#151922] dark:border-gray-700 ">
                        <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          hmm
                        </th>
                        <td className="py-4 px-6">{endpoint1}</td>
                      </tr>

                      <tr className="border-b bg-[#151922] dark:border-gray-700 ">
                        <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          "tags"
                        </th>
                        <td className="py-4 px-6">{endpoint2}</td>
                      </tr>

                      <tr className=" border-b bg-[#151922] dark:border-gray-700 ">
                        <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          "created"
                        </th>
                        <td className="py-4 px-6">{endpoint3}</td>
                      </tr>

                      <tr className="border-b bg-[#151922] border-gray-700 ">
                        <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          "filepath"
                        </th>
                        <td className="py-4 px-6">{endpoint4}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*This is the breakpoint*/}
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                <span>{endpoint1}</span>
                <span className="mb-4">Returns a single random image.</span>

                <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                <span>{endpoint2}</span>
                <span className="mb-4">
                  Returns a single image based on the uuid provided.
                </span>

                <span>{endpoint3}</span>
                <span className="mb-4">
                  Returns multiple random images based on quantity proviced.
                </span>

                <span>{endpoint4}</span>
                <span className="mb-4">
                  Returns multiple images based on tag and quantity provided.
                </span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white underline">
              How to use the API key
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <span>Feel free</span>
              <span>filler text</span>
              <span>filler text</span>
              <span>filler text</span>
              <span>filler text</span>
            </div>
            <div className="mt-24" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Documentation;

const endpoint1 =
  "https://imageapi-production.up.railway.app/api/v0/image/random/?key={key}";
const endpoint2 =
  "https://imageapi-production.up.railway.app/api/v0/image/uuid/{uuid}?key={key}";
const endpoint3 =
  "https://imageapi-production.up.railway.app/api/v0/images/random/?quantity={quantity}&key={key}";
const endpoint4 =
  "https://imageapi-production.up.railway.app/api/v0/images/tags/{tags}?quantity={quantity}&key={key}";
/* const endpoint4 =
const endpoint5 =
const endpoint6 =
const endpoint7 =
const endpoint8 =
const endpoint9 =
const endpoint10 = */

const model = `export type imageType = {
  name: string;
  uuid: string;
  tags: Array<string>;
  created: string;
  filepath: string;
};`;
