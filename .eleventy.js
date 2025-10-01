module.exports = function(eleventyConfig) {
  // Markdown dosyalarının içindeki resimlerin çalışması için ek ayar
  eleventyConfig.addPassthroughCopy("testler/**/*.png");
  eleventyConfig.addPassthroughCopy("testler/**/*.jpg");

  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: data => {
      if (Object.prototype.hasOwnProperty.call(data, "permalink") && data.permalink) {
        return data.permalink;
      }

      const stem = (data.page && data.page.filePathStem ? data.page.filePathStem : "").replace(/^\/+/g, "");

      if (!stem || stem === "index") {
        return "/testler/";
      }

      return `/testler/${stem}/`;
    }
  });

  return {
    dir: {
      input: "testler", // Sadece testler klasörünü girdi olarak kabul et
      includes: "../_includes", // Ana dizindeki _includes klasörünü kullan
      output: "_site" // Çıktıyı depo kökündeki _site klasörüne yaz
    },
    // Tüm markdown dosyalarını Nunjucks motoruyla işle, bu sayede "| safe" filtresi çalışır
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};

