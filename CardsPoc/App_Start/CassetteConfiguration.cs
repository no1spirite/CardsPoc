using System.Text.RegularExpressions;

using Cassette;
using Cassette.Scripts;
using Cassette.Stylesheets;

namespace CardsPoc.App_Start
{
    public class CassetteConfiguration : IConfiguration<BundleCollection>
    {
        public void Configure(BundleCollection bundles)
        {
            AddCoreScripts(bundles);
            AddHomeScripts(bundles);
            AddStylesheetBundles(bundles);
        }

        private void AddStylesheetBundles(BundleCollection bundles)
        {
            bundles.Add<StylesheetBundle>("~/bundles/css",
                                          "~/Content/cards.css"
                );
        }

        private void AddHomeScripts(BundleCollection bundles)
        {
            bundles.Add<ScriptBundle>("~/bundles/home",
                          new[]
                                          {
                                              "~/Scripts/CardsPoc/common.js",
                                              "~/Scripts/Extensions/knockout.extensions.js",
                                              "~/Scripts/CardsPoc/ViewModels/card.js",
                                              "~/Scripts/CardsPoc/ViewModels/cards.js",
                                              "~/Scripts/CardsPoc/cardsPoc.js"
                                          });
        }

        private void AddCoreScripts(BundleCollection bundles)
        {
            bundles.Add<ScriptBundle>("~/bundles/core",
                                      new[]
                                          {
                                              "~/Scripts/Vendor/jquery-1.8.2.js",
                                              "~/Scripts/Vendor/modernizr-2.6.2.js",
                                              "~/Scripts/Vendor/knockout-3.0.0.debug.js"
                                          });
        }
    }
}