import Codeblocks from "../Components/Codeblocks";
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
        <div className="max-w-[1100px] w-full mx-auto p-8 px-8 ">
          <h2 className="text-7xl font-bold text-white mb-8">
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
                The objects contains the following fields. Below shows a
                typescript custom type that implements the json object.
              </span>
              <Codeblocks code={type} startingLineNumber={1} codeBlock={true} />

              <h2 className="text-4xl font-bold text-white underline py-4">
                Endpoints
              </h2>
              <div className="flex flex-col text-gray-400 py-2">
                <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                  <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                  Supported GET endpoints
                </span>

                {/*This is the breakpoint where shit is being put in*/}
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg py-4">
                  <table className="w-full text-base text-left text-gray-400">
                    <thead className="text-xs uppercase bg-hybrid  text-gray-400">
                      <tr>
                        <th className="py-3 px-8">Method</th>
                        <th className="py-3 px-6">URL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" border-b bg-hybrid dark:border-gray-700 h-20">
                        <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <span className="bg-greeny px-5 py-4 rounded-lg">
                            GET
                          </span>
                        </th>
                        <td className="py-4 px-6">{endpoint1}</td>
                      </tr>
                      <tr className="border-b bg-hybrid dark:border-gray-700 h-20">
                        <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <span className="bg-greeny px-5 py-4 rounded-lg">
                            GET
                          </span>
                        </th>
                        <td className="py-4 px-6">{endpoint2}</td>
                      </tr>
                      <tr className=" border-b bg-hybrid dark:border-gray-700 h-20">
                        <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <span className="bg-greeny px-5 py-4 rounded-lg">
                            GET
                          </span>
                        </th>
                        <td className="py-4 px-6">{endpoint3}</td>
                      </tr>
                      <tr className="border-b bg-hybrid border-gray-700 h-20">
                        <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <span className="bg-greeny px-5 py-4 rounded-lg">
                            GET
                          </span>
                        </th>
                        <td className="py-4 px-6">{endpoint4}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*This is the breakpoint*/}
                <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                  <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                  Required query parameters.
                </span>
                <span className="mb-4">
                  All GET endpoints require an API-key as a query parameter. If
                  none is provided the request will be denied.
                </span>
                <span className="mb-4">
                  Quantity is one of the optional query parameters. And
                  determines the number of images to be returned. If the
                  parameter is not specified then the default value of 10 is
                  used.
                </span>
                <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                  <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                  Optional query parameters.
                </span>
                <span className="mb-4">
                  Only the GET endpoints for multiple images currently support
                  optional query parameters.
                </span>
                <span className="mb-4">
                  Quantity is one of the optional query parameters. And
                  determines the number of images to be returned. If the
                  parameter is not specified then the default value of 10 is
                  used.
                </span>

                <div className="flex flex-col text-gray-400">
                  <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                    <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                    /api/v0/image/random/
                  </span>
                </div>
                <span className="mb-4">
                  Returns a single pepe image object that is randomly selected
                  from the image database.
                </span>
                <div className="flex flex-col text-gray-400">
                  <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                    <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                    /api/v0/image/:uuid
                  </span>
                </div>
                <span className="mb-4">
                  Returns a single pepe image object that is selected based on
                  UUID provided in the request.
                </span>
                <div className="flex flex-col text-gray-400">
                  <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                    <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                    /api/v0/images/:tags
                  </span>
                </div>
                <span className="mb-4">
                  Returns an array of pepe image objects that are selected based
                  on the tags provided in the request. Quantity can be used as a
                  query parameter.
                </span>
              </div>
              <div className="flex flex-col text-gray-400">
                <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                  <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                  /api/v0/images/random/
                </span>
              </div>
              <span className="mb-4">
                Returns an array of pepe image objects that are randomly
                selected from the image database. Quantity can be used as a
                query parameter.
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white underline pb-4">
              API key usage
            </h2>
            <div className="flex flex-col text-gray-400">
              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                How to
              </span>
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <span>
                The API key is a requirement for authentication. It is therefor
                a request requirement that the API key is appended to the
                request URL.
              </span>
              <span>
                The API key field is coded as a query parameter, therefor the
                query should be started with ?=key{"{key}"}. It is important to
                note that unless this query parameter is filled out correctly,
                the response will be a 401 Unauthorized.
              </span>
              <div className="flex flex-col text-gray-400 py-2">
                <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                  <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                  Example implementation
                </span>
                <span className="mb-4">
                  It is good practise to keep the API-key in a env/config file,
                  and read in the key in order to not expose the key. The
                  following shows an example of how to do this in typescript.
                </span>
              </div>
              <Codeblocks code={env1} startingLineNumber={1} codeBlock={true} />
              <span className="mb-4">
                And then you can use ${`{process.env.REACT_APP_API_KEY}`} to
                access the key.
              </span>
              <Codeblocks code={env} startingLineNumber={1} codeBlock={true} />
              <h2 className="text-4xl font-bold text-white underline mb-5 mt-5">
                Full example of typescript implementation
              </h2>
              <span className="mb-1 text-sm font-normal leading-none text-gray-500 py-2">
                <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                /api/v0/image/:uuid
              </span>

              <span className="mb-4">
                If a single image is requested then a single json object will be
                returned. If multiple images are requested an array of json
                objects will be returned.
              </span>
              <Codeblocks
                code={code1}
                startingLineNumber={1}
                codeBlock={true}
              />
              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                /api/v0/image/random/
              </span>

              <span className="mb-4">
                If a single image is requested then a single json object will be
                returned. If multiple images are requested an array of json
                objects will be returned.
              </span>
              <Codeblocks code={code} startingLineNumber={1} codeBlock={true} />
              <span className="mb-1 text-sm font-normal leading-none text-gray-500 mt-4">
                <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                /api/v0/image/random/
              </span>

              <span className="mb-4">
                If a single image is requested then a single json object will be
                returned. If multiple images are requested an array of json
                objects will be returned.
              </span>
              <Codeblocks code={code} startingLineNumber={1} codeBlock={true} />
              <span className="mb-1 text-sm font-normal leading-none text-gray-500 mt-4">
                <div className="absolute w-3 h-3 rounded-full  -left-1.5 border dark:border-gray-900 dark:bg-gray-700" />
                /api/v0/image/random/
              </span>

              <span className="mb-4">
                If a single image is requested then a single json object will be
                returned. If multiple images are requested an array of json
                objects will be returned.
              </span>
              <Codeblocks code={code} startingLineNumber={1} codeBlock={true} />
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

