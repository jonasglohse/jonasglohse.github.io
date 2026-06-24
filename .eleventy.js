module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("htmlDateString", (date) => {
    return new Date(date).toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("readableDate", (date) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  });

  eleventyConfig.addFilter("readingTime", (content) => {
    const words = content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  });

  eleventyConfig.addCollection("blogPosts", (collectionApi) => {
    const posts = collectionApi.getFilteredByTag("post");
    if (process.env.ELEVENTY_ENV === "production") {
      return posts.filter((p) => !p.data.draft);
    }
    return posts;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
