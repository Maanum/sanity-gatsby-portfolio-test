export default {
  widgets: [
    {
      name: "sanity-tutorials",
      options: {
        templateRepoId: "sanity-io/sanity-template-gatsby-portfolio"
      }
    },
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "https://api.netlify.com/build_hooks/5f104d2307e86701c4b7d8d6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-portfolio-test-studio-7z2q5ti5",
                  apiId: "da8270a2-0935-499b-8993-fb2b95d4fbcc"
                },
                {
                  buildHookId: "https://api.netlify.com/build_hooks/5f104d2379be32730db5b113",
                  title: "Portfolio Website",
                  name: "sanity-gatsby-portfolio-test-web-qz5m6az9",
                  apiId: "e4bde65a-e8ae-456b-a821-b200c5727c37"
                }
              ]
            }
          }
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/Maanum/sanity-gatsby-portfolio-test",
            category: "Code"
          },
          {
            title: "Frontend",
            value: "",
            category: "apps"
          }
        ]
      }
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: { title: "Recent projects", order: "_createdAt desc", types: ["sampleProject"] },
      layout: { width: "medium" }
    }
  ]
};