const type = `export type imageType = {
  title: string;
  uuid: string;
  tags: Array<string>;
  created_at: string;
  filepath: string;
  filesize: number;
};`;

const env =
  `fetch("https://imageapi-production.up.railway.app/api/v0/image/random/&key=$` +
  `{process.env.REACT_APP_API_KEY}")`;

const env1 = `REACT_APP_API_KEY=98F5-120Awoke-684okweok`;

const code =
  `const getImagesEmpty = async () => {
  try {
    const res = await fetch(
      "https://imageapi-production.up.railway.app/api/v0/images/random/?quantity=10&key=$` +
  `{process.env.REACT_APP_API_KEY}",
      {
        method: "GET",
      });
    setImages(await res.json());
  } catch (error) {
    console.log(error);
  }
  console.log(images);
};`;

const code1 =
  `const getImagesEmpty = async () => {
  try {
    const res = await fetch(
      "https://imageapi-production.up.railway.app/api/v0/images/random/?quantity=10&key=$` +
  `{process.env.REACT_APP_API_KEY}",
      {
        method: "GET",
      });
    setImages(await res.json());
  } catch (error) {
    console.log(error);
  }
  console.log(images);
};`;

const code2 =
  `const getImagesEmpty = async () => {
  try {
    const res = await fetch(
      "https://imageapi-production.up.railway.app/api/v0/images/random/?quantity=10&key=$` +
  `{process.env.REACT_APP_API_KEY}",
      {
        method: "GET",
      });
    setImages(await res.json());
  } catch (error) {
    console.log(error);
  }
  console.log(images);
};`;

const code3 =
  `const getImagesEmpty = async () => {
  try {
    const res = await fetch(
      "https://imageapi-production.up.railway.app/api/v0/images/random/?quantity=10&key=$` +
  `{process.env.REACT_APP_API_KEY}",
      {
        method: "GET",
      });
    setImages(await res.json());
  } catch (error) {
    console.log(error);
  }
  console.log(images);
};`;

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
