import Codeblocks from "../Components/Codeblocks";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Table, { UpperTable } from "../Components/Table";

function Documentation() {
  //mt is 44max-w-[650px]

  return (
    <div className="flex flex-row">
      <Navbar />

      <Sidebar />

      <div className="flex flex-col justify-center pt-28 ">
        {/*1050px relative border-l border-gray-700*/}

        <div className="lg:w-[900px]  mx-auto px-8 pb-8 mt-8 text-[#fff] text-base font-normal border-x border-b">
          <h2 id="API-Documentation" className="text-6xl fontbold  mb-8 ml-4">
            API-Documentation
          </h2>
          <h2
            id="Getting started"
            className="text-4xl font-bold  underline mb-5 pl-4"
          >
            Getting started
          </h2>
          <div className=" pl-4 mb-10 mt-2">
            <div className="flex flex-col py-2">
              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="API access" />
                API access
              </span>

              <span className="mb-6">
                To access the API, please create an developer account first.
              </span>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="Registration" />
                Registration
              </span>

              <span className="mb-6">
                Register for API usage by clicking the sign up buttom at the top
                right. This part is done purely to ratelimit overly excessive
                use. Once you have been successfully registered as a user, go
                ahead and click the account button at the top right which leads
                to the account page.
              </span>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="Generate API key" />
                Generate API key
              </span>

              <span className="mb-6">
                At the account page you are able to see the custom generated
                API-key for your account. This key is required to access the
                API. Incase your key has been compromised, you can generate a
                new one at any time, however only one key can be active at a
                time.
              </span>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="Terms of use" />
                Terms of use
              </span>

              <span className="mb-6">
                The API is currently in beta and is subject to change. The
                service is free of charge and should be accessible to anyone
                with a fair usecase. However I do reserve myself the right to
                terminate any user incase of malicious interaction.
              </span>

              <h2
                id="Data model"
                className="text-4xl font-bold text-white underline mb-5"
              >
                Data model
              </h2>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="Format" />
                Format
              </span>

              <span className="mb-6">
                The data will be sent in a json format.
              </span>

              <span className="mb-6">
                If a single image is requested then a single json object will be
                returned. If multiple images are requested an array of json
                objects will be returned.
              </span>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="Json fields" />
                Json fields
              </span>

              <span className="mb-6">
                The objects contains the following fields. Below shows a
                typescript custom type that implements the json object.
              </span>

              <Codeblocks
                code={type}
                startingLineNumber={1}
                codeBlock={true}
                language={"ts"}
                showLineNumbers={false}
              />

              <h2
                id="Endpoints"
                className="text-4xl font-bold text-white underline py-4"
              >
                Endpoints
              </h2>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500 pb-4">
                <div id="Supported GET endpoints" />
                Supported GET endpoints
              </span>

              <UpperTable header1={"METHOD"} header2={"URL"} />
              <Table endpoint={endpoint1} />
              <Table endpoint={endpoint2} />
              <Table endpoint={endpoint3} />
              <Table endpoint={endpoint4} />

              <span className="mb-1 text-sm font-normal leading-none text-gray-500 pt-4">
                <div id="Required query parameters" />
                Required query parameters
              </span>

              <span className="mb-6">
                All GET endpoints require an API-key as a query parameter. If
                none is provided the request will be denied.
              </span>

              <span className="mb-6">
                Quantity is one of the optional query parameters. And determines
                the number of images to be returned. If the parameter is not
                specified then the default value of 10 is used.
              </span>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="Optional query parameters" />
                Optional query parameters
              </span>

              <span className="mb-6">
                Only the GET endpoints for multiple images currently support
                optional query parameters.
              </span>

              <span className="mb-6">
                Quantity is one of the optional query parameters. And determines
                the number of images to be returned. If the parameter is not
                specified then the default value of 10 is used.
              </span>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="/api/v0/image/random/" />
                /api/v0/image/random/
              </span>

              <span className="mb-6">
                Returns a single pepe image object that is randomly selected
                from the image database.
              </span>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="/api/v0/image/:uuid" />
                /api/v0/image/:uuid
              </span>

              <span className="mb-6">
                Returns a single pepe image object that is selected based on
                UUID provided in the request.
              </span>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="/api/v0/images/:tags" />
                /api/v0/images/:tags
              </span>

              <span className="mb-6">
                Returns an array of pepe image objects that are selected based
                on the tags provided in the request. Quantity can be used as a
                query parameter.
              </span>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="/api/v0/images/random/" />
                /api/v0/images/random/
              </span>

              <span className="mb-6">
                Returns an array of pepe image objects that are randomly
                selected from the image database. Quantity can be used as a
                query parameter.
              </span>

              <h2
                id="How to use the API key"
                className="text-4xl font-bold text-white underline pb-4"
              >
                How to use the API key
              </h2>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="How to" />
                How to
              </span>

              <span className="mb-6">
                The API key is a requirement for authentication. It is therefor
                a request requirement that the API key is appended to the
                request URL.
              </span>

              <span className="mb-6">
                The API key field is coded as a query parameter, therefor the
                query should be started with ?=key{"{key}"}. It is important to
                note that unless this query parameter is filled out correctly,
                the response will be a 401 Unauthorized.
              </span>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="env file" />
                env file
              </span>

              <span className="mb-6">
                It is good practise to keep the API-key in a env/config file,
                and read in the key in order to not expose the key. The
                following shows an example of how to do this in typescript.
              </span>

              <Codeblocks
                code={env1}
                startingLineNumber={1}
                codeBlock={true}
                showLineNumbers={false}
                language={"ts"}
              />

              <span className="mb-6">
                And then you can use ${`{process.env.REACT_APP_API_KEY}`} to
                access the key.
              </span>

              <Codeblocks
                code={env}
                startingLineNumber={1}
                codeBlock={true}
                showLineNumbers={false}
                language={"ts"}
              />

              <h2
                id="Full example of endpoint implementation"
                className="text-4xl font-bold text-white underline mb-5 mt-5"
              >
                Full example of endpoint implementation
              </h2>

              <span className="mb-1 text-sm font-normal leading-none text-gray-500 py-2">
                <div id="1/api/v0/image/random/" />
                Discord bot pepe function
              </span>

              <span className="mb-6">
                A simple discord bot function written in Go with the discordgo
                library that returns a random pepe image.
              </span>
              <span className="mb-6"></span>

              <Codeblocks
                code={code1}
                startingLineNumber={1}
                codeBlock={true}
                showLineNumbers={true}
                language={"go"}
              />

              <span className="mb-1 text-sm font-normal leading-none text-gray-500">
                <div id="1/api/v0/image/:uuid" />
                /api/v0/image/:uuid
              </span>

              <span className="mb-6">
                If a single image is requested then a single json object will be
                returned. If multiple images are requested an array of json
                objects will be returned.
              </span>

              <Codeblocks
                code={code2}
                startingLineNumber={1}
                codeBlock={true}
                showLineNumbers={true}
                language={"ts"}
              />

              <span className="mb-1 text-sm font-normal leading-none text-gray-500 mt-4">
                <div id="1/api/v0/images/:tags" />
                /api/v0/images/:tags
              </span>

              <span className="mb-6">
                If a single image is requested then a single json object will be
                returned. If multiple images are requested an array of json
                objects will be returned.
              </span>

              <Codeblocks
                code={code3}
                startingLineNumber={1}
                codeBlock={true}
                showLineNumbers={true}
                language={"ts"}
              />

              <span className="mb-1 text-sm font-normal leading-none text-gray-500 mt-4">
                <div id="1/api/v0/images/random/" />
                /api/v0/images/random/
              </span>

              <span className="mb-6">
                If a single image is requested then a single json object will be
                returned. If multiple images are requested an array of json
                objects will be returned.
              </span>

              <Codeblocks
                code={code4}
                startingLineNumber={1}
                codeBlock={true}
                showLineNumbers={true}
                language={"ts"}
              />

              <div className="mt-6" />
            </div>
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
  Width: number;
  Height: number;
  BlurHash: string;
  Elo: number;
};`;

const env =
  `fetch("https://imageapi-production.up.railway.app/api/v0/image/random/&key=$` +
  `{process.env.REACT_APP_API_KEY}")`;

const env1 = `REACT_APP_API_KEY=98F5-120Awoke-684okweok`;

const code1 = `func pepe(m *discordgo.MessageCreate, s *discordgo.Session) {

	res, err := http.Get("https://imageapi-production.up.railway.app/api/v0/image/random/?key=98F5-120A0E8C-6847E4")
	if err != nil {
		log.Println(err)
	}
	defer res.Body.Close()
	var image Image
	err = json.NewDecoder(res.Body).Decode(&image)
	if err != nil {
		fmt.Println(err)
	}
	_, _ = s.ChannelMessageSend(m.ChannelID, image.Filepath)
}`;

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

const code4 =
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
