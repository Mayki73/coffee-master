const path = require("path");
const brandsData = require("./src/data/brands.json");
const mulfunctions = require("./src/data/mulfunctions.json");

exports.createPages = async ({ graphql, actions, useStaticQuery }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: `http://coffeeremont24.by/`,
    toPath: `https://www.coffeeremont24.by/`,
  });

  createPage({
    path: "/repair/",
    component: path.resolve("./src/templates/repair.tsx"),
    context: {
      households: brandsData.machines[0].brands.slice(0, 11),
      builtIns: brandsData.machines[1].brands.slice(0, 11),
      professionals: brandsData.machines[2].brands.slice(0, 11),
      vendings: brandsData.machines[3].brands.slice(0, 11),
    },
  });

  brandsData.machines.forEach((machine) => {
    const pagePath = `/repair/${machine.type}`;

    createPage({
      path: pagePath,
      component: require.resolve("./src/templates/machineTypeTemplate.tsx"),
      context: {
        machine,
      },
    });

    machine.brands.forEach((brand) => {
      createPage({
        path: `${pagePath}/${brand.name}`,
        component: require.resolve("./src/templates/brandTemplate.tsx"),
        context: {
          brand,
        },
      });
    });
  });

  mulfunctions.mulfunctions.forEach((mulfunction) => {
    createPage({
      path: `/mulfunctions/${mulfunction.link}`,
      component: path.resolve("./src/templates/MulfunctionTemplate.tsx"),
      context: {
        mulfunction,
        advantages: mulfunctions.advantages,
      },
    });
  });
};
