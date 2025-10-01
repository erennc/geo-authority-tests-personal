module.exports = function(eleventyConfig) {
  // Markdown dosyalarının içindeki resimlerin çalışması için ek ayar
  eleventyConfig.addPassthroughCopy("testler/**/*.png");
  eleventyConfig.addPassthroughCopy("testler/**/*.jpg");

  return {
    dir: {
      input: "testler", // Sadece 'testler' klasörünü girdi olarak kabul et
      includes: "../_includes", // Ana dizindeki _includes klasörünü kullan
      output: "../_site" // Çıktıyı ana dizindeki _site klasörüne yap
    },
    // Tüm markdown dosyalarını Nunjucks motoruyla işle, bu sayede "| safe" filtresi çalışır
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
