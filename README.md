# Azuki NFT List

Azuki NFT List is a React app built with Next.js that fetches and displays all NFTs from the Azuki collection using the Chainstack Subgraph.

Here all the steps that I did to create this project.

## Create an Account on Chainstack and a Subgraph

1. Go to the Chainstack website: [https://chainstack.com/](https://chainstack.com/)
2. Sign up for a new account or log in if you already have one.
3. Once you are logged in, navigate to the Subgraph section.
4. Create a Project and a Subgraph.

## Configure and Deploy your Subgraph

To do this I used the [Online Documentation](https://docs.chainstack.com/docs/subgraphs-tutorial-a-beginners-guide-to-getting-started-with-the-graph).

1. Install the Graph CLI globally on your system:

```bash
npm install -g @graphprotocol/graph-cli
```

2. Initialize your project with the Graph CLI:

```bash
graph init
```

3. Edit files `schema.graphql` and `subgraph.yaml`.

4. Generate classes with the command:

```bash
graph codegen
```

5. Go to `src/azuki.ts` and update all code using the code inside the documentation.

6. Compile the subgraph and make it ready to be deployed:

```bash
graph build
```

7. Deploy with the command `Deployment command` that you find inside your Subgraph in your Chainstack Project:

```bash
graph deploy --node https://api.graph-eu.p2pify.com/YOUR_CODE/deploy --ipfs https://api.graph-eu.p2pify.com/YOUR_CODE/ipfs NAME_OF_YOUR_SUBGRAPH
```

8. Now you have to wait the Subgraph update on the Chainstack website.

## Configuration of @graphprotocol/client-cli for the Frontend

To do this I used the documentation on the [Github project](https://github.com/graphprotocol/graph-client).

To fetch and interact with data from the Chainstack subgraph in your frontend app, you'll need to configure the `@graphprotocol/client-cli`.

Open your terminal and inside the frontend directory run the following command to install the `@graphprotocol/client-cli` package as a development dependency in your NextJS app:

```bash
npm install @graphprotocol/client-cli --save-dev
```

After that you have to update the file `.graphclientrc.yml` inside the frontend directory with the endpoint that you can find inside your Subgraph project on Chainstack website.

And launch the command to create a runtime artifact:

```bash
npx graphclient build --fileType json
```

## Create the React APP

After all the configurations specified above, I created this simple page with all Azuki's NFTS where you can filter based on collection traits.
