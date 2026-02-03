export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "portfolioSectionTitle",
      title: "Portfolio Section Title",
      type: "string",
      description:
        "The small title that appears between portfolio items (e.g., 'What we do:')",
      initialValue: "What we do:",
    },
    {
      name: "portfolioSectionHeading",
      title: "Portfolio Section Heading",
      type: "text",
      description: "The main heading between portfolio items",
      initialValue:
        "+7 years of experience in designing across the entire product ecosystem.",
    },
    {
      name: "portfolioSectionDescription",
      title: "Portfolio Section Description",
      type: "text",
      description: "The description text between portfolio items",
      initialValue:
        "From crafting intuitive interfaces, to partnering with developers, and producing marketing materials across multiple channels.",
    },
  ],
};
