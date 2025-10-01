module.exports = function(eleventyConfig) {
  // Markdown dosyalarının içindeki resimlerin çalışması için ek ayar
  eleventyConfig.addPassthroughCopy("testler/**/*.png");
  eleventyConfig.addPassthroughCopy("testler/**/*.jpg");

  return {
    dir: {
      input: ".", // Ana dizini girdi olarak kabul et
      includes: "_includes", // Şablonlar bu klasörde
      output: "_site"
    },
    // Tüm markdown dosyalarını HTML'e çevir
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
